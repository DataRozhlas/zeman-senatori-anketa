import "./targetblank";  // pro otvírání odkazů v novém okně
import flexibility from "flexibility";

function Rendruj(data, dodivu) {
  $(data).each(function(i) {
      var respondentDiv = $("<div class='respondent'></div>");
      $(respondentDiv).append("<img class='portret' src='https://data.irozhlas.cz/kyber-anketa/img/" + this.f + "'>");
      $(respondentDiv).append("<p class='jmeno'><strong>" + this.j + " " + this.p + "</strong>, " + this.s + "</p>");
      if (!this.o1) {$(respondentDiv).append("<p class='veta'><span class='bezodpovedi'>bez odpovědi</span>")};
      if (this.o1) {$(respondentDiv).append("<p class='veta'>" + this.o1 + "</p>")};      
      respondentDiv.appendTo(dodivu)
     });
}

$(document).ready(function() {
  $.getJSON("https://data.irozhlas.cz/zeman-senatori-anketa/data/senat.json", function(data) {
     Rendruj($.grep(data, function(n,i) {return n.k=='Ano.'}), "#anketa1");
     Rendruj($.grep(data, function(n,i) {return n.k=='Zvažuje, že ano.'}), "#anketa2");
     Rendruj($.grep(data, function(n,i) {return n.k=='Ne.'}), "#anketa3");
     Rendruj($.grep(data, function(n,i) {return n.k=='Není jasné.'}), "#anketa4");
     Rendruj($.grep(data, function(n,i) {return n.k==''}), "#anketa5");
  }); 
  flexibility(document.getElementById("anketa1"));
  flexibility(document.getElementById("anketa2"));
  flexibility(document.getElementById("anketa3"));
  flexibility(document.getElementById("anketa4"));
  flexibility(document.getElementById("anketa5"));
}); 
