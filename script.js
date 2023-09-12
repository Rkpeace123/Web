
var navLinks = document.getElementById("navLinks");

function showMenu() {
    navLinks.style.right = "0";
    // Scroll to the top of the page
  $("html, body").animate(
    {
        scrollTop: 0
    },
    1000 // You can adjust the speed (1000 = 1 second)
);
}


function hideMenu() {
    navLinks.style.right = "-200px";
}



// Handle scroll-down button click
$(".scroll-down").click(function () {
  $("html, body").animate(
      {
          scrollTop: $(".scroll-target").offset().top
      },
      1000 // You can adjust the speed (1000 = 1 second)
  );
});



