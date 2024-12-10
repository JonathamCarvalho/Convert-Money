
const converterButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")

function convertValues() {
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert") // Valor em 
    const currencyValueConverted = document.querySelector(".currency-value") //Outras moedas

    console.log(currencySelect.value)

    const dolarToday = 0.17
    const euroToday = 0.16


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

    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue)
}

function changeCurrency(){
    const currencyName = document.querySelector(".currency-dolar")
    const currencyImage = document.querySelector(".currency-img")

    if(currencySelect.value == "dolar"){ 

    currencyName.innerHTML = "Dólar americano"
    currencyImage.src = "./assets/Dólar.png"
        }
    
    if(currencySelect.value == "euro"){ 

        currencyName.innerHTML = "Euro"
        currencyImage.src = "./assets/euro.png"
    }
}

 


currencySelect.addEventListener("change",changeCurrency )
converterButton.addEventListener("click", convertValues)

