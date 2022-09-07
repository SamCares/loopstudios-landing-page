const seeAllButton = document.querySelector('.btn');
const collapseButton = document.querySelector('.btn2')
const seeAll = document.querySelectorAll('.see-all');

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