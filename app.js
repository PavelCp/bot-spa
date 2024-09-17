const tg = window.Telegram.WebApp;

tg.expand();

tg.MainButton.textColor = "#FFFFFF";
tg.MainButton.color = "#FF00FF";

const btn = document.getElementById("btn");
const input = document.getElementById("fname")
const inputQ = document.querySelector("input[class='fname']");
const inputV = input.value;
const inputTC = input.textContent;
const inputVQ = inputQ.value;
const inputTCQ = inputQ.textContent;
console.log('\n\ninput::', input)

btn.addEventListener("click", function () {
    tg.MainButton.setText(`Сообщение ! t: ${input}, V: ${inputV}, TC: ${inputTC}.`);

    tg.MainButton.show();
    document.getElementById("inputP").textContent = inputV;
    console.log('\n\ninput::', input)
    console.log('\n\ninputV::', inputV)
    console.log('\n\ninputTC::', inputTC)
    console.log('\n\ninputQ::', inputQ)
    console.log('\n\ninputVQ::', inputVQ)
    console.log('\n\ninputTCQ::', inputTCQ)
    // tg.sendData("sendTestMessage");
});