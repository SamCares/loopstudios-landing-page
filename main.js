const seeAllButton = document.querySelector('.btn');
const collapseButton = document.querySelector('.btn2')
const seeAll = document.querySelectorAll('.see-all');
const hamburger = document.querySelector('.hamburger');
const close = document.querySelector('.close');

seeAllButton.addEventListener('click', function () {
    seeAll.forEach(seeAll => {
        seeAll.style.display = "block"
        btn.style.display = "none";
        btn2.style.display = "block"
    })
});

collapseButton.addEventListener('click', function () {
    seeAll.forEach(seeAll => {
        seeAll.style.display = "none"
        btn.style.display = "block";
        btn2.style.display = "none"
    })
});

hamburger.addEventListener('click', function () {
    close.style.display = "block";
    hamburger.style.display = "none";
})

close.addEventListener('click', function () {
    close.style.display = "none";
    hamburger.style.display = "block";
})

