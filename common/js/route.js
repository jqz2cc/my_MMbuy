/*
 * @Author: 贾倾真 
 * @Date: 2017-11-28 10:12:00 
 * @Last Modified by: 贾倾真
 * @Last Modified time: 2017-11-30 18:12:58
 */
(function (window) {
  function routeURL() {}

  routeURL.fn = routeURL.prototype = {
    constructor: routeURL,

  }
  // 给原型扩展内容
  routeURL.extend = routeURL.fn.extend = function (object) {
    for (var key in object) {
      if (object.hasOwnProperty(key)) {
        this[key] = object[key]
      }
    }
  };

  // 提取 基地址

  routeURL.extend({
    baseURL: 'http://127.0.0.1:9090'
  });

  // ajax发送请求封装
  routeURL.extend({
    getData: function (url, data, callback) {
      $.ajax({
        type: "get",
        url: url,
        data: data,
        dataType: "json",
        success: function (info) {
          callback && callback(info);
        },
        error: function (info) {
          console.log(!info, '服务器请求数据错误');
        }
      });
    }

  });


  // ------------------首页数据----------------------
  routeURL.extend({
    getIndexMenu: routeURL.baseURL + '/api/getindexmenu',
  });

  routeURL.extend({
    getMoneyCtrl: routeURL.baseURL + '/api/getmoneyctrl',
  })


  // -------------------分类页面数据------------------------------
  routeURL.extend({
    // 标题数据
    getCategoryTitle: routeURL.baseURL + '/api/getcategorytitle',

    // 内容数据
    getCategory: routeURL.baseURL + '/api/getcategory'

  })


  // -------------列表页数据----------------------------
  routeURL.extend({

    // 导航地址
    getCategoryByid: routeURL.baseURL + '/api/getcategorybyid',


    // 获取内容
    getproDuctlist: routeURL.baseURL + '/api/getproductlist'
  })



  //------------------获取详情页数据----------------------------------

  routeURL.extend({
    getproDuct: routeURL.baseURL + '/api/getproduct',

    getProductcom: routeURL.baseURL + '/api/getproductcom'
  })


  // ----------------------------省钱控-------------------------
  routeURL.extend({
    getMoneyctrl: routeURL.baseURL + '/api/getmoneyctrl'
  })

  // ---------------------------省钱控详情页-----------------------------------
  routeURL.extend({
    getMoneyctrlproduct: routeURL.baseURL + '/api/getmoneyctrlproduct',
  })


  // -------------------------国内折扣--------------------------------------


  routeURL.extend({
    getinlanddiscount: routeURL.baseURL + '/api/getinlanddiscount',

    getdiscountproduct: routeURL.baseURL + '/api/getdiscountproduct'
  })


  // -----------------------------白菜价--------------------------------------
  routeURL.extend({
    // 标题
    getbaicaijiatitle: routeURL.baseURL + '/api/getbaicaijiatitle',
    // 内容
    getbaicaijiaproduct: routeURL.baseURL + '/api/getbaicaijiaproduct'

  })

  // --------------------------优惠券---------------------------
  routeURL.extend({
    // 标题
    getcoupon: routeURL.baseURL + '/api/getcoupon',
    // 商品
    getcouponproduct: routeURL.baseURL + '/api/getcouponproduct'

  })
  routeURL.extend({
    // 店铺
    getgsshop: routeURL.baseURL + '/api/getgsshop',

    // 地区
    getgsshoparea: routeURL.baseURL + '/api/getgsshoparea',

    // 商品
    getgsproduct: routeURL.baseURL + '/api/getgsproduct'

  })
  // ------------------------商城导航-------------------------------------
  routeURL.extend({
    getsitenav: routeURL.baseURL + '/api/getsitenav'
  })

  window.routeURL = routeURL;

})(window);