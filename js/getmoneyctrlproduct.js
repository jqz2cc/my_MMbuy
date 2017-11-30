$(function () {
  var url = {
    getMoneyctrlproduct: routeURL.getMoneyctrlproduct
  }

  var obj = search();
  console.log(obj);
  (function () {
    renderMoneyctrlproduct(url.getMoneyctrlproduct);
  })();

  function renderMoneyctrlproduct(url) {

    routeURL.getData(url, {
      productid: obj.productid
    }, function (info) {
      console.log(info);
      $(".product_content").html(template("product_content", info));
      $(".assess_ctrl").html(template("assess_ctrl", info));
    })
  }
})