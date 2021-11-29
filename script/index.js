function myFunction() {
    var x = document.getElementById("sajatmenusor");
    if (x.className === "menusor") {
      x.className += " responsive";
    } else {
      x.className = "menusor";
    }
  }

function selectPage(obj) {
  $("div.active").removeClass("active");
  $(obj).addClass("active");
  $(".selected-item").text($(obj).text());
  if ($("#sajatmenusor").hasClass("responsive")) {
    $("#sajatmenusor").removeClass("responsive");
  }
}

$(document).ready(function () {
    

    $("#content").load("main.html"); 

    $("#btn-fooldal").on("click", function () {
      selectPage(this);
      $("#content").load("main.html"); 
    });

    $("#btn-bemutatkozas").on("click", function () {
      selectPage(this);
      $("#content").load("introduction.html"); 
      
    });
    
    $("#btn-kontakt").on("click", function () {
      selectPage(this);
      $("#content").load("contact.html"); 

     });
    
    $("#btn-portfolio").on("click", function () {
      selectPage(this);
      $("#content").load("galeria.html"); 
    });

    $("#btn-hogyankeszult").on("click", function () {
      selectPage(this);
      $("#content").load("howtodo.html"); 
    });
});
