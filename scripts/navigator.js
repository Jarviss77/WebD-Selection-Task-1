document.addEventListener("DOMContentLoaded", function () {

    document.addEventListener("keydown", function (event) {

        console.log(event.key);
        let accordianactive = document.querySelectorAll(".accordian.active");

        if (accordianactive) {
            const activeindex = Array.from(document.querySelectorAll(".accordian")).indexOf(accordianactive[0]);
            console.log(accordianactive[0]);
            console.log(Array.from(document.querySelectorAll('.accordion')));
            if (event.key == "ArrowUp" && activeindex > 0) {
                console.log(accordianactive[0]);
                accordianactive[0].classList.remove("active");
                const prevaccordian = document.querySelectorAll('.accordian')[activeindex - 1];
                console.log(prevaccordian);
                prevaccordian.classList.add("active");
                prevaccordian.click();
                event.preventDefault();
            }
            else if (event.key == "ArrowDown" && activeindex < document.querySelectorAll('.accordion').length - 1) {
                console.log(document.querySelectorAll('.accordion').length - 1);
                accordianactive[0].classList.remove("active");
                const nextaccordian = document.querySelectorAll('.accordian')[activeindex + 1];
                nextaccordian.classList.add("active");
                nextaccordian.click();
                event.preventDefault();
            }
        }

    });

});
