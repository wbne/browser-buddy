let mozExt
//clear()
function customBuddyError(error) {
    console.log("an error occured when retrieving the custom buddy source, ", error)
}

function createBuddy(customBuddySrc) {
    console.log(customBuddySrc)
    let width = window.screen.availWidth
    let height = window.screen.availHeight
    let buddySrc = ""

    if(!mozExt) {
        let manifest = browser.runtime.getManifest()
        let icon = manifest.icons["32"]
        mozExt = icon.split("icons/")[0]
        console.log("mozilla extension url retrieved")
    }

    if(customBuddySrc.customBuddy1) {
        buddySrc = "\"" + customBuddySrc.customBuddy1 + customBuddySrc.customBuddy2 + customBuddySrc.customBuddy3 + customBuddySrc.customBuddy4 + "\""
    }
    else {
        buddySrc = "url('" + mozExt + "default_images/niolet.png" + "')"
    }
    

    let body = document.getElementsByTagName("body")[0]
    let buddy = document.createElement("div");
    buddy.style.background = buddySrc
    buddy.style.backgroundSize = "contain"
    buddy.style.backgroundRepeat = "no-repeat"
    buddy.style.position = "fixed"
    buddy.style.right = "10px"
    buddy.style.bottom = "10px"

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
    browser.storage.sync.clear()
}

let customBuddySrc = browser.storage.sync.get()
customBuddySrc.then(createBuddy, customBuddyError)