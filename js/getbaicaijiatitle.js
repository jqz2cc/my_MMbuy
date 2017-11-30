$(function () {
  // 改变顶部的通栏中的内容
  $("#header h2").text("白菜价-淘宝内部折扣");

  // 获取标题栏数据

  var url = {
    // 获取标题的接口
    getbaicaijiatitle: routeURL.getbaicaijiatitle,
    // 获取列表详情的接口
    getbaicaijiaproduct: routeURL.getbaicaijiaproduct
  }
  // 定义一个变量接收
  var titleid = 0;

  ;
  (function () {
    rendertitle(url.getbaicaijiatitle);
    renderproduct(url.getbaicaijiaproduct);
  })();


  // 获取标题的数据

  function rendertitle(url) {
    routeURL.getData(url, {}, function (info) {
      console.log(info);
      $(".product_title ul").html(template("product_title", info));
    })
  }



  function renderproduct(url) {
    routeURL.getData(url, {
      titleid: titleid
    }, function (info) {
      console.log(info);
      $(".product_content ul").html(template("product_content", info));
    })
  }
  // 点击获取响应的列表数据
  // 注册点击事件
  $(".product_title ul").on("click", "li", function () {
    $(this).addClass("active").siblings().removeClass("active")
    titleid = $(this).data("id");
    renderproduct(url.getbaicaijiaproduct);
  })

})