window.onload = function () {
  table();
}

function table() {
  let data = JSON.parse(localStorage.getItem("siteList")) || [];
  let aryHead = ['站點', '修改時間', '動作'];
  let dataLen = data.length;
  let objKeyData = Object.keys(data[0])
  let objKeyDataLen = objKeyData.length;
  for (let i = 0; i < dataLen; i++) {
    for (let j = 0; j < objKeyDataLen; j++) {
      console.log(data[i][objKeyData[j]])
    }

  }
}