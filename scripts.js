
const converterButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")

async function convertValues() {
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert") // Valor em real
    const currencyValueConverted = document.querySelector(".currency-value") //Outras moedas

    const data = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL").then(response => response.json())
    const dataTwo = await fetch("https://economia.awesomeapi.com.br/json/last/GBP-BRL").then(responseTwo => responseTwo.json())
    const dataThree = await fetch("https://economia.awesomeapi.com.br/json/last/ARS-BRL").then(responseThree => responseThree.json())
    console.log(currencySelect.value)

    const dolarToday = data.USDBRL.high
    const euroToday = data.EURBRL.high
    const libraToday = dataTwo.GBPBRL.high
    const bitcoinToday = data.BTCBRL.high
    const pesoToday = dataThree.ARSBRL.high

    if (currencySelect.value == "dolar") {
        //se o select estiver selecionado no valor de euro, entre aqui
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday)
    }

    if (currencySelect.value == "euro") {
        //se o select estiver selecionado no valor de euro, entre aqui
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday)

    }

    if (currencySelect.value == "libra") {
        //se o select estiver selecionado no valor de libra, entre aqui
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue / libraToday)
    }

    if (currencySelect.value == "bitcoin") {
        // se o select estiver selecionado no valor de bitcoin, entre aqui
        const bitcoinValue = inputCurrencyValue / libraToday;
        const formattedValue = bitcoinValue.toFixed(8);
        currencyValueConverted.innerHTML = formattedValue;
    }

    if (currencySelect.value == "peso") {
        //se o select estiver selecionado no valor de peso, entre aqui
        currencyValueConverted.innerHTML = new Intl.NumberFormat("es-CL", {
            style: "currency",
            currency: "CLP"
        }).format(inputCurrencyValue / pesoToday)
    }

    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue)
}

function changeCurrency() {
    const currencyName = document.querySelector(".currency-dolar")
    const currencyImage = document.querySelector(".currency-img")

    if (currencySelect.value == "dolar") {

        currencyName.innerHTML = "Dólar americano"
        currencyImage.src = "./assets/Dólar.png"
    }

    if (currencySelect.value == "euro") {

        currencyName.innerHTML = "Euro"
        currencyImage.src = "./assets/Euro.png"
    }

    if (currencySelect.value == "libra") {

        currencyName.innerHTML = "Libra"
        currencyImage.src = "./assets/Libra.png"
    }

    if (currencySelect.value == "bitcoin") {

        currencyName.innerHTML = "Bitcoin"
        currencyImage.src = "./assets/Bitcoin.png"
    }

    if (currencySelect.value == "peso") {

        currencyName.innerHTML = "Peso"
        currencyImage.src = "./assets/Peso.png"
    }
}


currencySelect.addEventListener("change", changeCurrency)
converterButton.addEventListener("click", convertValues)

