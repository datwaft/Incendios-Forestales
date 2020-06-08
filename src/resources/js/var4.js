function var4_animation() {
  console.log("Variable 4 animation has begun.");
  /*
   * Aquí se hace la animación, preferiblemente usando anime.timeline(parameters);
   */ 
}
function var4_createAssets() {
  canvas = $('#canvas');
  canvas.append($('<img>', {
    class: 'background',
    src: 'resources/images/precipitation.svg'
  }));
  console.log("Created assets for variable 4.");
}

