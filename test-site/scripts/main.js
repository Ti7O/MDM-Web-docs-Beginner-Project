function headerChanger() {
   document.querySelector("h1").textContent = "Welcome to Firefox";
   document.getElementById("edgeLogo").src = "images/firefoxLogo.png";
   document.querySelector("p").textContent =
      "At Firefox we are a community of:";
   document.getElementById("l1").textContent = "Better Thinkers";
   document.getElementById("l2").textContent = "More Friendly People";
   document.getElementById("l3").textContent = "Smarter People";
   document.getElementById("learnMore").textContent =
      "Read the documentation: https://developer.mozilla.org/en-US/docs/Mozilla/Firefox";
   document.querySelector("html").style.backgroundColor = "#00539f";
   document.querySelector("body").style.backgroundColor = "#FF9500";
}

document.querySelector("h1").addEventListener("click", headerChanger);
