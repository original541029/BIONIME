window.onload = function () {
  table();

}




function table() {
  let nurseData = JSON.parse(localStorage.getItem("nurseList")) || null;
  $('.table').remove();
  if (nurseData == null) {
    return
  }
  let ary = ['員工編號', '修改時間', '動作']
  let strThead = combinationElm.elmLoop(ary, 'tr', 'th');
  let objKeyData = Object.keys(nurseData[0])
  console.log(objKeyData)
  const dataLen = nurseData.length;
  const objKeyLen = objKeyData.length;
  console.log(nurseData)
  let strTbody = `<tr>`;
  for (let i = 0; i < dataLen; i++) {
    for (let j = 0; j < objKeyLen; j++) {
      if (j == 2) {

        let obj = Object.keys(nurseData[i][objKeyData[j]]);
        console.log(obj)
        const objLen = obj.length + 1;

        for (let k = 0; k < objLen; k++) {
          if (k != 1) {
            if (k == 3) {
              let tempObj = {
                "員工編號": nurseData[i][objKeyData[j]]["員工編號"],
                "護士姓名": nurseData[i][objKeyData[j]]["護士姓名"],
                "siteName": nurseData[i]["name"],
                "placeNum": i
              }
              let obj = JSON.stringify(tempObj).replace(/\"/g, "'");
              strTbody += `<td class="d-flex"><div onclick="nurseView(${obj})" class="model-btn mr-2 cursor-potion"><i class="fas fa-users"></div></i><div class="cursor-potion text-danger delete" data-num="${i}">X</div></td>`

            } else {

              strTbody += `<td>${nurseData[i][objKeyData[j]][obj[k]]}</td>`
            }

          }

        }
        strTbody += '</tr>'
      }



    }
  }


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
  let nurseData = JSON.parse(localStorage.getItem("nurseList")) || null;
  $('.delete').click((e) => {
    var num = e.target.dataset.num;
    nurseData.splice(num, 1);
    localStorage.setItem("nurseList", JSON.stringify(nurseData));
    table();
  })
}

function nurseView(obj) {
  $('.remove-select-area').remove();
  $('.add-select-area').remove();
  $('.add-btn').remove();
  $('.remove-btn').remove();
  console.log(obj["siteName"])
  $('#myModal').modal('show')
  $('.number').val(obj["員工編號"])
  $('.nurse-name').val(obj["護士姓名"])
  let data = JSON.parse(localStorage.getItem("siteList")) || null;
  if (data == null) {
    return
  }
  let objKeyData = Object.keys(data[0])
  let dataLen = data.length;
  let objKeyDataLen = objKeyData.length;
  let strAdd = ``;
  strAdd += ForLoops.selectArea(data, objKeyData, dataLen, objKeyDataLen, str, obj["siteName"], 'add')
  let str = ``;
  str += ForLoops.selectArea(data, objKeyData, dataLen, objKeyDataLen, str, obj["siteName"], 'remove')
  let addSelectArea = document.createElement('select');
  addSelectArea.setAttribute('class', 'add-select-area')
  addSelectArea.setAttribute('size', '8')
  addSelectArea.innerHTML += strAdd;
  let removeSelectArea = document.createElement('select');
  removeSelectArea.setAttribute('class', 'remove-select-area')
  removeSelectArea.setAttribute('size', '8')
  removeSelectArea.innerHTML += str;
  let selectGroup = document.querySelector('.select-group');
  let addBtn = document.createElement('button');
  addBtn.setAttribute('type', 'button');
  addBtn.setAttribute('class', "btn btn-primary add-btn");
  addBtn.innerText = '加入';
  let removeBtn = document.createElement('button');
  removeBtn.setAttribute('type', 'button');
  removeBtn.innerText = '移除';
  removeBtn.setAttribute('class', "btn btn-primary remove-btn");
  selectGroup.appendChild(addSelectArea);
  selectGroup.appendChild(addBtn);
  selectGroup.appendChild(removeBtn);
  selectGroup.appendChild(removeSelectArea);
  ActEvent.clickBtn('.add-btn', '.add-select-area', '.remove-select-area', '.remove-select-area > option')
  ActEvent.clickBtn('.remove-btn', '.remove-select-area', '.add-select-area', '.add-select-area > option')

  addEvent(obj["placeNum"]);
}

function addEvent(num) {
  console.log(num)
  let dataNurse = JSON.parse(localStorage.getItem("nurseList")) || [];
  $('.save-btn').click(() => {
    console.log(dataNurse)
    dataNurse[num]["name"] = $('.add-select-area>option').text()
    dataNurse[num]["員工"]["加入時間"] = CreateData.newDate();
    localStorage.setItem("nurseList", JSON.stringify(dataNurse));
    table();
  })
}