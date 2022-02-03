function loadLogo(buddySrc) {
  if(buddySrc === undefined) {
    buddySrc = mozExt + "default_images/niolet.png"
  }
  document.getElementById("result").setAttribute("src", buddySrc)
}

function handlePhotoUpload(event) {
  var reader = new FileReader();
  reader.onload = function (e) { 
    browser.storage.local.set({buddy: e.target.result})
    browser.storage.local.get().then((items) => document.getElementById("result").setAttribute("src", items.buddy))
  }

  reader.readAsDataURL(event.target.files[0]);
}

function handleSizeChange() {
  browser.storage.local.set({size: document.getElementById("size").value})
}

function lightMode() {
  document.body.setAttribute("class", "light")
  browser.storage.local.set({theme: "light"})
}

function darkMode() {
  document.body.setAttribute("class", "dark")
  browser.storage.local.set({theme: "dark"})
}

function onThemeLoad(theme) {
  document.body.setAttribute("class", theme)
  if(theme === "dark") {
    document.getElementById("dark").checked = true
  }
  else {
    document.getElementById("light").checked = true
  }
}

document.getElementById("upload_photo").addEventListener("change", handlePhotoUpload)
document.getElementById("size").onchange = handleSizeChange
document.getElementById("light").onchange = lightMode
document.getElementById("dark").onchange = darkMode

browser.storage.local.get().then((items) => loadLogo(items.buddy))
browser.storage.local.get().then((items) => onThemeLoad(items.theme))