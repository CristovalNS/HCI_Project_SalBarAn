const modal1 = document.querySelector('#modal1');
const openModal1 = document.querySelector('.open-button1');
const closeModal1 = document.querySelector('.close-button1');

openModal1.addEventListener('click', () => {
    modal1.show();
})

closeModal1.addEventListener('click', () => {
    modal1.close();
})


const modal2 = document.querySelector('#modal2');
const openModal2 = document.querySelector('.open-button2');
const closeModal2 = document.querySelector('.close-button2');

openModal2.addEventListener('click', () => {
    modal2.show();
})

closeModal2.addEventListener('click', () => {
    modal2.close();
})