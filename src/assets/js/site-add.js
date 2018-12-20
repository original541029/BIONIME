window.onload = function () {
  addEvent();
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