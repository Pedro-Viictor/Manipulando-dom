//Esse script tem como objetivo chamar a função inline do código html (tag) e acrescentar h3, ul, input (Listas novas após o click.)

function addContact() {
    const contactSection = document.querySelector('#contacts-list')

    const h3 = document.createElement('h3')
    h3.textContent = 'Contato'

    const ul = document.createElement('ul')

    const nameLi = document.createElement('li')
    nameLi.textContent = 'Nome: '


    const nameInput = document.createElement('input')
    nameInput.type = 'text'
    nameInput.name = 'fullname'

    nameLi.appendChild(nameInput)
    ul.appendChild(nameLi)
    ul.appendChild(document.createElement('br'))

    //Acima foi criado usando JS dinâmico tags em html como se fossem DOM seguindo a hierarquia de h3 > ul > li > input


    //Aqui vamos fazer uma lista de telefone

    const phoneLi = document.createElement('li')
    phoneLi.textContent = 'Telefone: '
    const phoneInput = document.createElement('input')
    phoneInput.type = 'text'
    phoneInput.name = 'phone'
    phoneLi.appendChild(phoneInput)
    ul.appendChild(phoneLi)
    ul.appendChild(document.createElement('br'))

    //Agora vamos criar uma script de Endereço

    const addressLi = document.createElement('li')
    addressLi.innerHTML = '<label for="address">Endereço: </label>'
    const addressInput = document.createElement('input')
    addressInput.type = 'text'
    addressInput.name = 'address'
    addressInput.id = 'address'
    addressLi.appendChild(addressInput)
    ul.appendChild(addressLi)
    ul.appendChild(document.createElement('br'))

    contactSection.append(h3, ul)
};

//Esse script tem como objetivo criar uma label acompanhada de um input após o evento de passar o mouse por cima ser ativado. "Uma label de prática"

const newLabel = document.querySelector('#input-label')

newLabel.addEventListener('mouseover', function () {
    console.log('passou o mouse')
    const label = document.createElement('label')
    label.textContent = 'Nova label: '
    label.name = 'campo'
    label.id = 'campo'
    const newInput1 = document.createElement('input')
    newInput1.name = 'campo'
    newInput1.id = 'campo'
    newInput1.type = 'text'
    newInput1.placeholder = 'Escreva que ama!'

    newLabel.appendChild(label)
    label.appendChild(newInput1)
    newLabel.appendChild(document.createElement('br'))
});


//Esse script abaixo tem como objetivo treinar o uso de for usando eventos e setTimeout para atrasar o evento.

const scriptLove = document.querySelector('#ilove')

scriptLove.addEventListener('click', () => {
    let numberLoves = 5

    for (let i = 0; i <= numberLoves; i++) {

        setTimeout(() => {
            const tagP = document.createElement('p')
            tagP.textContent = 'Amo você!'
            tagP.style.backgroundColor = 'green'
            tagP.style.color = 'black'
            scriptLove.appendChild(tagP)
        }, 3000)
    }
});

//Esse script abaixo tem como objetivo testar se o evento funciona.

document.querySelector('#new-btn').addEventListener('click', () => {
    console.log('Está funcionando!')
});

//Esse script abaixo tem como objetivo usar setTimeout dentro de uma função de evento

const testeBtn2 = document.querySelector('#botao2')
testeBtn2.addEventListener('click', function () {
    const paragraphics = document.querySelector('#paragrafos')

    setTimeout(() => {
        const p = document.createElement('p')
        p.textContent = 'Nova frase criada!'
        p.style.backgroundColor = 'pink'
        p.style.color = 'black'
        paragraphics.appendChild(p)
    }, 3000)
});

// Esse script abaixo tem como objetivo adicionar um evento usando uma única linha.

const testeBtn3 = document.querySelector('#botao3').addEventListener('click', () => {
    const newParagraphics = document.querySelector('#novoparagrafo')

    setTimeout(() => {
        const p3 = document.createElement('p')
        p3.textContent = 'Nova Frase do botão 3!'
        p3.style.backgroundColor = 'gray'
        p3.style.color = 'black'
        newParagraphics.appendChild(p3)
    }, 3000)
});