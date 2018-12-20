window.onload = function () {
  table();
}

let data = JSON.parse(localStorage.getItem("siteList")) || null;

function table() {
  $('.table').remove();
  console.log(data)
  if (data == null) {
    return
  }
  let aryHead = ['站點', '修改時間', '動作'];
  let strThead = combinationElm.elmLoop(aryHead, 'tr', 'th');

  let objKeyData = Object.keys(data[0])
  let dataLen = data.length;
  let objKeyLen = objKeyData.length;

  let strTbody = '';
  strTbody += combinationElm.nestedLoops(data, objKeyData, dataLen, objKeyLen, strTbody)

  let thead = document.createElement('thead');
  let tbody = document.createElement('tbody');
  let table = document.createElement('table');
  table.setAttribute('class', 'table')
  let tableArea = document.querySelector('.table-area');
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
  $('.delete').click((e) => {
    var num = e.target.dataset.num;
    data.splice(num, 1);
    localStorage.setItem("siteList", JSON.stringify(data));
    table();
  })
}

function nurseView(name) {
  $('.site-name').remove();
  let elmSiteName = document.createElement('p');
  elmSiteName.setAttribute('class', 'site-name');
  elmSiteName.innerText = name;
  let siteNameArea = document.querySelector('.site-name-area');
  siteNameArea.appendChild(elmSiteName);
}