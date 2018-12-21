class CreateData {
  static addZero(i) {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
  }
  static newDate() {
    let date = new Date();
    let yyyy = date.getFullYear();
    let mm = (date.getMonth() + 1 < 10 ? "0" : "") + (date.getMonth() + 1);
    let dd = (date.getDate() < 10 ? "0" : "") + date.getDate();
    let today = `${yyyy}/${mm}/${dd}  ${CreateData.addZero(date.getHours())}:${CreateData.addZero(date.getMinutes())}:${CreateData.addZero(date.getSeconds())}`;
    return today;
  }
  static localStorage(type, data, strClean) {
    localStorage.setItem(type, JSON.stringify(data));
    $(strClean).val('')
  }

}
class verification {
  static blank(elm, str) {
    for (let i = 0; i < $(`${elm}`).length; i++) {
      let elmInput = document.querySelectorAll('input');
      if (!elmInput[i].value) {
        let pNotify = document.querySelectorAll('.ui-pnotify')
        if (pNotify[i]) {
          return
        } else {
          new PNotify({
            title: `請輸入${str[i]}`
          });
          return
        }
      }
    }


  }
}


class combinationElm {
  static elmLoop(ary, strOut, strInner) {
    let str = `<${strOut}>`;
    for (let val of ary) {
      str += `<${strInner}>${val}</${strInner}>`
    }
    str += `</${strOut}>`
    return str
  }
  static nestedLoops(data, objKeyData, dataLen, objKeyLen, strTbody) {
    for (let i = 0; i < dataLen; i++) {
      strTbody += `<tr>`;
      for (let j = 0; j < objKeyLen; j++) {
        if (j == 2) {
          let strSiteName = JSON.stringify(data[i]["name"]).replace(/\"/g, "'");
          strTbody += `<td class="d-flex"><div onclick="nurseView(${strSiteName})" class="model-btn mr-2 cursor-potion"><i class="fas fa-users"></div></i><div class="cursor-potion text-danger delete" data-num="${i}">X</div></td>`
        } else {
          strTbody += `<td>${data[i][objKeyData[j]]}</td>`
        }
      }
      strTbody += '</tr>'
    }
    return strTbody;

  }
}


class ForLoops {
  static selectArea(data, objKeyData, dataLen, objKeyDataLen, str, sitName, act) {
    for (let i = 0; i < dataLen; i++) {
      for (let j = 0; j < objKeyDataLen; j++) {
        if (objKeyData[j] == "name") {
          // console.log(sitName+'__'+data[i][objKeyData[j]])
          if (sitName != data[i][objKeyData[j]] && act == 'remove') {
            console.log(data[i][objKeyData[j]])
            str += `<option data-num=${i}>${data[i][objKeyData[j]]}</option>`;
          } else if (sitName == data[i][objKeyData[j]] && act == 'add') {
            str += `<option data-num=${i}>${data[i][objKeyData[j]]}</option>`;
          } else if (act == "removeAll") {
            str += `<option data-num=${i}>${data[i][objKeyData[j]]}</option>`;
          }

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
      if (addArea == '.add-select-area' && $('.add-select-area>option').length == 1) {
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