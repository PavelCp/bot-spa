const tg = window.Telegram.WebApp;

tg.expand();

tg.MainButton.textColor = "#FFFFFF";
tg.MainButton.color = "#FF00FF";

const btn = document.getElementById("btn");
const input = document.getElementById("fname").value;

btn.addEventListener("click", function () {
    tg.MainButton.setText(`Сообщение отправлено! ${input}`);
    tg.MainButton.show();
    document.getElementById("inputP").textContent = input
    // tg.sendData("sendTestMessage");
});