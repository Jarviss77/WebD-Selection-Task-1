document.addEventListener('DOMContentLoaded', function() {
    var accordianFull = document.getElementById('accordian-full');

    accordianFull.addEventListener("click", function(event) {

        var target = event.target;
        if(target.classList.contains("checkbox"))
        {
            if(target.checked)
            {
                target.parentElement.classList.add("marked");
            }
            else
            {
                target.parentElement.classList.remove("marked");
            }
        }
    
    });
});

