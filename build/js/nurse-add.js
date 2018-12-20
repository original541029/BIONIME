"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

window.onload = function () {
  setSelectOption();
  addEvent();
};

var ForLoops =
/*#__PURE__*/
function () {
  function ForLoops() {
    _classCallCheck(this, ForLoops);
  }

  _createClass(ForLoops, null, [{
    key: "selectArea",
    value: function selectArea(data, objKeyData, dataLen, objKeyDataLen, str) {
      for (var i = 0; i < dataLen; i++) {
        for (var j = 0; j < objKeyDataLen; j++) {
          if (objKeyData[j] == "name") {
            str += "<option data-num=".concat(i, ">").concat(data[i][objKeyData[j]], "</option>");
          }
        }
      }

      return str;
    }
  }]);

  return ForLoops;
}();

var ActEvent =
/*#__PURE__*/
function () {
  function ActEvent() {
    _classCallCheck(this, ActEvent);
  }

  _createClass(ActEvent, null, [{
    key: "clickBtn",
    value: function clickBtn(btn, addArea, elm, elmSub) {
      $(btn).click(function () {
        var str = '';

        if ($(elm).val() == null) {
          return;
        }

        var selectOptionAll = document.querySelectorAll(elmSub);
        var selectOptionAllLen = selectOptionAll.length;

        for (var i = 0; i < selectOptionAllLen; i++) {
          if ($(elm).val() == selectOptionAll[i].text) {
            selectOptionAll[i].remove();
            var dataNum = selectOptionAll[i].dataset.num;
            str += "<option data-num=\"".concat(dataNum, "\">").concat(selectOptionAll[i].text, "</option>");
            var removeSelectArea = document.querySelector(addArea);
            removeSelectArea.innerHTML += str;
          }
        }
      });
    }
  }]);

  return ActEvent;
}();

var data = JSON.parse(localStorage.getItem("siteList")) || null;

function setSelectOption() {
  if (data === null) {
    return;
  }

  var objKeyData = Object.keys(data[0]);
  var dataLen = data.length;
  var objKeyDataLen = objKeyData.length;
  var str = "";
  str += ForLoops.selectArea(data, objKeyData, dataLen, objKeyDataLen, str);
  var addSelectArea = document.createElement('select');
  addSelectArea.setAttribute('class', 'add-select-area');
  addSelectArea.setAttribute('size', '8');
  var removeSelectArea = document.createElement('select');
  removeSelectArea.setAttribute('class', 'remove-select-area');
  removeSelectArea.setAttribute('size', '8');
  removeSelectArea.innerHTML += str;
  var selectGroup = document.querySelector('.select-group');
  var addBtn = document.createElement('button');
  addBtn.setAttribute('type', 'button');
  addBtn.setAttribute('class', "btn btn-primary add-btn");
  addBtn.innerText = '加入';
  var removeBtn = document.createElement('button');
  removeBtn.setAttribute('type', 'button');
  removeBtn.innerText = '移除';
  removeBtn.setAttribute('class', "btn btn-primary remove-btn");
  selectGroup.appendChild(addSelectArea);
  selectGroup.appendChild(addBtn);
  selectGroup.appendChild(removeBtn);
  selectGroup.appendChild(removeSelectArea);
  ActEvent.clickBtn('.add-btn', '.add-select-area', '.remove-select-area', '.remove-select-area > option');
  ActEvent.clickBtn('.remove-btn', '.remove-select-area', '.add-select-area', '.add-select-area > option');
}

function addEvent() {
  var dataNurse = JSON.parse(localStorage.getItem("nurseList")) || [];
  $('.nurse-add-btn').click(function () {
    verification.blank('.number', '員工編號');
    verification.blank('.nurse-name', '護士姓名');
    var addOpt = document.querySelectorAll('.add-select-area>option');
    var len = addOpt.length;
    console.log(data);

    for (var i = 0; i < len; i++) {
      var tempObj = {
        員工: {
          員工編號: $('.number').val(),
          護士姓名: $('.nurse-name').val(),
          加入時間: CreateData.newDate()
        }
      };
      var updatedDate = Object.assign(data[addOpt[i].dataset.num], tempObj);
      dataNurse.push(updatedDate);
      localStorage.setItem("nurseList", JSON.stringify(dataNurse));
      console.log(updatedDate);
    }
  });
}
//# sourceMappingURL=nurse-add.js.map
