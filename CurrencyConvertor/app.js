const base_url = "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/v1/currencies/usd/inr.json";
const dropdowns = document.querySelectorAll(".dropdown select");
const btn = document.querySelector("form button");
const fromcurr = document.querySelector("select[name='from']");
const tocurr = document.querySelector("select[name='to']");

for (let select of dropdowns) {
    for (currcode in countryList) {
        let newoption = document.createElement("option");
        newoption.innerText = currcode;
        newoption.value = currcode;
        if (select.name === "from" && currcode === "USD") {
            newoption.selected = "selected";
        } else if (select.name === "to" && currcode === "INR") {
            newoption.selected = "selected";
        }
        select.append(newoption);
    }
    select.addEventListener("change", (evt) => {
        updateFlag(evt.target);
    });
}

const updateFlag = (element) => {
    let currcode = element.value;
    let countrycode = countryList[currcode];
    let newsrc = `https://flagsapi.com/${countrycode}/flat/64.png`;
    let img = element.parentElement.querySelector("img");
    img.src = newsrc;
};

btn.addEventListener("click", async (evt) => {
    evt.preventDefault();

    let amount = document.querySelector(".amount input");
    let amtval = parseFloat(amount.value);
    if (isNaN(amtval) || amtval < 1) {
        amtval = 1;
        amount.value = "1";
    }

    const fromCurrency = fromcurr.value;
    const toCurrency = tocurr.value;

    const url = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/v1/currencies/${fromCurrency}/${toCurrency}.json`;

    const response = await fetch(url);
    const data = await response.json();

    console.log(data);
});

