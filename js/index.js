$(function () {
  var url = {
    getIndexMenu: routeURL.getIndexMenu,
    getMoneyCtrl: routeURL.getMoneyCtrl,
  }


  // 渲染
  ;
  (function () {
    renderMainNav(url.getIndexMenu);
    rendergetMoneyCtrl(url.getMoneyCtrl);
  })();
  // 获取数据
  function renderMainNav(url) {
    routeURL.getData(url, {}, function (info) {
      console.log(info);
      var str = info.result[0].img;
      // console.log(str);
      // console.log(str.slice(0, str.length));
      $(".M_category .MainNav").html(template('category', info));

      // 点击更多  添加事件
      $("[data-index='7']").on("click", function () {
        console.log(666);
        $(".M_category").toggleClass('M_small', 300);
      })

    });

  }


  function rendergetMoneyCtrl(url) {
    routeURL.getData(url, {}, function (info) {
      console.log(info);
      $(".rebate_content_warp").html(template("rebate_content", info))

    })
  };



})