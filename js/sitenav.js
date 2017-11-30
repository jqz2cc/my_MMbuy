$(function () {
  $("#header h2").text("商城导航");
  var url = {
    getsitenav: routeURL.getsitenav
  }
  renderName(url.getsitenav);

  function renderName(url) {
    routeURL.getData(url, {}, function (info) {
      console.log(info);
      $(".shopCity_content").html(template("shopCity_content", info));
    });
  }

})