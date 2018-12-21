"use strict";

window.onload = function () {
  setSelectOption();
  addEvent();
};

var data = JSON.parse(localStorage.getItem("siteList")) || null;

function setSelectOption() {
  if (data === null) {
    return;
  }

  var objKeyData = Object.keys(data[0]);
  var dataLen = data.length;
  var objKeyDataLen = objKeyData.length;
  var str = "";
  str += ForLoops.selectArea(data, objKeyData, dataLen, objKeyDataLen, str, '', 'removeAll');
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
    verification.blank('input', ['員工編號', '護士姓名']);
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
