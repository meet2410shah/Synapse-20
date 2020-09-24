// sidebar
function toggle_div(){
    var element = document.getElementById('sidebar');
    element.classList.toggle('sidebar_active');
}
// sidebar ends
 
//scrollify
$(function() {
    $.scrollify({
    section : ".fullpage-scroll",
    afterRender: function(){
        $('li a').on('click', function(){
            $.scrollify.move($(this).attr('href'));
        });
    }
    });
});

//LOADER
$(window).on('load',
function()
        {
          $('.preloader').addClass('complete');
          $('.loader').addClass('complete1');
        }
)
///////////////
