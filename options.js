let customBuddyURL

function loadData() {
  customBuddyURL = browser.storage.sync.get().customBuddy1
  
}

function updateData(e) {
  e.preventDefault()
  let filereader = new FileReader()
  let customBuddy = document.getElementById("arg1")
  
  let arg2 = document.getElementById("arg2")
  document.getElementsByTagName("body")[0].style.color = "red"

  filereader.onload = function(e){
    var length = e.target.result.length

    browser.storage.sync.set({
      customBuddy1: e.target.result.substring(0, length / 4),
      customBuddy2: e.target.result.substring(length / 4, length / 2),
      customBuddy3: e.target.result.substring(length / 2, length / 4 * 3),
      customBuddy4: e.target.result.substring(length / 4 * 3)
    });
    document.body.background = e.target.result
    console.log(e.target.result)
    console.log(document.body)
  }
  
  if(customBuddy.files.length > 0) {
    filereader.readAsDataURL(customBuddy.files[0])
  }
  else {
    browser.storage.sync.set({
      customBuddy1: customBuddyURL
    });
    document.getElementsByTagName("body")[0].style.background = "pink"
  }
  
}

document.addEventListener("DOMContentLoaded", loadData)
document.querySelector("body").addEventListener("submit", updateData);
