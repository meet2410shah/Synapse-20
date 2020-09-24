  $(window).on('load',
  function()
          {
            $('.preloader').addClass('complete')
            $('.loader').addClass('complete1')
            setTimeout(function(){
              $('.preloader').css("display", "none");
            }, 3500)
          }
  )
