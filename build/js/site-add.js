"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

window.onload = function () {
  addEvent();
};

var CreateData =
/*#__PURE__*/
function () {
  function CreateData() {
    _classCallCheck(this, CreateData);
  }

  _createClass(CreateData, null, [{
    key: "newDate",
    value: function newDate() {
      var date = new Date();
      var yyyy = date.getFullYear();
      var mm = (date.getMonth() + 1 < 10 ? "0" : "") + (date.getMonth() + 1);
      var dd = (date.getDate() < 10 ? "0" : "") + date.getDate();
      var today = "".concat(yyyy, "/").concat(mm, "/").concat(dd, "  ").concat(date.getHours(), ":").concat(date.getMinutes(), ":").concat(date.getSeconds());
      return today;
    }
  }, {
    key: "localStorage",
    value: function (_localStorage) {
      function localStorage(_x, _x2, _x3) {
        return _localStorage.apply(this, arguments);
      }

      localStorage.toString = function () {
        return _localStorage.toString();
      };

      return localStorage;
    }(function (type, data, strClean) {
      localStorage.setItem(type, JSON.stringify(data));
      $(strClean).val('');
    })
  }]);

  return CreateData;
}();

var verification =
/*#__PURE__*/
function () {
  function verification() {
    _classCallCheck(this, verification);
  }

  _createClass(verification, null, [{
    key: "blank",
    value: function blank(elm, str) {
      if (!$(elm).val()) {
        new PNotify({
          title: "\u8ACB\u8F38\u5165".concat(str)
        });
        return;
      }
    }
  }]);

  return verification;
}();

function addEvent() {
  var data = JSON.parse(localStorage.getItem("siteList")) || [];
  $('.site-add-btn').click(function () {
    verification.blank('.input', "\u7AD9\u9EDE\u540D\u7A31");
    var tempObj = {
      name: $('.input').val(),
      date: CreateData.newDate()
    };
    data.push(tempObj);
    CreateData.localStorage('siteList', data, '.input');
  });
  $('.input').keyup(function () {
    if (event.keyCode === 13) {
      verification.blank('.input', "\u7AD9\u9EDE\u540D\u7A31");
      var tempObj = {
        name: $('.input').val(),
        date: CreateData.newDate()
      };
      data.push(tempObj);
      CreateData.localStorage('siteList', data, '.input');
    }
  });
}
//# sourceMappingURL=site-add.js.map
