const dropList = document.querySelectorAll("select");
const fromCurrency = document.querySelector("select[name='from']");
const toCurrency = document.querySelector("select[name='to']");
const exchangeBtn = document.querySelector("form button");
const exchangeMsg = document.querySelector(".msg");
const icons = document.querySelector(".fa-arrow-right-arrow-left");

// Populate select options
for (let select of dropList) {
  for (let currencyCode in countryList) {
    let newOption = document.createElement("option");
    newOption.value = currencyCode;
    newOption.innerText = currencyCode;
    if (select.name === "from" && currencyCode === "USD") {
      newOption.selected = true;
    }
    if (select.name === "to" && currencyCode === "INR") {
      newOption.selected = true;
    }
    select.appendChild(newOption);
  }

  select.addEventListener("change", (e) => {
    updateFlag(e.target);
  });
}

function updateFlag(element) {
  let currencyCode = element.value;
  let countryCode = countryList[currencyCode];
  let img = element.parentElement.querySelector("img");
  img.src = `https://flagsapi.com/${countryCode}/flat/64.png`;
}

window.addEventListener("load", () => {
  getExchangeRate();
});

exchangeBtn.addEventListener("click", (e) => {
  e.preventDefault();
  getExchangeRate();
});

function getExchangeRate() {
  const amount = document.querySelector("input").value;
  if (amount === "" || isNaN(amount)) {
    alert("Please enter a valid number");
    return;
  }

  let URL = `https://api.exchangerate-api.com/v4/latest/${fromCurrency.value}`;
  fetch(URL)
    .then((res) => res.json())
    .then((data) => {
      let rate = data.rates[toCurrency.value];
      let total = (amount * rate).toFixed(2);
      exchangeMsg.innerText = `${amount} ${fromCurrency.value} = ${total} ${toCurrency.value}`;
    })
    .catch(() => {
      exchangeMsg.innerText = "Something went wrong 😥";
    });
}

// Swap currencies
icons.addEventListener("click", () => {
  let temp = fromCurrency.value;
  fromCurrency.value = toCurrency.value;
  toCurrency.value = temp;
  updateFlag(fromCurrency);
  updateFlag(toCurrency);
  getExchangeRate();
});
