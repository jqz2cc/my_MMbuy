$(function () {
  var url = {
    getinlanddiscount: routeURL.getinlanddiscount
  }



  ;
  (function () {
    rendertinlanddiscount(url.getinlanddiscount)
  })();

  function rendertinlanddiscount(url) {
    routeURL.getData(url, {}, function (info) {
      console.log(info);
      $('.inland_content ul').html(template("inland_content", info));
    })
  }



})