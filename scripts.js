$(document).ready(function () {
  $("#contactButton").click(function () {
    $("#contactModal").modal("show");
  });

  $("#readMoreButton").click(function () {
    window.open("https://fylehq.com", "_blank");
  });

  $(".service-image").hover(
    function () {
      $(this).siblings(".service-card").show();
    },
    function () {
      $(this).siblings(".service-card").hide();
    }
  );

  $(".service-card").hover(
    function () {
      $(this).show();
    },
    function () {
      $(this).hide();
    }
  );
});
document.addEventListener("DOMContentLoaded", function () {
  const projectContents = document.querySelectorAll(".project-content");
  const projectImage = document.getElementById("projectImage");

  projectContents.forEach((content) => {
    content.addEventListener("click", function () {
      const newImage = this.getAttribute("data-image");
      projectImage.setAttribute("src", newImage);
    });
  });
});
