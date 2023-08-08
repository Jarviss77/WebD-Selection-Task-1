document.addEventListener("DOMContentLoaded", function () {
  var accordianFull = document.getElementById("accordian-full");

  accordianFull.addEventListener("click", function (event) {
    var target = event.target;

    if (target.classList.contains("accordian")) {
      target.classList.toggle("active");
      var panel = target.nextElementSibling;
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      }
    }
    
  });

  var button = document.getElementById("dark-button");
  button.addEventListener("click", function () {
    console.log("clicked");
    var darkElements = document.getElementsByClassName("dark");
    for (var i = 0; i < darkElements.length; i++) {
      darkElements[i].classList.toggle("dark-mode");
    }
    var lightElements = document.getElementsByClassName("dark-light");
    for (var i = 0; i < lightElements.length; i++) {
      lightElements[i].classList.toggle("dark-mode-light");
    }
    document.getElementById("footer").classList.toggle("dark-footer");

    var darkaccordian = document.querySelectorAll(".accordian");
    for (var i = 0; i < darkaccordian.length; i++) {
      darkaccordian[i].classList.toggle("dark-accordian");
    }

    var darkpanel = document.querySelectorAll(".panel");
    for (var i = 0; i < darkpanel.length; i++) {
      darkpanel[i].classList.toggle("dark-panel");
    }

    document.getElementById("copyright").classList.toggle("dark-copyright");
    document.getElementById("progress").classList.toggle("dark-mode");
  });


});
