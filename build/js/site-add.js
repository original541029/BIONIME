"use strict";

window.onload = function () {
  addEvent();
};

function addEvent() {
  var data = JSON.parse(localStorage.getItem("siteList")) || [];
  $('.site-add-btn').click(function () {
    verification.blank('.input', "\u7AD9\u9EDE\u540D\u7A31");
    var tempObj = {
      name: $('.input').val(),
      date: CreateData.newDate()
    };
    data.push(tempObj);
    CreateData.localStorage('siteList', data, '.input');
  });
  $('.input').keyup(function () {
    if (event.keyCode === 13) {
      verification.blank('.input', "\u7AD9\u9EDE\u540D\u7A31");
      var tempObj = {
        name: $('.input').val(),
        date: CreateData.newDate()
      };
      data.push(tempObj);
      CreateData.localStorage('siteList', data, '.input');
    }
  });
}
//# sourceMappingURL=site-add.js.map
