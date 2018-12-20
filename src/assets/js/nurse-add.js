window.onload = function () {
  setSelectOption();
  addEvent();
}
class ForLoops {
  static selectArea(data, objKeyData, dataLen, objKeyDataLen, str) {
    for (let i = 0; i < dataLen; i++) {
      for (let j = 0; j < objKeyDataLen; j++) {
        if (objKeyData[j] == "name") {
          str += `<option data-num=${i}>${data[i][objKeyData[j]]}</option>`;
        }
      }
    }
    return str;
  }

}

class ActEvent {
  static clickBtn(btn, addArea, elm, elmSub) {
    $(btn).click(() => {
      let str = '';
      if ($(elm).val() == null) {
        return
      }
      let selectOptionAll = document.querySelectorAll(elmSub);
      let selectOptionAllLen = selectOptionAll.length;
      for (let i = 0; i < selectOptionAllLen; i++) {
        if ($(elm).val() == selectOptionAll[i].text) {
          selectOptionAll[i].remove();
          let dataNum = selectOptionAll[i].dataset.num;
          str += `<option data-num="${dataNum}">${selectOptionAll[i].text}</option>`
          let removeSelectArea = document.querySelector(addArea);
          removeSelectArea.innerHTML += str;
        }

      }
    })

  }

}
let data = JSON.parse(localStorage.getItem("siteList")) || null;

function setSelectOption() {

  if (data === null) {
    return
  }
  let objKeyData = Object.keys(data[0])
  let dataLen = data.length;
  let objKeyDataLen = objKeyData.length;
  let str = ``;
  str += ForLoops.selectArea(data, objKeyData, dataLen, objKeyDataLen, str)

  let addSelectArea = document.createElement('select');
  addSelectArea.setAttribute('class', 'add-select-area')
  addSelectArea.setAttribute('size', '8')
  let removeSelectArea = document.createElement('select');
  removeSelectArea.setAttribute('class', 'remove-select-area')
  removeSelectArea.setAttribute('size', '8')
  addSelectArea.innerHTML += str;
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
  ActEvent.clickBtn('.add-btn', '.remove-select-area', '.add-select-area', '.add-select-area > option')
  ActEvent.clickBtn('.remove-btn', '.add-select-area', '.remove-select-area', '.remove-select-area > option')
}
let dataNurseList = JSON.parse(localStorage.getItem("nurseList")) || [];

function addEvent() {
  $('.nurse-add-btn').click(() => {
    verification.blank('.number', '員工編號');
    verification.blank('.nurse-name', '護士姓名');
    let addOpt = document.querySelectorAll('.remove-select-area>option')
    const len = addOpt.length;
    console.log(data)
    for (let i = 0; i < len; i++) {
      let tempObj = {
        員工: {
          員工編號: $('.number').val(),
          護士姓名: $('.nurse-name').val(),
          加入時間: CreateData.newDate()
        }
      }
      
      var updatedDate = Object.assign(data[addOpt[i].dataset.num], tempObj);
      // dataNurseList.push(updatedDate)
      // localStorage.setItem("nurseList", JSON.stringify(dataNurseList));

      console.log(updatedDate)
    }
  })
}