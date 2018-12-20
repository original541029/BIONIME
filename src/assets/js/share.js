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
      for (let j = 0; j < (objKeyLen + 1); j++) {
        if (j == 2) {
          let strSiteName = JSON.stringify(data[i]["name"]).replace(/\"/g, "'");
          strTbody += `<td class="d-flex"><div onclick="nurseView(${strSiteName})" class="model-btn mr-2 cursor-potion" data-toggle="modal" data-target="#myModal"><i class="fas fa-users"></div></i><div class="cursor-potion text-danger delete" data-num="${i}">X</div></td>`
        } else {
          strTbody += `<td>${data[i][objKeyData[j]]}</td>`
        }
      }
      strTbody += '</tr>'
    }
    console.log(strTbody)
    return strTbody;
 
  }
}