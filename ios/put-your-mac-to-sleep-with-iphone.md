# Put your Mac to sleep with your iPhone

Mac: Go to **System Preferences / Sharing** and make sure **Remote Login** is checked. And keep open this window because we need the IP in the next step.

<a href="https://raw.githubusercontent.com/ozgrozer/useful-scripts/master/ios/macos-systempreferences-sharing.jpg" target="_blank"><img src="macos-systempreferences-sharing.jpg" alt="" width="300" /></a>

iPhone: Open [Shortcuts](https://apps.apple.com/us/app/shortcuts/id915249334) app, then go to **New Shortcut / Add Action / Run script over SSH / Show More**.
Type your Mac IP into **Host**, your Mac username into **User**, your Mac password into **Password** and into the **Script** type `pmset sleepnow`.
Tap **Next** and give your new shortcut a name like **Put my Mac to sleep** and now you can add it to your home screen or you can just use Siri like `Hey Siri, run Put my Mac to sleep`.

<a href="https://raw.githubusercontent.com/ozgrozer/useful-scripts/master/ios/ios-shortcuts-runscriptoverssh.png" target="_blank"><img src="ios-shortcuts-runscriptoverssh.png" alt="" width="300" /></a>
