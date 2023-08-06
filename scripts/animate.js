document.addEventListener('DOMContentLoaded', function() {
    var accordianFull = document.getElementById('accordian-full');
  
    accordianFull.addEventListener("click", function(event) {
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
  });
