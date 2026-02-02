//jquery-click-scroll
//by syamsul'isul' Arifin

$(document).ready(function(){
    // 初始化导航链接状态
    $('.navbar-nav .nav-item .nav-link:link').addClass('inactive');    
    $('.navbar-nav .nav-item .nav-link').eq(0).addClass('active');
    $('.navbar-nav .nav-item .nav-link:link').eq(0).removeClass('inactive');
    
    // 单一的滚动事件监听器
    $(document).scroll(function(){
        var scrollPosition = $(document).scrollTop() + 83;
        
        // 检查每个部分的位置
        $('.nav-link.click-scroll').each(function(){
            var targetId = $(this).attr('href');
            var targetSection = $(targetId);
            
            if (targetSection.length) {
                var sectionTop = targetSection.offset().top;
                var sectionBottom = sectionTop + targetSection.outerHeight();
                
                if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                    $('.navbar-nav .nav-item .nav-link').removeClass('active').addClass('inactive');
                    $(this).addClass('active').removeClass('inactive');
                }
            }
        });
    });
    
    // 绑定点击事件到所有导航链接
    $('.nav-link.click-scroll').click(function(e){
        e.preventDefault();
        var targetId = $(this).attr('href');
        var targetSection = $(targetId);
        
        if (targetSection.length) {
            var offsetTop = targetSection.offset().top - 83;
            
            $('html, body').animate({
                'scrollTop': offsetTop
            }, 500);
        }
    });
});
