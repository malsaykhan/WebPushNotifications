importScripts('https://www.gstatic.com/firebasejs/7.14.6/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.14.6/firebase-messaging.js');

var firebaseConfig = {
  apiKey: "AIzaSyARjpDuSsdZuGD0d8grejrGMWgnWkRg2MA",
  authDomain: "web-pushnotifications-23710.firebaseapp.com",
  projectId: "web-pushnotifications-23710",
  storageBucket: "web-pushnotifications-23710.appspot.com",
  messagingSenderId: "491078645040",
  appId: "1:491078645040:web:a392281272d6f96d2d04f5"
};

firebase.initializeApp(firebaseConfig);
const messaging=firebase.messaging();

messaging.setBackgroundMessageHandler(function (payload) {
    console.log(payload);
    const notification=JSON.parse(payload);
    const notificationOption={
        body:notification.body,
        icon:notification.icon
    };
    return self.registration.showNotification(payload.notification.title,notificationOption);
});