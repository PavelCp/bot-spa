const tg = window.Telegram.WebApp;

tg.expand();

tg.MainButton.textColor = "#FFFFFF";
tg.MainButton.color = "#FF00FF";

const btn = document.getElementById("btn");
const input = document.getElementById("fname")
const inputV = input.value;
console.log('\n\ninput::', input)

btn.addEventListener("click", function () {
    tg.MainButton.setText(`Сообщение отправлено! ${input} ${inputV}`);
    alert(`input::: ${input}`)
    alert(`inputV::: ${inputV}`)
    tg.MainButton.show();
    document.getElementById("inputP").textContent = input
    console.log('\n\ninput::', input)
    // tg.sendData("sendTestMessage");
});