$(function () {


  // 调用search函数获取地址栏数据
  var obj = search();

  console.log(obj);

  // 发送ajax请求

  var url = {
    getCategoryByid: routeURL.getCategoryByid,

    getproDuctlist: routeURL.getproDuctlist
  }
  var name = null;
  var product = null;
  // 获取pageid
  var pageId = 1;
  var num = null;


  ;
  (function () {
    renderCategoryByid(url.getCategoryByid);
    getproDuctlist(url.getproDuctlist)
  })();

  //  renderCategoryByid
  function renderCategoryByid(url) {
    routeURL.getData(url, {
      categoryid: obj.categoryId
    }, function (info) {
      console.log(url);
      console.log(obj.categoryid);
      console.log(info);

      $(".nav").html(template("nav", info));

      name = info.result[0].category;
    })
  }




  function getproDuctlist(url) {
    routeURL.getData(url, {
      categoryid: obj.categoryId,
      pageid: pageId
    }, function (info) {
      console.log(info);

      num = Math.ceil(info.totalCount / info.pagesize);


      // 渲染商品的详细信息
      $(".List").html(template("producelist", info));

      // 渲染下拉框的数据
      $(".list_page select").html(template("page_nav", info));

      // 重新给下拉框赋值
      $("#select").val(pageId);

    })
  }

  // 上一页
  $(".page_up").on('click', function (e) {
    e.preventDefault();
    if (pageId == 1) {
      return false;
    } else {
      pageId--;
    }
    // 重新渲染
    getproDuctlist(url.getproDuctlist);
  });

  // 下一页
  $(".page_down").on('click', function (e) {
    e.preventDefault();
    if (pageId == num) {
      return false;
    } else {
      pageId++;
    }
    // 重新渲染
    getproDuctlist(url.getproDuctlist);
  });

  //下拉框分页
  $("#select").on("change", function () {

    pageId = $("#select option:selected").text().split("/")[0];
    // 重新渲染
    getproDuctlist(url.getproDuctlist);
  });



  // 跳转
  $(".List").on("click", 'li', function () {
    console.log(999);
    location.href = "getproduct.html?productId=" + $(this).data("productid") + "&productname=" + name;
  })

})