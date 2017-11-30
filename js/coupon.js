$(function () {
  $("#header h2").text("优惠券");

  var url = {
    getcoupon: routeURL.getcoupon,
  }
  rendercoupon(url.getcoupon);

  function rendercoupon(url) {
    routeURL.getData(url, {}, function (info) {
      console.log(info);
      $(".coipon_content ul").html(template("coipon_content", info));
    })
  }

})