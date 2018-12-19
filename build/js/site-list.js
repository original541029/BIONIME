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
  var objKeyData = Object.keys(data[0]);
  var aryHeadLen = aryHead.length;
  var dataLen = data.length;
  var objKeyDataLen = objKeyData.length;
  var strThead = '<tr>';

  for (var j = 0; j < aryHeadLen; j++) {
    strThead += "<th>".concat(aryHead[j], "</th>");
  }

  strThead += '</tr>';
  console.log(strThead);
  var strTbody = '';

  for (var i = 0; i < dataLen; i++) {
    strTbody += "<tr>";

    for (var _j = 0; _j < objKeyDataLen + 1; _j++) {
      if (_j == 2) {
        strTbody += "<td class=\"d-flex delete\"><div class=\"model-btn mr-2 cursor-potion\"><i class=\"fas fa-users\"></div></i><div class=\" cursor-potion text-danger\" data-num=\"".concat(i, "\">X</div></td>");
      } else {
        strTbody += "<td>".concat(data[i][objKeyData[_j]], "</td>");
      }
    }

    strTbody += '</tr>';
  }

  console.log(strTbody);
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
//# sourceMappingURL=site-list.js.map
