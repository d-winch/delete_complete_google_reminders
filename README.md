# delete_complete_google_reminders
Chrome extension to delete completed Google Reminders from https://reminders.google.com/ which cause lag on the mobile/web views when there are >100s

## About
Google Reminders is a mess. If, like me, you regularly use Google Assistant on your phone to set reminders, you've possibly encountered the terrible, laggy web interface on your phone.

Past/completed reminders remain long after they were used. Personally, I had over 500 at the time of complete frustration. There is no option to delete all past reminders and deleting manually means tapping each one and tapping the bin icon. This causes the app to hang for several seconds, report it is not responding, before recovering and you move onto the next.

This is also present in the web browser on a desktop computer.

Google searches found that this is a frustration for many people. Some claim that asking your assistant to delete your completed reminders will remove ~40 at a time. I tried this and it no longer worked (at least, for me).

So, I wrote an extension to remove them all.

## Installation (Unpacked)

Visit [chrome://extensions/](chrome://extensions/) and enable the developer mode toggle.
Then click 'Load Unpacked' and navigate to the directory to enable the extension.

## Installation (Packed)

I have no idea! It used to be the case that you could drag and drop the .crx file into Chrome. But now, it will disable the extension as it wasn't downloaded via the Chrome Web Store.
[Details](https://support.google.com/chrome_webstore/answer/2811969?visit_id=638041085469034327-736826081&p=ui_remove_non_cws_extensions&hl=en-GB&rd=2)

I've left the .crx file for those on other versions of Chromium browsers, etc.

## Usage
Visit https://reminders.google.com/ and simply click the bin icon from your extensions.

There is a ten second sleep in between deleting each batch of 10 reminders (Google seems upset if they're all done at once).


## Notes
Ogligatory: Your mileage may vary.

I don't know if the fetch call includes any user specific details (for example, there's an assistant ID).

If it doesn't work for you, delete a reminder and copy the request to replace it in [background.js](delete_google_reminders/background.js)

Note: This code and structure is awful. But it works. :)
