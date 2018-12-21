window.onload = function () {
  table();
}

let data = JSON.parse(localStorage.getItem("siteList")) || null;
let nurseData = JSON.parse(localStorage.getItem("nurseList")) || null;

function table() {
  $('.table').remove();
  if (data == null) {
    return
  }
  let aryHead = ['站點', '修改時間', '動作'];
  let strThead = combinationElm.elmLoop(aryHead, 'tr', 'th');

  let objKeyData = Object.keys(data[0])
  let dataLen = data.length;
  let objKeyLen = objKeyData.length + 1;

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
  $('.model-table').remove();
  $('#myModal').modal('show')
  $('.site-name').remove();
  let elmSiteName = document.createElement('input');
  elmSiteName.setAttribute('class', 'site-name');
  elmSiteName.setAttribute('type', 'text');
  elmSiteName.setAttribute('disabled', 'disabled');
  elmSiteName.value = name;
  let siteNameArea = document.querySelector('.site-name-area');
  siteNameArea.appendChild(elmSiteName);
  if (nurseData == null) {
    return
  }
  let ary = ['員工編號', '加入時間']
  let strThead = combinationElm.elmLoop(ary, 'tr', 'th');
  let objKeyData = Object.keys(nurseData[0])
  const dataLen = nurseData.length;
  const objKeyLen = objKeyData.length;

  let strTbody = `<tr>`;
  for (let i = 0; i < dataLen; i++) {

    for (let j = 0; j < objKeyLen; j++) {

      if (j == 2) {
      
        let siteName = nurseData[i][objKeyData[0]];
        if (siteName == name) {
          console.log(siteName)
          console.log(i)
          let obj = Object.keys(nurseData[i][objKeyData[j]]);
          const objLen = obj.length;
          for (let k = 0; k < objLen; k++) {
            if (k != 1) {
              strTbody += `<td class="text-white">${nurseData[i][objKeyData[j]][obj[k]]}</td>`
            }
          }
          strTbody += '</tr>'
        }
  
      }


    }

  }


  let thead = document.createElement('thead');
  let tbody = document.createElement('tbody');
  let table = document.createElement('table');
  table.setAttribute('class', 'table model-table')
  thead.innerHTML = strThead;
  tbody.innerHTML = strTbody;
  table.appendChild(thead);
  table.appendChild(tbody);
  let modalBody = document.querySelector('.modal-body');
  modalBody.appendChild(table)
}