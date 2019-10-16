window.onload = function() {
  var x = document.querySelectorAll(".caps");
  var y = document.querySelectorAll(".art");
  x.forEach(item => {
    item.addEventListener("click", () => {
      y.forEach(item => {
        item.classList.add("off");
      });
      var on = item.id;

      var z = document.querySelector(".art." + on);
      z.classList.toggle("off");
    });
  });
};
