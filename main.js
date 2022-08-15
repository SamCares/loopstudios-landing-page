// document.getElementById("btn").onclick = function () { seeAll() };

// function seeAll() {
//     document.querySelectorAll("see-all").classList.toggle("show");
// }


const button = document.querySelector('btn');
const seeAll = document.querySelectorAll('see-all');

button.onMouseclick = function () {
    seeAll.classList.toggle('show');
}
