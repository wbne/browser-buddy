function loadImage(buddySrc) {
    if(buddySrc === undefined) {
        buddySrc = mozExt + "default_images/niolet.png"
    }
    document.getElementById("result").setAttribute("src", buddySrc)
}

function handleSizeChange() {
    browser.storage.local.set({size: document.getElementById("size").value})
}
  
document.getElementById("size").onchange = handleSizeChange
browser.storage.local.get().then(items => loadImage(items.buddy))
browser.storage.local.get().then((items) => document.body.setAttribute("class", items.theme))