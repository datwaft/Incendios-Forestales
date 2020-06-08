function var2_animation() {
  console.log("Variable 2 animation has begun.");
  var slider = $('#slider');
  slider.val(0);
  var timeline = anime.timeline({
    loop: false,
    autoplay: false,
    easing: 'linear',
    update: () => slider.val(timeline.progress)
  });
  // BEGIN ANIMATION
  show_var2_initial(timeline);
  from_var2_to_main(timeline);
  from_main_to_router(timeline);
  from_router_to_server(timeline, "Se detectó una falta de humedad peligrosa");
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
function var2_createAssets() {
  $('<img>', {
    class: 'background',
    src: 'resources/images/humidity.svg'
  }).appendTo('#canvas');
  console.log("Created assets for variable 2.");
}
