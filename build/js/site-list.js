"use strict";

window.onload = function () {
  table();
};

var data = JSON.parse(localStorage.getItem("siteList")) || null;
var nurseData = JSON.parse(localStorage.getItem("nurseList")) || null;

function table() {
  $('.table').remove();

  if (data == null) {
    return;
  }

  var aryHead = ['站點', '修改時間', '動作'];
  var strThead = combinationElm.elmLoop(aryHead, 'tr', 'th');
  var objKeyData = Object.keys(data[0]);
  var dataLen = data.length;
  var objKeyLen = objKeyData.length + 1;
  var strTbody = '';
  strTbody += combinationElm.nestedLoops(data, objKeyData, dataLen, objKeyLen, strTbody);
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
  $('.delete').click(function (e) {
    var num = e.target.dataset.num;
    data.splice(num, 1);
    localStorage.setItem("siteList", JSON.stringify(data));
    table();
  });
}

function nurseView(name) {
  $('.model-table').remove();
  $('#myModal').modal('show');
  $('.site-name').remove();
  var elmSiteName = document.createElement('input');
  elmSiteName.setAttribute('class', 'site-name');
  elmSiteName.setAttribute('type', 'text');
  elmSiteName.setAttribute('disabled', 'disabled');
  elmSiteName.value = name;
  var siteNameArea = document.querySelector('.site-name-area');
  siteNameArea.appendChild(elmSiteName);

  if (nurseData == null) {
    return;
  }

  var ary = ['員工編號', '加入時間'];
  var strThead = combinationElm.elmLoop(ary, 'tr', 'th');
  var objKeyData = Object.keys(nurseData[0]);
  var dataLen = nurseData.length;
  var objKeyLen = objKeyData.length;
  var strTbody = "<tr>";

  for (var i = 0; i < dataLen; i++) {
    for (var j = 0; j < objKeyLen; j++) {
      if (j == 2) {
        var siteName = nurseData[i][objKeyData[0]];

        if (siteName == name) {
          console.log(siteName);
          console.log(i);
          var obj = Object.keys(nurseData[i][objKeyData[j]]);
          var objLen = obj.length;

          for (var k = 0; k < objLen; k++) {
            if (k != 1) {
              strTbody += "<td class=\"text-white\">".concat(nurseData[i][objKeyData[j]][obj[k]], "</td>");
            }
          }

          strTbody += '</tr>';
        }
      }
    }
  }

  var thead = document.createElement('thead');
  var tbody = document.createElement('tbody');
  var table = document.createElement('table');
  table.setAttribute('class', 'table model-table');
  thead.innerHTML = strThead;
  tbody.innerHTML = strTbody;
  table.appendChild(thead);
  table.appendChild(tbody);
  var modalBody = document.querySelector('.modal-body');
  modalBody.appendChild(table);
}
//# sourceMappingURL=site-list.js.map
