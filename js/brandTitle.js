$(function () {
  var url = {
    // 标题
    getbrandtitle: routeURL.getbrandtitle,

  }
  // var obj = search();
  // console.log(obj);
  // 获取大标题
  renderTitle(url.getbrandtitle);

  function renderTitle(url) {
    routeURL.getData(url, {}, function (info) {
      console.log(info);
      $(".product_content ul").html(template('product_content', info));
    })
  }
})