let currentIndex = 1; // 当前是在第几个
  let timer;

  const carousal = {
    init: function (object) {
      const { el, banners, interval } = object;

      // banner至少为3个
      const length = banners.length;
      if (length === 1) {
        banners.push(banners[0]);
        banners.push(banners[0])
      }
      if (length === 2) {
        banners.push(banners[0]);
      }
      this._render(el, banners);
      timer = setInterval(this._next.bind(this), interval);
      this.listenPaginationTouch.apply(this);
    },

    _render: function (el, banners) {
      const imgUl = document.createElement('div');
      imgUl.className = 'banner-list';
      let imgUlInnerHTML = '';

      const paginationBox = document.createElement('div');
      paginationBox.className = 'pagination-box';
      let paginationBoxInnerHTML = '';

      banners.forEach((item, index) => {
        imgUlInnerHTML += `<div class="banner-item ${index === 0 ? 'banner-item-prev' : ''} ${index === 1 ? 'banner-item-current' : ''} ${index === 2 ? 'banner-item-next' : ''} ${index > 2 ? 'banner-item-out' : ''}"><img src="${item.imageUrl}"></div>`;

        paginationBoxInnerHTML += `<div class="pagination-item index-${index} ${index === currentIndex ? 'active' : ''}"></div>`
      });
      imgUl.innerHTML = imgUlInnerHTML;
      paginationBox.innerHTML = paginationBoxInnerHTML;
      el.appendChild(imgUl);
      el.appendChild(paginationBox);
    },

    // 右边的那个图片变成当前的大图
    _next: function () {
      let bannerList = document.querySelectorAll('.banner-item');
      let length = bannerList.length;
      currentIndex = (currentIndex + 1) % length;
      this._changeNextOrder(currentIndex);
      this._renderPagination(currentIndex);
    },

    // 向右交换顺序
    _changeNextOrder: function (_currentIndex) {
      let bannerList = document.querySelectorAll('.banner-item');
      let length = bannerList.length;

      bannerList.forEach((item, index) => {
        if (index === _currentIndex) {
          item.className = 'banner-item banner-item-current'
        } else if (index === ((_currentIndex - 1 + length) % length)) {
          item.className = 'banner-item banner-item-prev'
        } else if (index === ((_currentIndex + 1) % length)) {
          item.className = 'banner-item banner-item-next'
        } else {
          item.className = 'banner-item banner-item-out'
        }
      })
    },

    _renderPagination: function (_currentIndex) {
      let paginationList = document.querySelectorAll('.pagination-item');
      paginationList.forEach((item, index) => {
        if (index === _currentIndex) {
          item.classList.add('active');
        } else {
          item.classList.remove('active');
        }
      })
    },

    // 监听小圆点按钮点击
    listenPaginationTouch: function () {
      let paginationBox = document.querySelector('.pagination-box');
      paginationBox.addEventListener('click', (event) => {
        const target = event.target;
        if (target.classList.contains('pagination-item')) {
          try {
            let className = target.classList[1];
            let index = Number(className.split('-')[1]);
            this._changeNextOrder(index);
            this._renderPagination(index);
            currentIndex = index;
            clearInterval(timer);
            timer = setInterval(this._next.bind(this), 5000);
          } catch (error) {
            throw new Error(error);
          }
        }
      })
    }
  }
	
const carousalDom = document.querySelector('.music-carousal');
const banners = [
	{
		imageUrl: "assets/sponsors-logo/11.png"
	},
	{
		imageUrl: "assets/sponsors-logo/13.jpeg"
  },
  {
		imageUrl: "assets/sponsors-logo/20.png"
	},
	{
		imageUrl: "assets/sponsors-logo/21.png"
  },
  {
		imageUrl: "assets/sponsors-logo/24.png"
	},
	
]
carousal.init({
	el: carousalDom,
  banners,
  interval: 5000
});