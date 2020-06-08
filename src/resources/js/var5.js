function var5_animation() {
  console.log("Variable 5 animation has begun.");
  /*
   * Aquí se hace la animación, preferiblemente usando anime.timeline(parameters);
   */ 
}
function var5_createAssets() {
  canvas = $('#canvas');
  canvas.append($('<img>', {
    class: 'background',
    src: 'resources/images/wind.svg'
  }));
  console.log("Created assets for variable 5.");
}

