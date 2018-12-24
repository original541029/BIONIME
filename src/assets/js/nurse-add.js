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
  str += ForLoops.selectArea(data, objKeyData, dataLen, objKeyDataLen, str, '', 'removeAll')

  let addSelectArea = document.createElement('select');
  addSelectArea.setAttribute('class', 'add-select-area  w-8');
  addSelectArea.setAttribute('size', '8')
  let removeSelectArea = document.createElement('select');
  removeSelectArea.setAttribute('class', 'remove-select-area w-8 ')
  removeSelectArea.setAttribute('size', '8')
  removeSelectArea.innerHTML += str;
  
  let selectGroup = document.querySelector('.select-group');

  let addBtn = document.createElement('a');
  addBtn.setAttribute('class', 'd-flex align-items-center')
  addBtn.innerHTML=`<i class="fas fa-arrow-alt-circle-left text-secondary font-1_6 add-btn cursor-potion"></i>`


  let removeBtn = document.createElement('div');
  removeBtn.setAttribute('class', 'd-flex align-items-center mr-2')
  removeBtn.innerHTML=`<i class="fas fa-arrow-alt-circle-right text-secondary font-1_6 remove-btn cursor-potion"></i>`

  // let removeBtn = document.createElement('button');
  // removeBtn.setAttribute('type', 'button');
  // removeBtn.innerText = '移除';
  // removeBtn.setAttribute('class', "btn btn-outline-secondary remove-btn");
  selectGroup.appendChild(addSelectArea);
  selectGroup.appendChild(removeBtn);
  selectGroup.appendChild(addBtn);
  selectGroup.appendChild(removeSelectArea);
  ActEvent.clickBtn('.add-btn', '.add-select-area', '.remove-select-area', '.remove-select-area > option')
  ActEvent.clickBtn('.remove-btn', '.remove-select-area', '.add-select-area', '.add-select-area > option')
}

function addEvent() {
  let dataNurse = JSON.parse(localStorage.getItem("nurseList")) || [];

  $('.nurse-add-btn').click(() => {
    verification.blank('.require-option', ['輸入員工編號', '輸入護士姓名']);
    if ($('.add-select-area>option').length == 0) {
      let pNotify = document.querySelectorAll('.ui-pnotify')
      if (pNotify[0]) {
        return
      } else {
        new PNotify({
          title: `請加入站點`
        });
        return
      }

    }
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
      let pNotify = document.querySelectorAll('.ui-pnotify')
      if (pNotify[0]) {
        return
      }
      new PNotify({
        title: `新增成功`
      });
      console.log(updatedDate)
    }

  })
}