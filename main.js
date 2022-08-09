document.getElementById("btn").onclick = function () { seeAll() };

function seeAll() {
    document.querySelectorAll("#see-all").classList.toggle("show");
}