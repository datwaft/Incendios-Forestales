function var2_animation() {
  console.log("Variable 2 animation has begun.");
  /*
   * Aquí se hace la animación, preferiblemente usando anime.timeline(parameters);
   */ 
}
function var2_createAssets() {
  canvas = $('#canvas');
  canvas.append($('<img>', {
    class: 'background',
    src: 'resources/images/humidity.svg'
  }));
  console.log("Created assets for variable 2.");
}
