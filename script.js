const modeToggle = document.querySelector(".mode");
modeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  const icon = modeToggle.querySelector("i");
  if (document.body.classList.contains("dark-mode")) {
    icon.classList.replace("fa-moon", "fa-sun");
    document.querySelector("body").style.background = "black";
    document.querySelector("body").style.color = "white";
    document.querySelector("p").style.color = "white";
    document.querySelector("h2").style.color = "white";
    document.querySelector(".resume").style.background = "white";
    document.querySelector("#work-option").style.color = "black";
    document.querySelector("#work-options-item").style.color = "black";
    document.querySelector(".contact").style.background = "black";
    document.querySelector(".contact").style.color = "white";
    document.querySelector(".contact-links").style.color = "white";
  } else {
    icon.classList.replace("fa-sun", "fa-moon");
    document.querySelector("body").style.background = "white";
    document.querySelector("body").style.color = "black";
  }
});
document.querySelector(".btn").addEventListener("click", () => {
  document.querySelector(".contact").scrollIntoView({
    behavior: "smooth",
  });
});
