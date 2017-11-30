$(function () {
  var html = '<div class="header_top">' +
    ' <img src="./images/header_logo.png" alt="" class="pic_left">' +
    ' <img src="./images/header_app.png" alt="" class="pic_right">' +
    '</div>' +
    '<div class="header_search">' +
    '<form action="">' +
    ' <input type="text" placeholder="请输入你想比价的商品" class="search_input">' +
    '<button class="search_btn">搜索</button>' +
    ' </form>' +
    '</div>'
  $('header').html(html);


  var foot = ' <div class="foot_top">' +
    '<ul class="clearfix">' +
    '<li style="width:30%">' +
    ' <a href="#">登录</a>' +
    '</li>' +
    '<li style="width:25%">' +
    ' <a href="#">注册</a>' +
    '</li>' +
    ' <li style="width:45%" class="to_top">' +
    '   <a href="javascript:;">' +
    '    <img src="./images/top.jpg" alt=""> 返回顶部' +
    '  </a>' +
    ' </li>' +
    '</ul>' +
    '</div>' +
    '<div class="foot_bottom">' +
    '<div>' +
    '<span class="foot_app">手机APP下载</span>' +
    ' <span class="foot_phone">慢慢买手机下载</span>' +
    '<span>--掌上比价平台</span>' +
    '</div>' +
    '<p>m.mmmmbuy.com</p>' +
    '</div>' +
    '</div>'

  $(".M_foot").html(foot);



  $(".to_top").on("click", function () {
    timer = setInterval(function () {
      var osTop = document.documentElement.scrollTop || document.body.scrollTop;
      var speed = Math.floor(-osTop / 6); //速度随距离动态变化，越来越小
      document.documentElement.scrollTop = document.body.scrollTop = osTop + speed;
      flag = true;
      if (osTop == 0) {
        clearInterval(timer); //回到顶部时关闭定时器
      }
    }, 30)
  });
})