document.addEventListener("DOMContentLoaded", function () {
    var animatedElements = document.querySelectorAll(".animate-on-scroll");
  
    function checkScroll() {
      animatedElements.forEach(function (element) {
        var elementPosition = element.getBoundingClientRect().top;
        var screenHeight = window.innerHeight;
  
        if (elementPosition < screenHeight * 0.75) {
          element.classList.add("active");
        }
      });
    }
  
    window.addEventListener("scroll", checkScroll);
    checkScroll(); // Check initially in case some elements are already in view on page load
  });

  document.addEventListener("DOMContentLoaded", function() {
    var serviceGrid = document.querySelector(".service__grid");

    // Tambahkan kelas "fade-in" setelah jendela dimuat
    serviceGrid.classList.add("fade-in");
  });
  