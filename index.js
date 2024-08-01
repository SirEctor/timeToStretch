console.log("INDEX JS ACTIVATED!")

function sendNotification() {
    browser.notifications.create({
      "type": "basic",
      "iconUrl": browser.extension.getURL("icons/icon2.png"),
      "title": "TimeToStretch - Hourly Check!",
      "message": "This is your hourly check in to:\nstretch 🤸\nhydrate 💧\nexercise 🏋️"
    });
}

sendNotification();
//now we need to send notifications at a regular interval

function hourlyNotification(){
    setInterval(sendNotification, 60 * 60 * 1000)
}

browser.runtime.onInstalled.addListener(() => {
    hourlyNotification();
});
