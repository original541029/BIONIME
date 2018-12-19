"use strict";

window.onload = function () {
  table();
};

function table() {
  var data = JSON.parse(localStorage.getItem("siteList")) || [];
  var aryHead = ['站點', '修改時間', '動作'];
  var dataLen = data.length;
  var objKeyData = Object.keys(data[0]);
  var objKeyDataLen = objKeyData.length;

  for (var i = 0; i < dataLen; i++) {
    for (var j = 0; j < objKeyDataLen; j++) {
      console.log(data[i][objKeyData[j]]);
    }
  }
}
//# sourceMappingURL=site-list.js.map
