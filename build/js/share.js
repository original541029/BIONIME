"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

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

var combinationElm =
/*#__PURE__*/
function () {
  function combinationElm() {
    _classCallCheck(this, combinationElm);
  }

  _createClass(combinationElm, null, [{
    key: "elmLoop",
    value: function elmLoop(ary, strOut, strInner) {
      var str = "<".concat(strOut, ">");
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = ary[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var val = _step.value;
          str += "<".concat(strInner, ">").concat(val, "</").concat(strInner, ">");
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return != null) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      str += "</".concat(strOut, ">");
      return str;
    }
  }, {
    key: "nestedLoops",
    value: function nestedLoops(data, objKeyData, dataLen, objKeyLen, strTbody) {
      for (var i = 0; i < dataLen; i++) {
        strTbody += "<tr>";

        for (var j = 0; j < objKeyLen + 1; j++) {
          if (j == 2) {
            var strSiteName = JSON.stringify(data[i]["name"]).replace(/\"/g, "'");
            strTbody += "<td class=\"d-flex\"><div onclick=\"nurseView(".concat(strSiteName, ")\" class=\"model-btn mr-2 cursor-potion\" data-toggle=\"modal\" data-target=\"#myModal\"><i class=\"fas fa-users\"></div></i><div class=\"cursor-potion text-danger delete\" data-num=\"").concat(i, "\">X</div></td>");
          } else {
            strTbody += "<td>".concat(data[i][objKeyData[j]], "</td>");
          }
        }

        strTbody += '</tr>';
      }

      console.log(strTbody);
      return strTbody;
    }
  }]);

  return combinationElm;
}();
//# sourceMappingURL=share.js.map
