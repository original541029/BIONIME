"use strict";

window.onload = function () {
  addEvent();
};

function addEvent() {
  var data = JSON.parse(localStorage.getItem("siteList")) || []; // $('.site-add-btn').click(() => {
  //   verification.blank('input', [`數入站點名稱`])
  //   let tempObj = {
  //     name: $('.input').val(),
  //     date: CreateData.newDate()
  //   }
  //   data.push(tempObj)
  //   CreateData.localStorage('siteList', data, '.input');
  // })

  $('.input').keyup(function () {
    if (event.keyCode === 13) {
      verification.blank('input', ["\u8F38\u5165\u7AD9\u9EDE\u540D\u7A31"]);
      var tempObj = {
        name: $('.input').val(),
        date: CreateData.newDate()
      };
      data.push(tempObj);
      CreateData.localStorage('siteList', data, '.input');
      var pNotify = document.querySelectorAll('.ui-pnotify');

      if (pNotify[0]) {
        return;
      }

      new PNotify({
        title: "\u65B0\u589E\u6210\u529F"
      });
    }
  });
}
//# sourceMappingURL=site-add.js.map
