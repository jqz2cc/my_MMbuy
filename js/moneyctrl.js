$(function () {
  // var url=routeURL.getMoneyctrl;
  var url = {
    getMoneyctrl: routeURL.getMoneyctrl
  }
  var obj = search();
  var pageid = 1;
  var num = null;

  var paidnum = obj.pageid;

  if (location.search.indexOf("pageid") != -1) {
    pageid = paidnum;
  }
  // console.log(paidnum);
  // console.log(location.search.indexOf("pageid"));
  (function () {
    renderMoney(url.getMoneyctrl);
  })();

  function renderMoney(url) {

    routeURL.getData(url, {
      pageid: pageid
    }, function (info) {
      console.log(info);
      $("#rebate_content_warp").html(template("rebate_content", info));
      var num = Math.ceil(info.totalCount / info.pagesize);
      info.num = num
      $("#select").html(template("page", info));
      $("#select").val(pageid);
    })
  }

  $(".product_up").on("click", function () {
    if (pageid == 1) {
      return false;
    } else {
      pageid--;
    }
    renderMoney(url.getMoneyctrl);
  });


  $(".product_down").on('click', function () {

    if (pageid == num) {
      return false;
    } else {
      pageid++;
    }

    renderMoney(url.getMoneyctrl);
  });

  $("#select").on('change', function () {


    pageid = $("#select option:selected").text().split("/")[0];

    renderMoney(url.getMoneyctrl);
  })


  $("#rebate_content_warp").on("click", "a", function () {
    console.log($(this).data("productid"));
    location.href = "getmoneyctrlproduct.html?productid=" + $(this).data("productid") + "&pageid=" + pageid;
  })

})