const button = document.querySelector('.btn');
const seeAll = document.querySelectorAll('.see-all');

button.addEventListener('click', function () {
    seeAll.forEach(seeAll => {
        seeAll.classList.toggle('show');
        btn.innerText = "Collapse";
    });
});

// if (btn.innerText == "Collapse") {
//     btn.innerText = "See All";
// } else if (btn.innerText = "See All")
//     btn.innerText = "Collapse";
// } else {
//     null
// }
