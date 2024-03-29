$(function () {


  var obj = search();
  $(".nav .categoryname").text(obj.productname);

  var url = {
    getproDuct: routeURL.getproDuct,
    getProductcom: routeURL.getProductcom
  }

  ;
  (function () {
    renderProduct(url.getproDuct);
    rendeProductcom(url.getProductcom);

  })();

  // 渲染商品信息
  function renderProduct(url) {
    routeURL.getData(url, {
      productid: obj.productId
    }, function (info) {

      // 图片标题等信息的渲染
      $(".product_main .main_info").html(template("main_info", info));

      // table表格渲染
      $(".product_main .info_table").html(template("info_table", info));

      $(".nav .product_info").text(info.result[0].productName.split(" ")[0]);

    })
  }

  // 渲染评价信息
  function rendeProductcom(url) {
    routeURL.getData(url, {
      productid: obj.productId
    }, function (info) {
      // console.log(info);
      $(".assess_container").html(template("assess_container", info));
    })
  }

})