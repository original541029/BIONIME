window.onload = function () {
  addEvent();
}

class CreateData {
  static newDate() {
    let date = new Date();
    let yyyy = date.getFullYear();
    let mm = (date.getMonth() + 1 < 10 ? "0" : "") + (date.getMonth() + 1);
    let dd = (date.getDate() < 10 ? "0" : "") + date.getDate();
    let today = `${yyyy}/${mm}/${dd}  ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
    return today;
  }
  static localStorage(type, data, strClean) {
    localStorage.setItem(type, JSON.stringify(data));
    $(strClean).val('')
  }

}
class verification {
  static blank(elm, str) {
    if (!$(elm).val()) {
      new PNotify({
        title: `請輸入${str}`
      });
      return
    }
  }
}

function addEvent() {
  let data = JSON.parse(localStorage.getItem("siteList")) || [];
  $('.site-add-btn').click(() => {
    verification.blank('.input', `站點名稱`)
    let tempObj = {
      name: $('.input').val(),
      date: CreateData.newDate()
    }
    data.push(tempObj)
    CreateData.localStorage('siteList', data, '.input');
  })
  $('.input').keyup(() => {
    if (event.keyCode === 13) {
      verification.blank('.input', `站點名稱`)
      let tempObj = {
        name: $('.input').val(),
        date: CreateData.newDate()
      }
      data.push(tempObj)
      CreateData.localStorage('siteList', data, '.input');
    }
  });
}