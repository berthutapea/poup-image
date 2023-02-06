setTimeout(function() {
    document.getElementById("overlay").style.display = "block";
    document.getElementById("popup").style.display = "block";
  }, 3000);
  
  document.getElementById("close").addEventListener("click", function() {
    document.getElementById("overlay").style.display = "none";
    document.getElementById("popup").style.display = "none";
  });
  