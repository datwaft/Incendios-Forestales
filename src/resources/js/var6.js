function var6_animation() {
  console.log("Variable 6 animation has begun.");
  /*
   * Aquí se hace la animación, preferiblemente usando anime.timeline(parameters);
   */ 
}
function var6_createAssets() {
  canvas = $('#canvas');
  canvas.append($('<img>', {
    class: 'background',
    src: 'resources/images/lightning.svg'
  }));
  console.log("Created assets for variable 6.");
}

