"use strict";

window.onload = function () {
  addEvent();
  table();
};

function addEvent() {
  $('.site-add-btn').click(function () {
    if ($('.input-add').val() == "") {
      var _pNotify = document.querySelectorAll('.ui-pnotify');

      if (_pNotify[0]) {
        return;
      }

      new PNotify({
        title: "\u8F38\u5165\u7AD9\u9EDE\u540D\u7A31"
      });
      return;
    }

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
    $('.input-add').val('');
  });
  $('.input-add').keyup(function () {
    if (event.keyCode === 13) {
      if ($('.input-add').val() == "") {
        var _pNotify2 = document.querySelectorAll('.ui-pnotify');

        if (_pNotify2[0]) {
          return;
        }

        new PNotify({
          title: "\u8F38\u5165\u7AD9\u9EDE\u540D\u7A31"
        });
        return;
      }

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
      $('.input-add').val('');
    }
  });
} // ----------------------------------------------


var data = JSON.parse(localStorage.getItem("siteList")) || [];
var nurseData = JSON.parse(localStorage.getItem("nurseList")) || [];

function table() {
  $('.table').remove();

  if (data == []) {
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
  thead.setAttribute('class', 'bg-light-orange');
  var tbody = document.createElement('tbody');
  var table = document.createElement('table');
  table.setAttribute('class', 'table table-condensed w-38 border-orange');
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

  if (nurseData == []) {
    return;
  }

  var ary = ['站點名稱', '員工編號', '加入時間'];
  var strThead = combinationElm.elmLoop(ary, 'tr', 'th');
  var objKeyData = Object.keys(nurseData[0]);
  var dataLen = nurseData.length;
  var objKeyLen = objKeyData.length;
  var strTbody = "<tr>";
  strTbody += "<td>".concat(name, "</td>");

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
              console.log(nurseData);
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
  tbody.setAttribute('class', 'model-tbody');
  var table = document.createElement('table');
  table.setAttribute('class', 'table model-table');
  thead.innerHTML = strThead;
  thead.setAttribute('class', 'model-thead');
  tbody.innerHTML = strTbody;
  table.appendChild(thead);
  table.appendChild(tbody);
  var modalBody = document.querySelector('.modal-body');
  modalBody.appendChild(table);
}
//# sourceMappingURL=site-add.js.map
