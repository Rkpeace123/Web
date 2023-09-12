document.addEventListener("DOMContentLoaded", function () {
  const formSteps = document.querySelectorAll(".form-step");
  const prevButtons = document.querySelectorAll(".btn-prev");
  const nextButtons = document.querySelectorAll(".btn-next");
  const progressSteps = document.querySelectorAll(".progress-step");

  let currentStep = 0;

  function showStep(stepIndex) {
    formSteps.forEach((step, index) => {
      if (index === stepIndex) {
        step.style.display = "block";
      } else {
        step.style.display = "none";
      }
    });

    // Update progress bar
    progressSteps.forEach((step, index) => {
      if (index === stepIndex) {
        step.style.backgroundColor = "#ff4d4d"; // Red color for active step
      } else {
        step.style.backgroundColor = "#fff"; // White color for inactive steps
      }
    });
  }

  function navigateForm(direction) {
    if (direction === "next" && currentStep < formSteps.length - 1) {
      currentStep++;
      showStep(currentStep);
    } else if (direction === "prev" && currentStep > 0) {
      currentStep--;
      showStep(currentStep);
    }
  }

  nextButtons.forEach((nextButton) => {
    nextButton.addEventListener("click", function (e) {
      e.preventDefault();
      navigateForm("next");
    });
  });

  prevButtons.forEach((prevButton) => {
    prevButton.addEventListener("click", function (e) {
      e.preventDefault();
      navigateForm("prev");
    });
  });

  showStep(currentStep);

  const formFields = document.querySelectorAll(".form input, .form select, .form textarea");
  const userDetailsData = {}; // Object to store user details

  formFields.forEach((field) => {
    field.addEventListener("input", (event) => {
      const fieldName = event.target.name;
      const fieldValue = event.target.value;
      userDetailsData[fieldName] = fieldValue; // Update the userDetailsData object
    });
  });
});

