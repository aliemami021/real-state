const list = document.querySelector('.ma-list');
const items = list.querySelectorAll('li');

const dropList = document.querySelectorAll('.my-nav>ul ul')  //moshkel!
const dropItems = document.querySelectorAll('.my-nav>ul ul li');

for (let i = 0; i < items.length; i++) {
    items[i].addEventListener('mouseover', function () {
        dropList[0].style.transform =' scale(1)';
    });
}
for (let i = 0; i < items.length; i++) {
    items[i].addEventListener('mouseout', function () {
        dropList[0].style.transform = 'scale(0)';
    });
}

