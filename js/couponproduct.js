$(function () {
  // 改变顶部的通栏中的内容

  var obj = search();
  var index = null;

  $("#header h2").text(obj.title + "优惠券");

  // var url = {
  //   getcouponproduct: routeURL.getcouponproduct,
  // }

  renderProcuct(routeURL.getcouponproduct);

  function renderProcuct(url) {
    routeURL.getData(url, {
      couponid: obj.couponid
    }, function (info) {
      console.log(info);
      $(".coupon_content ul").html(template("coupon_content", info));





      // // 轮播图事件
      $(".coupon_content ul li").on("click", function () {
        $("body").addClass("change");

        console.log(info);
        $(".coupon_consort").show();
        index = $(this).data("index");
        // var info1 = null;
        // for (var i = 0; i < info.result.length; i++) {
        //   if (index == info.result[i].couponProductId) {
        //     info1 = info.result[i];
        //     break;
        //   }
        // }
        // console.log(info.result[index].couponProductImg);
        $(".coupon_consort .img").html(info.result[index].couponProductImg);
      });

      $(".coupon_consort .left").on("click", function (e) {
        e.stopPropagation();
        if (index == 0) {
          return false;
        } else {
          index--;
        }
        $(".coupon_consort .img").html(info.result[index].couponProductImg);
      });
      $(".coupon_consort .right").on("click", function (e) {
        e.stopPropagation();
        if (index == info.result.length) {
          return false;
        } else {
          index++;
        }
        $(".coupon_consort .img").html(info.result[index].couponProductImg);
      });



      // 轮播图消失
      $(".coupon_consort").on("click", function (e) {
        $("body").removeClass("change");
        $(this).hide();

      })

    })
  }





})