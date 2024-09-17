const tg = window.Telegram.WebApp;

tg.expand();

tg.MainButton.textColor = "#FFFFFF";
tg.MainButton.color = "#FF00FF";

const btn = document.getElementById("btn");
const input = document.getElementById("fname");

btn.addEventListener("click", function(){
    // tg.MainButton.setText("Сообщение отправлено!");
    // tg.MainButton.show();
    // tg.sendData("sendTestMessage");
    
});