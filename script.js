const a = prompt('выберите товар пж')
const b = prompt('выберите товар пж')
const c = prompt('выберите товар пж')

const listText = []

listText.push(a)
listText.push(b)
listText.push(c)


const ul = document.querySelector('ul')
listText.forEach((product,index) => {
    const list = document.createElement('li')
    list.innerText = product
    list.classList.add(`color${index}`)
    ul.append(list)
    list.onclick = () => {
        list.innerText = 'УРА ТЫ ДАЛ МНЕ ДЕНЕГ!!!!!!'
        list.classList.add('green')
    }
})