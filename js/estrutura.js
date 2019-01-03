function myFunction(x) {
  x.classList.toggle("change");
  document.getElementById("btn-hamburguer").blur();
}

$(document).ready(function(){
  $("#navbardrop,.dropdown-menu").on({
    mouseenter: function(){
		$(".dropdown-menu,.dropdown").addClass("show");
		$("#navbardrop").addClass("bg-docedeleite");
		$("#navbardrop").css({"border-top-left-radius": "4px"});
		$("#navbardrop").css({"border-top-right-radius": "4px"});
    },  
    mouseleave: function(){
		$(".dropdown-menu,.dropdown").removeClass("show");
		$("#navbardrop").removeClass("bg-docedeleite");
		$("#navbardrop").css({"border-top-left-radius": "4px"});
		$("#navbardrop").css({"border-top-right-radius": "4px"});
    }, 
    click: function(){
		$(".dropdown-menu,.dropdown").toggleClass("show");
		$("#navbardrop").toggleClass("bg-docedeleite");
		$("#navbardrop").css({"border-top-left-radius": "4px"});
		$("#navbardrop").css({"border-top-right-radius": "4px"});
    }  
  });
  $(".acessoSecao").on({
	  click: function(){
		document.getElementById("dsn-hamburguer").classList.toggle("change");
		document.getElementById("btn-hamburguer").blur();
		$(".navbar-toggler").addClass("collapsed");
		$(".navbar-collapse").removeClass("show");
    }  
	});
});



$('.carousel').carousel({
  interval: 1500
})
