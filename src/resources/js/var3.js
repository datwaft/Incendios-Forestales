function var3_animation() {
  console.log("Variable 3 animation has begun.");
  /*
   * Aquí se hace la animación, preferiblemente usando anime.timeline(parameters);
   */ 
}
function var3_createAssets() {
  canvas = $('#canvas');
  canvas.append($('<img>', {
    class: 'background',
    src: 'resources/images/location.svg'
  }));
  console.log("Created assets for variable 3.");
}

