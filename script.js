var typed = new Typed(".multiple-text", {
    strings: [
      "FrontEnd Development ",
      "Machine Learning",
      "Data Analytics",
    ],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true,
  });
  
  document.addEventListener("DOMContentLoaded", function () {
    window.addEventListener("scroll", function () {
      document.querySelectorAll(".Projects-section").forEach(function (section) {
        if (isElementInViewport(section)) {
          section.classList.remove("animated");
        } else {
          section.classList.add("animated");
        }
      });
    });
  });
  
  document.addEventListener("DOMContentLoaded", function () {
    window.addEventListener("scroll", function () {
      document.querySelectorAll(".AboutMe").forEach(function (section) {
        if (isElementInViewport(section)) {
          section.classList.remove("animated");
        } else {
          section.classList.add("animated");
        }
      });
    });
  });
  
  document.addEventListener("DOMContentLoaded", function () {
    window.addEventListener("scroll", function () {
      document.querySelectorAll(".Skills-section").forEach(function (section) {
        if (isElementInViewport(section)) {
          section.classList.remove("animated");
        } else {
          section.classList.add("animated");
        }
      });
    });
  });
  
  function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
  
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
  
  function blood() {
    open("");
  }
 function productify() {
    open("https://github.com/anjali642004/Netfilx-Homepage");
  }
  function productify2() {
    open("https://anjali642004.github.io/Netfilx-Homepage/");
  }


  function iris() {
    open("https://github.com/anjali642004/Temperature-Converter");
  }
  function irisLive() {
    open("https://anjali642004.github.io/Temperature-Converter/");
  }
  function tastyPlate() {
    open("https://github.com/anjali642004/disease-prediction");
  }
function heater() {
    open("https://github.com/anjali642004/Smart-Water-Heater");
  }
  
 function resume() {
    // open("https://drive.google.com/file/d/1Q6kV-_v9Pd5SLPJkdDNjrZcnzBZonUTz/view?usp=sharing");
    window.location.href='AnjaliResume.pdf';
  }
  
