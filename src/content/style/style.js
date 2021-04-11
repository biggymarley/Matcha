window.addEventListener("scroll", () => {
    if (window.pageYOffset > window.innerHeight / 2)
      document.querySelector(".swip").style.opacity = 0;
    else if (window.pageYOffset > 100)
      document.querySelector(".swip").style.opacity = 0.5;
    else document.querySelector(".swip").style.opacity = 1;
  });
