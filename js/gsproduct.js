$(function () {

  $("#header h2").text("凑单品");

  // 获取数据
  var url = {
    // 店铺
    getgsshop: routeURL.getgsshop,
    // 地区
    getgsshoparea: routeURL.getgsshoparea,
    // 商品
    getgsproduct: routeURL.getgsproduct
  }
  // 获取商品数据
  var ids = {
    shopid: 0,
    areaid: 0
  }

  // 获取数据函数的调用
  ;
  (function () {
    // 店铺数据
    rendershop(url.getgsshop);

    // 获取商品数据
    renderproduct(url.getgsproduct);


  })();

  function rendershop(url) {
    routeURL.getData(url, {}, function (info) {
      console.log(info);
      $(".shop_info>ul").html(template("shop_info", info));

    })
  }


  // 点击事件
  // 点击京东的时候获取商铺的数据
  // 点击华北获取地区数据
  $(".shop ul li").on("click", function (e) {
    e.stopPropagation();
    $(this).data("index") == 1 ? $url = url.getgsshop : $url = url.getgsshoparea;
    rendershop($url);
    // $('.shop_info').slidetoggle(300);
    $(".shop_info").slideDown(300);

  });
  // 收起下拉菜单
  $("body").on("click", function () {
    $(".shop_info").slideUp(300);
  });


  // 获取商铺id和地区id
  $(".shop_info>ul").on('click', "li", function () {

    $(this).data("shopid") !== "" ? ids.shopid = $(this).data("shopid") : "";

    $(this).data("areaid") !== "" ? ids.areaid = $(this).data("areaid") : "";

    // 获取商品数据
    renderproduct(url.getgsproduct);
    $(this).addClass("active").siblings().removeClass("active");


  })

  // 给li标签注册点击事件获取
  function renderproduct(url) {
    console.log(ids);
    routeURL.getData(url, ids, function (info) {
      console.log(info);
      $(".coupon_content>ul").html(template("coupon_content", info));
    })
  }



})