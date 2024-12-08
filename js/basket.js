const itemCard = document.querySelector('.popup-items');
const block = document.querySelectorAll('.grid_block_korzina')
const cards = [
    'Новый трактор МТЗ 82.1 (Беларус)',
    'Трактор МТЗ Беларус-952.3',
    'Трактор МТЗ Беларус 92П.4',
];

const update = () => {
    itemCard.innerHTML = "";
    cards.forEach(element => {
    const saveCard = JSON.parse(localStorage.getItem(element));
    if (saveCard === null) {
        return
    }
    console.log(saveCard.price);
    
    itemCard.innerHTML += `
    <div class="grid_block_korzina">
        <img class="tovar_korzina_image" src="${saveCard.img}">
        <p class="tovar_korzina_name">${saveCard.name}</p>
        <p class="quantity">${saveCard.quantity}</p>
        <p class="tovar_korzina_price">${saveCard.price} ₽</p>
        <button type="button" class="deleteButton">Удалить</button>
    </div>
`;
});
}
update()

const cardsDelete = document.querySelectorAll('.grid_block_korzina')
cardsDelete.forEach(element => {
    const nameTech = element.children[1].textContent
    const deleteButton = element.querySelector('.deleteButton')
    deleteButton.addEventListener('click', () => {
        localStorage.removeItem(nameTech)
        update()
        location.reload()
    })
})

const itog = document.querySelector('.digit_itog')
const priceElement = document.querySelectorAll('.tovar_korzina_price')

let sum = 0;
priceElement.forEach(element => {
    console.log(typeof(element.textContent))
    console.log('slice', element.textContent.replace(/[a-zа-яё]/gi, '').slice(43,-1));
    sum += Number(element.textContent.replace(/[a-zа-яё]/gi, '').slice(43,-1))
    itog.innerHTML = ''+ sum + ' ₽'
})