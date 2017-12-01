$(function () {
  var url = {
    getbrand: routeURL.getbrand,
    getbrandproductlist: routeURL.getbrandproductlist,
    getproductcom: routeURL.getproductcom
  }
  var obj = search();
  console.log(obj);
  var productid = null;


  var brandtitleid = obj.brandtitleid;
  // console.log(brandtitleid);
  var pagesize = 4;;
  (function () {
    renderrand(url.getbrand);
    renderproduct(url.getbrandproductlist);

  })();

  // 获取品牌数据
  function renderrand(url) {
    routeURL.getData(url, obj, function (info) {

      $(".brand_list").html(template("brand_list", info))
    })
  }


  // 获取shangpin列表
  function renderproduct(url) {
    console.log(url);
    routeURL.getData(url, {
      brandtitleid: 0,
      pagesize: 4
    }, function (info) {
      console.log(info);
      $(".product_list").html(template("product_list", info));
    })
  }

  $(".product_list").on("click", "li", function () {

    var productid1 = $(this).data("productid");
    var that = $(this);
    // 在数据渲染完成之后渲染数据
    setTimeout(function () {
      that.find(".com_list").slideToggle(500);

    }, 100)
    // 判断是否点击的是同一个li 标签,如果是,阻止再次渲染
    if (productid == productid1) {
      return false;
    } else {
      productid = productid1;
    }

    // 渲染数据
    rendercommon(url.getproductcom);
    // 获取评价数据
    function rendercommon(url) {
      routeURL.getData(url, {
        productid: productid
      }, function (info) {
        console.log(info);
        that.find(".com_list").html(template("com_list", info));

      })
    }
  })
})