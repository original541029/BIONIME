"use strict";

window.onload = function () {
  table();
};

var data = JSON.parse(localStorage.getItem("siteList")) || null;

function table() {
  $('.table').remove();
  console.log(data);

  if (data == null) {
    return;
  }

  var aryHead = ['站點', '修改時間', '動作'];
  var strThead = combinationElm.elmLoop(aryHead, 'tr', 'th');
  var objKeyData = Object.keys(data[0]);
  var dataLen = data.length;
  var objKeyLen = objKeyData.length;
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
  $('.site-name').remove();
  var elmSiteName = document.createElement('p');
  elmSiteName.setAttribute('class', 'site-name');
  elmSiteName.innerText = name;
  var siteNameArea = document.querySelector('.site-name-area');
  siteNameArea.appendChild(elmSiteName);
}
//# sourceMappingURL=site-list.js.map
