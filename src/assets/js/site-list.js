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
  let objKeyData = Object.keys(data[0])

  let aryHeadLen = aryHead.length;
  let dataLen = data.length;
  let objKeyDataLen = objKeyData.length;
  let strThead = '<tr>';


  for (let j = 0; j < aryHeadLen; j++) {
    strThead += `<th>${aryHead[j]}</th>`
  }
  strThead += '</tr>'
  console.log(strThead)

  let strTbody = '';
  for (let i = 0; i < dataLen; i++) {
    strTbody += `<tr>`;
    for (let j = 0; j < (objKeyDataLen + 1); j++) {
      if (j == 2) {
        strTbody += `<td class="d-flex delete"><div class="model-btn mr-2 cursor-potion"><i class="fas fa-users"></div></i><div class=" cursor-potion text-danger" data-num="${i}">X</div></td>`
      } else {
        strTbody += `<td>${data[i][objKeyData[j]]}</td>`
      }
    }
    strTbody += '</tr>'
  }
  console.log(strTbody)

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