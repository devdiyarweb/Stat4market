const btn = document.querySelector('.btn');
const list = document.querySelector('.nav__content_1_list');
const phone = document.querySelector('.nav__content_2__phone');

btn.addEventListener('click', function(){
    list.style = `transition: 500ms;
    transform: translateX(0);`
    phone.style = `transition: 500ms;
    transform: translateX(0);
    margin-top: 30px;`
})