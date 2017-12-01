$(function () {
  var url = {
    getCategoryTitle: routeURL.getCategoryTitle,
    getCategorydata: routeURL.getCategory
  }

  ;
  (function () {
    renderCate(url.getCategoryTitle);
    render(url.getCategorydata);

  })();

  // 渲染标题数据
  function renderCate(url) {
    routeURL.getData(url, {}, function (info) {
      console.log(info);
      $(".ul_warp").html(template("cate_title", info));

    })
  }



  // 获取渲染数据

  function render(url) {
    $(".ul_warp").on("click", ".cate_title", function () {
      var that = $(this);

      var id = $(this).data('id');

      routeURL.getData(url, {
        titleid: id
      }, function (info) {
        console.log(info);
        that.next().html(template("cate_data", info));
      })

      $(this).siblings(".inner_warp").slideToggle(200);
    })
  }








})