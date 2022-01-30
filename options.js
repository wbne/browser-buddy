function handlePhotoUpload(event) {
  var reader = new FileReader();
  reader.onload = function (e) { 
    browser.storage.local.set({buddy: e.target.result})
    browser.storage.local.get().then((items) => document.getElementById("result").setAttribute("src", items.buddy))
  }

  reader.readAsDataURL(event.target.files[0]);
}

document.getElementById("upload_photo").addEventListener("change", handlePhotoUpload)