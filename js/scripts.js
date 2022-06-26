$(document).ready(function(){
  $(window).scroll(function(){
    if(this.scrollY > 20){  /* 当屏幕划过第一个主页(Home)的时候，显示出goTop的那个标志,goTop类触发 */
      $(".navbar").addClass("sticky"); /* navbar类中增加一个sticky类 */
      $(".goTop").fadeIn(); /* goTop类显现出来 */
    }
    else{ /* 当屏幕划回第一个主页(Home)的时候，使goTop的那个标志消失,goTop类触发停止 */
      $(".navbar").removeClass("sticky"); /* navbar类中删除一个sticky类 */
      $(".goTop").fadeOut(); /* goTop类消失 */
    }
    if(this.scrollY > 600){  /* 当屏幕滑到About文字以下的时候,即技能进度条处的时候,触发进度条的动画 */
      $(".skill-bar").fadeIn(); /* skill-bar类显现出来 */
    }
    else{/* 当屏幕滑回About文字以上的时候,即技能进度条处的时候,触发进度条的动画 */
      $(".skill-bar").fadeOut();  /* skill-bar类消失 */
    }
  });

  $(".goTop").click(function(){scroll(0,0)});  /* goTop触发按下之后回到主页处,准确来说是滑到最开始的那里*/

  $('.menu-toggler').click(function(){  /* 按下按钮类menu-toggler触发函数 */
    $(this).toggleClass("active"); /* 对设置和移除所有this元素的 "active" 类进行切换  */
    $(".navbar-menu").toggleClass("active"); /* 对设置和移除所有.navbar-menu元素的 "active" 类进行切换  */
  });

  // jquery灯箱插件显示图片gallery
  $(".works").magnificPopup({ /* 初始化works类的popup（弹出窗口） */
    delegate: 'a',
    type: 'image',
    gallery:{enabled:true}
  });
});
