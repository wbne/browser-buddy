let mozExt
//clear()
function customBuddyError(error) {
    console.log("an error occured when retrieving the custom buddy source, ", error)
}

function createBuddy(customBuddySrc) {
    console.log("creating")
    let width = window.screen.availWidth
    let height = window.screen.availHeight

    if(!mozExt) {
        let manifest = browser.runtime.getManifest()
        let icon = manifest.icons["32"]
        mozExt = icon.split("icons/")[0]
        console.log("mozilla extension url retrieved")
    }

    console.log(customBuddySrc)
    if(customBuddySrc === undefined) {
        customBuddySrc = mozExt + "default_images/niolet.png"
    }
    customBuddySrc = "url('" + customBuddySrc + "')"
    console.log(customBuddySrc)
    let body = document.getElementsByTagName("body")[0]
    let buddy = document.createElement("div")
    buddy.style.backgroundImage = customBuddySrc
    buddy.style.backgroundSize = "contain"
    buddy.style.backgroundRepeat = "no-repeat"
    buddy.style.position = "fixed"
    buddy.style.right = "10px"
    buddy.style.bottom = "10px"
    buddy.style.pointerEvents = "none";

    if(width > height) {
        buddy.style.height = "10vh"
        buddy.style.width = "10vh"
    }
    else {
        buddy.style.height = "10vw"
        buddy.style.width = "10vw"
    }

    body.append(buddy)

    console.log("buddy created and appended")
}

function clear() {
    browser.storage.local.clear()
}

browser.storage.local.get().then(items => createBuddy(items.buddy))