window.onload = function () {
  setSelectOption();
  addEvent();
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
}
function addEvent() {
  let dataNurse = JSON.parse(localStorage.getItem("nurseList")) || [];

  $('.nurse-add-btn').click(() => {
    verification.blank('.number', '員工編號');
    verification.blank('.nurse-name', '護士姓名');
    let addOpt = document.querySelectorAll('.add-select-area>option')
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
      dataNurse.push(updatedDate)
      localStorage.setItem("nurseList", JSON.stringify(dataNurse));

      console.log(updatedDate)
    }
    $('.number').val('')
    $('.nurse-name').val('')
  })
}