"use strict";

window.onload = function () {
  addEvent();
  table();
};

function addEvent() {
  // $('.site-add-btn').click(() => {
  //   verification.blank('input', [`數入站點名稱`])
  //   let tempObj = {
  //     name: $('.input').val(),
  //     date: CreateData.newDate()
  //   }
  //   data.push(tempObj)
  //   CreateData.localStorage('siteList', data, '.input');
  // })
  $('.input-add').keyup(function () {
    if (event.keyCode === 13) {
      verification.blank('.input-add', ["\u8F38\u5165\u7AD9\u9EDE\u540D\u7A31"]);
      var tempObj = {
        name: $('.input-add').val(),
        date: CreateData.newDate()
      };
      data.push(tempObj);
      CreateData.localStorage('siteList', data, '.input');
      table();
      var pNotify = document.querySelectorAll('.ui-pnotify');

      if (pNotify[0]) {
        return;
      }

      new PNotify({
        title: "\u65B0\u589E\u6210\u529F"
      });
    }
  });
} // ----------------------------------------------


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
          $('#myModal').modal('show');
          var obj = Object.keys(nurseData[i][objKeyData[j]]);
          var objLen = obj.length;

          for (var k = 0; k < objLen; k++) {
            if (k != 1) {
              strTbody += "<td>".concat(nurseData[i][objKeyData[j]][obj[k]], "</td>");
            }
          }

          strTbody += '</tr>';
        } else {
          var pNotify = document.querySelectorAll('.ui-pnotify');

          if (pNotify[0]) {
            return;
          }

          new PNotify({
            title: "\u7121\u54E1\u5DE5\u8CC7\u6599"
          });
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
//# sourceMappingURL=site-add.js.map
