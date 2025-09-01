let heart = document.getElementById("heart");

const heartCollect = document.querySelectorAll(".heartCollect");

const copies = document.querySelectorAll(".Copy");

let copyUpdate = document.getElementById("updateCopy");

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
