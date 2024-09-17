const tg = window.Telegram.WebApp;

tg.expand();

tg.MainButton.textColor = "#FFFFFF";
tg.MainButton.color = "#FF00FF";

const btn = document.getElementById("btn");
const input = document.getElementById("fname")
const inputV = input.value;
const inputTC = input.textContent;
console.log('\n\ninput::', input)

btn.addEventListener("click", function () {
    tg.MainButton.setText(`Сообщение отправлено! Input: ${input}, InputV: ${inputV}, InputTC: ${inputTC}.`);
    alert(`input::: ${input}`)
    alert(`inputV::: ${inputV}`)
    tg.MainButton.show();
    document.getElementById("inputP").textContent = inputV;
    console.log('\n\ninput::', input)
    console.log('\n\ninputV::', inputV)
    console.log('\n\ninputTC::', inputTC)
    // tg.sendData("sendTestMessage");
});