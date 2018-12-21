"use strict";

window.onload = function () {
  table();
};

function table() {
  var nurseData = JSON.parse(localStorage.getItem("nurseList")) || null;
  $('.table').remove();

  if (nurseData == null) {
    return;
  }

  var ary = ['員工編號', '修改時間', '動作'];
  var strThead = combinationElm.elmLoop(ary, 'tr', 'th');
  var objKeyData = Object.keys(nurseData[0]);
  console.log(objKeyData);
  var dataLen = nurseData.length;
  var objKeyLen = objKeyData.length;
  console.log(nurseData);
  var strTbody = "<tr>";

  for (var i = 0; i < dataLen; i++) {
    for (var j = 0; j < objKeyLen; j++) {
      if (j == 2) {
        var obj = Object.keys(nurseData[i][objKeyData[j]]);
        console.log(obj);
        var objLen = obj.length + 1;

        for (var k = 0; k < objLen; k++) {
          if (k != 1) {
            if (k == 3) {
              var tempObj = {
                "員工編號": nurseData[i][objKeyData[j]]["員工編號"],
                "護士姓名": nurseData[i][objKeyData[j]]["護士姓名"],
                "siteName": nurseData[i]["name"],
                "placeNum": i
              };

              var _obj = JSON.stringify(tempObj).replace(/\"/g, "'");

              strTbody += "<td class=\"d-flex\"><div onclick=\"nurseView(".concat(_obj, ")\" class=\"model-btn mr-2 cursor-potion\"><i class=\"fas fa-users\"></div></i><div class=\"cursor-potion text-danger delete\" data-num=\"").concat(i, "\">X</div></td>");
            } else {
              strTbody += "<td>".concat(nurseData[i][objKeyData[j]][obj[k]], "</td>");
            }
          }
        }

        strTbody += '</tr>';
      }
    }
  }

  var thead = document.createElement('thead');
  var tbody = document.createElement('tbody');
  var table = document.createElement('table');
  table.setAttribute('class', 'table');
  var tableArea = document.querySelector('.table-area');
  thead.innerHTML = strThead;
  tbody.innerHTML = strTbody;
  table.appendChild(thead);
  table.appendChild(tbody);
  tableArea.appendChild(table);

  if ($('.delete').length != 0) {
    removeRow();
  }
}

function removeRow() {
  var nurseData = JSON.parse(localStorage.getItem("nurseList")) || null;
  $('.delete').click(function (e) {
    var num = e.target.dataset.num;
    nurseData.splice(num, 1);
    localStorage.setItem("nurseList", JSON.stringify(nurseData));
    table();
  });
}

function nurseView(obj) {
  $('.remove-select-area').remove();
  $('.add-select-area').remove();
  $('.add-btn').remove();
  $('.remove-btn').remove();
  console.log(obj["siteName"]);
  $('#myModal').modal('show');
  $('.number').val(obj["員工編號"]);
  $('.nurse-name').val(obj["護士姓名"]);
  var data = JSON.parse(localStorage.getItem("siteList")) || null;

  if (data == null) {
    return;
  }

  var objKeyData = Object.keys(data[0]);
  var dataLen = data.length;
  var objKeyDataLen = objKeyData.length;
  var strAdd = "";
  strAdd += ForLoops.selectArea(data, objKeyData, dataLen, objKeyDataLen, str, obj["siteName"], 'add');
  var str = "";
  str += ForLoops.selectArea(data, objKeyData, dataLen, objKeyDataLen, str, obj["siteName"], 'remove');
  var addSelectArea = document.createElement('select');
  addSelectArea.setAttribute('class', 'add-select-area w-8');
  addSelectArea.setAttribute('size', '8');
  addSelectArea.innerHTML += strAdd;
  var removeSelectArea = document.createElement('select');
  removeSelectArea.setAttribute('class', 'remove-select-area w-8');
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
  addEvent(obj["placeNum"]);
}

function addEvent(num) {
  console.log(num);
  var dataNurse = JSON.parse(localStorage.getItem("nurseList")) || [];
  $('.save-btn').click(function () {
    console.log(dataNurse);
    dataNurse[num]["name"] = $('.add-select-area>option').text();
    dataNurse[num]["員工"]["加入時間"] = CreateData.newDate();
    localStorage.setItem("nurseList", JSON.stringify(dataNurse));
    table();
  });
}
//# sourceMappingURL=nurse-list.js.map
