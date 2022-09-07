const message = "Formulaire envoyée !";
const salut = document.querySelectorAll(".hero .pictTitle h1 span");
const TL = gspa.timeline();

window.onload = function () {
  

  timeline.staggerFrom(
    "spanAnim",
    1,
    { top: -50, opacity: 0, ease: "power2.out" },
    0.3
  );
  document.getElementById("form").addEventListener("submit", (event) => {
    event.preventDefault();
    alert(message);

    timeline.play();
  });
};
