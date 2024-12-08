const technika = document.querySelectorAll('.card');
technika.forEach(element => {
    const techQuantity = Number(element.querySelector('.quantity').textContent);
    const techPrice =  Number(element.querySelector('.tech_price').textContent);
    let quantityPriceArr = {};

    quantityPriceArr.quantity = techQuantity
    quantityPriceArr.price = techPrice

    console.log(quantityPriceArr)

    const buttonMinus = element.querySelector('.button-minus')
    const buttonPlus = element.querySelector('.button-plus')
    const techQuantityHTML = element.querySelector('.quantity')
    const techPriceHTML = element.querySelector('.tech_price')
    let count = Number(techQuantityHTML.textContent)
    let price = Number(techPriceHTML.textContent)
    const constPrice = Number(techPriceHTML.textContent)

    buttonMinus.addEventListener('click', () => {
        if (count > 1) {
            count--
            price = price - constPrice
        }
        techQuantityHTML.innerHTML = count
        techPriceHTML.innerHTML = price
    })

    buttonPlus.addEventListener('click', () => {
        count++
        price = price + constPrice
        techQuantityHTML.innerHTML = count
        techPriceHTML.innerHTML = price
    })

    const basketCount = document.querySelector('.basket_count')

    const techSellImg = element.querySelector('.tech_sell_image').src;
    const techSellName = element.querySelector('.information-about_head').textContent;
    const buyButton = element.querySelector('.add_button');
    let techSellArr = {};

    const eventbasketCount = () => {
        basketCount.innerHTML = '!'
    }

    buyButton.addEventListener('click', () => {
        techSellArr.name = techSellName;
        techSellArr.img = techSellImg;
        techSellArr.quantity = element.querySelector('.quantity').textContent;
        techSellArr.price = element.querySelector('.grid_price_block').textContent;
        console.log(techSellArr);
        localStorage.setItem(techSellName, JSON.stringify(techSellArr));
        eventbasketCount()
    })
});