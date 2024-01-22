import { MobileBackend } from './class/MobileBackend'
import { AndroidUI } from './class/AndroidUI'
import { IphoneUI } from './class/IPhoneUI'
import { WebBackend } from './class/WebBackend'
import { WebUI } from './class/WebUI'

function main() {
    const mobileBackend = new MobileBackend()
    const androidUI = new AndroidUI(mobileBackend)
    androidUI.render()

    const iphoneUI = new IphoneUI(mobileBackend)
    iphoneUI.render()

    const webBackend = new WebBackend()
    const webUI = new WebUI(webBackend)
    webUI.render()
}

main()