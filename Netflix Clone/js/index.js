document.addEventListener("DOMContentLoaded", function () {
  var searchIcon = document.getElementById("search-target-click");
  searchIcon.addEventListener("click", (e) => handleClick(e));
  var scrollButtons = document.querySelectorAll(
    ".button-next, .button-previous"
  );
  scrollButtons.forEach((rightButton) =>
    rightButton.addEventListener("click", (e) => handleClick(e))
  );
  var notificationBell = document.getElementById("notification-bell");
  notificationBell.addEventListener("click", (e) => handleClick(e));
  var xboxReality = document.getElementById("xbox");
  xboxReality.addEventListener("click", (e) => {
    alert("Não faça o mesmo erro que eu fiz, não compre um Xbox");
  });
});

function handleClick(e) {
  if (e.target.id === "search-target-click") {
    let searchBox = document.getElementById("search-box");
    searchBox.classList.toggle("is-active");
  }

  if (
    e.target.classList[0] === "button-next" ||
    e.target.classList[0] === "button-previous"
  ) {
    let scrollBar = document.getElementById(e.target.parentElement.id);
    if (scrollBar.id === "nintendo-scroll") {
      e.target.classList[0] === "button-next"
        ? scrollBar.scrollBy({ top: 0, left: 210, behavior: "smooth" })
        : scrollBar.scrollBy({ top: 0, left: -210, behavior: "smooth" });
    } else if (scrollBar.id === "playstation-scroll") {
      e.target.classList[0] === "button-next"
        ? scrollBar.scrollBy({ top: 0, left: 310, behavior: "smooth" })
        : scrollBar.scrollBy({ top: 0, left: -310, behavior: "smooth" });
    } else if (scrollBar.id === "pc-scroll") {
      e.target.classList[0] === "button-next"
        ? scrollBar.scrollBy({ top: 0, left: 310, behavior: "smooth" })
        : scrollBar.scrollBy({ top: 0, left: -310, behavior: "smooth" });
    }
  }
}
