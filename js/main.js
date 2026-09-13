(function () {
  const registerButtons = document.querySelectorAll("[data-register-cta]");

  registerButtons.forEach((btn) => {
    if (window.REGISTRATION_URL) {
      btn.href = window.REGISTRATION_URL;
      btn.target = "_blank";
      btn.rel = "noopener noreferrer";
    }

    btn.addEventListener("click", (e) => {
      if (!window.REGISTRATION_URL) {
        e.preventDefault();

        window.alert(
          "Registration has not opened yet. The official Google Form link will be added soon."
        );
      }
    });
  });
})();