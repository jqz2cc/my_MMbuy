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

  var that = null;
  var a = 0;
  var b = 0;


  // 获取数据函数的调用
  ;
  (function () {
    // 店铺数据
    // rendershop(url.getgsshop);
    // 获取商品数据
    renderproduct(url.getgsproduct);
  })();



  function rendershop(url) {
    // that.data('')
    routeURL.getData(url, {}, function (info) {
      // console.log(info);
      $(".shop_info>ul").html(template("shop_info", info));

      // that.attr('title', info.result.length);
      // that.attr('data-index', info.result.length);

    })
  }
  // 点击事件
  // 点击京东的时候获取商铺的数据
  // 点击华北获取地区数据\

  $(".shop ul li").on("click", function (e) {

    e.stopPropagation();
    var title = $(this).attr("title");
    var index = $(this).data("index");

    that = $(this);
    $(".shop_info").slideToggle(300);

    if ($(this).data("index") == 1) {
      if (a == 0) {
        $url = url.getgsshop;
        a++;
        b = 0;
      } else {
        return false;
      }
    } else if ($(this).data("index") == 2) {
      if (b == 0) {
        $url = url.getgsshoparea;
        b++;
        a = 0;
      } else {
        return false;
      }
    }

    rendershop($url);

  });

  // 收起下拉菜单
  $("body").on("click", function () {
    $(".shop_info").slideUp(300);
  });
  // 获取商铺id和地区id
  $(".shop_info>ul").on('click', "li", function () {

    $(this).data("shopid") !== "" ? ids.shopid = $(this).data("shopid") : "";

    $(this).data("areaid") !== "" ? ids.areaid = $(this).data("areaid") : "";
    // 改变头部标题行的字体
    that.find("span").text($(this).find(".name").text());
    // 获取商品数据
    renderproduct(url.getgsproduct);
    $(this).addClass("active").siblings().removeClass("active");

  })
  // 给li标签注册点击事件获取
  function renderproduct(url) {
    // console.log(ids);
    routeURL.getData(url, ids, function (info) {
      // console.log(info);
      $(".coupon_content>ul").html(template("coupon_content", info));
    })
  }



})