$(function () {
  var url = {
    getdiscountproduct: routeURL.getdiscountproduct
  }

  var obj = search();
  console.log(obj);

  ;
  (function () {
    rendergetdiscountproduct(url.getdiscountproduct);
  })();

  function rendergetdiscountproduct(url) {
    routeURL.getData(url, {
      productid: obj.productid
    }, function (info) {
      console.log(info);
      $(".product_content").html(template("product_content", info));
      $(".assess_ctrl").html(template("assess_ctrl", info));
    })
  }
})