let step = 0;
        const steps = document.querySelectorAll(".form-step");
      
        function showStep(n) {
          steps.forEach((stepDiv, index) => {
            stepDiv.classList.toggle("active", index === n);
          });
        }
      
        function nextStep() {
          if (step < steps.length - 1) {
            step++;
            showStep(step);
          }
        }
      
        function prevStep() {
          if (step > 0) {
            step--;
            showStep(step);
          }
        }
      
        document.getElementById("intakeForm").addEventListener("submit", function (e) {
          e.preventDefault();
          alert("Form submitted! We'll be in touch soon.");
          // You can replace this alert with real submission logic or AJAX call.
        });
      
        // Initialize first step
        showStep(0);