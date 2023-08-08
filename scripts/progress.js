document.addEventListener("DOMContentLoaded", function () {
  var accordianFull = document.getElementById("accordian-full");

  accordianFull.addEventListener("click", function (event) {
    var target = event.target;
    if (target.classList.contains("checkbox")) {
      if (target.checked) {
        target.parentElement.classList.add("marked");
      } else {
        target.parentElement.classList.remove("marked");
      }
        updateprogress();
    }
  });

function updateprogress(){
    let totalaccordians = document.querySelectorAll(".accordian").length;
    let markedaccordians = document.querySelectorAll(".accordian.marked").length;

    let progress = (markedaccordians / totalaccordians) * 100;
  
    const span = document.querySelector(".progress-bar span");

    span.dataset.width = progress + "%";

    span.style.width = span.dataset.width;
    span.innerHTML = span.dataset.width;
}
});
