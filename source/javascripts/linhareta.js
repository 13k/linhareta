function RandomEpigraph() {
  this.data = [
    "Onde é que há gente no mundo?",
    "Não sou nada.<br/>Nunca serei nada.<br/>Não posso querer ser nada.<br/>À parte isso, tenho em mim todos<br/><span class=\"cont\">os sonhos do mundo.</span>",
    "Somos dois abismos<br/>&mdash; um poço fitando o céu.",
    "A glória noturna de ser grande<br/><span class=\"cont\">não sendo nada!</span>"
  ];
}

RandomEpigraph.prototype = {
  sample: function() {
    return this.data[this._randomInt(0, this.data.length-1)];
  },

  _randomInt: function(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
};

$(document).ready(function() {
  $("#epigraph").html((new RandomEpigraph()).sample());
});
