const button = document.getElementById('convert-button')
const select = document.getElementById('currency-select')
const dolar = 5.16
const euro = 5.18
const bitcoin = 103280.60
const ConverValues = () => {
    const inputReais = document.getElementById('Input-real').value;
    const RealValueText = document.getElementById('real-value-text');
    const ValorAtualDol = document.getElementById('valor-atual-dol');

    RealValueText.innerHTML = new Intl.NumberFormat('pt-br',
        { style: 'currency', currency: 'BRL' }
    ).format(inputReais)

    if (select.value === "US$ Dólar americano") {
        ValorAtualDol.innerHTML = new Intl.NumberFormat('en-US',
            { style: 'currency', currency: 'USD' }
        ).format(inputReais / dolar)
    }

    if (select.value === "€ Euro") {
        ValorAtualDol.innerHTML = new Intl.NumberFormat('de-De',
            { style: 'currency', currency: 'EUR' }
        ).format(inputReais / euro)
    }
    if (select.value === "₿ Bitcoin") {
        ValorAtualDol.innerHTML = new Intl.NumberFormat('de-De',
            { style: 'currency', currency: 'BTC' }
        ).format(inputReais / bitcoin)
    }

}
changeCurrency = () => {
    const CurrencyName = document.getElementById('currency-name')
    const CurrencyImg = document.getElementById('currency-img')
    
    if (select.value === 'US$ Dólar americano') {
        CurrencyName.innerHTML = "Dólar americano"
        CurrencyImg.src = "./imagens/Dolar.png"
    }

    if (select.value === '€ Euro') {
        CurrencyName.innerHTML = "Euro"
        CurrencyImg.src = "./imagens/Euro.png"
    }

    if (select.value === '₿ Bitcoin') {
        CurrencyName.innerHTML = "Bitcoin"
        CurrencyImg.src = "./imagens/Bitcoin.png"
    }
    ConverValues()
}
button.addEventListener('click', ConverValues)
select.addEventListener('change', changeCurrency)