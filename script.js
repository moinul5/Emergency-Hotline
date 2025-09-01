let heart = document.getElementById("heart");
const heartCollect = document.querySelectorAll(".heartCollect");
const copies = document.querySelectorAll(".Copy");
let copyUpdate = document.getElementById("updateCopy");
let calls = document.getElementsByClassName("call");
let serviceHistory = document.getElementById("serviceHistory");

let callHistory = [];

let heartValue = 0;
let copyValue = 0;

for (const btn of heartCollect) {
  btn.addEventListener("click", () => {
    heartValue++;
    heart.innerText = `${heartValue}`;
  });
}

for (const copy of copies) {
  copy.addEventListener("click", () => {
    const card = copy.closest(".card");
    if (!card) return;
    copyValue++;
    copyUpdate.innerText = `${copyValue}`;
    const numberElement = card.querySelector(".copyNumber");
    if (!numberElement) return;

    const number = numberElement.innerText;

    navigator.clipboard
      .writeText(number)
      .then(() => {
        alert(`Copied: ${number}`);
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });
  });
}

// call feature
for (const call of calls) {
  call.addEventListener("click", () => {
    const card = call.closest(".card");
    const serviceName = card.querySelector(".service").innerText;
    const numberElement = card.querySelector(".copyNumber").innerText;
    alert(`calling ${serviceName} ${numberElement}...`);
    callHistory.unshift({
      serviceName,
      numberElement,
    });
    console.log(callHistory);
   

    const service = `
    <li class="flex justify-between items-center px-2 py-2 rounded bg-[#fafafa]">
      <div class="flex flex-col">
        <span class="font-bold">${callHistory[0].serviceName}</span>
        <span class="text-gray-600">${callHistory[0].numberElement}</span>
      </div>
      <span>${new Date().toLocaleTimeString()}</span>
    </li>`;
    serviceHistory.innerHTML += service;
  
  });
  
}
