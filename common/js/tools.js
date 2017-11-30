function search() {
  // var url = url.replace("?", "");
  var str = decodeURI(location.search);
  var url = str.replace("?", "");
  var arr = url.split("&");
  // console.log(arr);
  var obj = {};
  arr.forEach(function (e, i) {
    var key = e.split("=")[0];
    var value = e.split("=")[1];

    obj[key] = value;
  });


  return obj;
};