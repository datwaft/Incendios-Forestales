function var4_animation() {
  console.log("Variable 4 animation has begun.");
  var slider = $('#slider');
  slider.val(0);
  var timeline = anime.timeline({
    loop: false,
    autoplay: false,
    easing: 'linear',
    update: () => slider.val(timeline.progress)
  });
  // BEGIN ANIMATION
  show_var4_initial(timeline);
  from_var4_to_main(timeline);
  from_main_to_router(timeline);
  from_router_to_server(timeline, "Se ha detectado una preocupante falta de precipitación");
  from_server_to_everyone(timeline);
  // END ANIMATION
  $(".play-button").click(timeline.play);
  $(".pause-button").click(timeline.pause);
  $(".restart-button").click(() => {
    timeline.restart();
    timeline.pause();
    slider.val(0);
  });
  slider.on('input', ()=> timeline.seek(timeline.duration * (slider.val() / 100)));
}
function var4_createAssets() {
  $('<img>', {
    class: 'background',
    src: 'resources/images/precipitation.svg'
  }).appendTo('#canvas');
  console.log("Created assets for variable 4.");
}

