function var7_animation() {
  console.log("Variable 7 animation has begun.");
  /*
   * Aquí se hace la animación, preferiblemente usando anime.timeline(parameters);
   */ 
}
function var7_createAssets() {
  /*
   * Aquí uno añade el fondo y los objetos requeridos al objeto:
   *  $("#canvas")
   * Estos se pueden añadir usando: #("#canvas").append();
   * Estos objetos se pueden crear usando JQuery como una tag:
   *  var objecto = $("<tag>")
   */
  canvas = $('#canvas');
  canvas.append($('<img>', {
    class: 'background',
    src: 'resources/images/ultraviolet.svg'
  }));
  console.log("Created assets for variable 7.");
}

