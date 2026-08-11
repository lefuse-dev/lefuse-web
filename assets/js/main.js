(function () {
  "use strict";

  var toggle = document.querySelector(".menu-toggle");
  var navigation = document.getElementById("primary-navigation");

  if (!toggle || !navigation) return;

  document.documentElement.classList.add("nav-enhanced");

  function setOpen(isOpen, restoreFocus) {
    toggle.setAttribute("aria-expanded", String(isOpen));
    navigation.classList.toggle("is-open", isOpen);
    document.body.classList.toggle("menu-open", isOpen);
    if (!isOpen && restoreFocus) toggle.focus();
  }

  toggle.addEventListener("click", function () {
    setOpen(toggle.getAttribute("aria-expanded") !== "true", false);
  });

  navigation.addEventListener("click", function (event) {
    if (event.target.closest("a")) setOpen(false, false);
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && toggle.getAttribute("aria-expanded") === "true") {
      setOpen(false, true);
    }
  });

  window.addEventListener("resize", function () {
    if (window.innerWidth > 760) setOpen(false, false);
  });
})();
