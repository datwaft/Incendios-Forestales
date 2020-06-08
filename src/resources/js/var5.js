function var5_animation() {
  console.log("Variable 5 animation has begun.");
  var slider = $('#slider');
  slider.val(0);
  var timeline = anime.timeline({
    loop: false,
    autoplay: false,
    easing: 'linear',
    update: () => slider.val(timeline.progress)
  });
  // BEGIN ANIMATION
  show_var5_initial(timeline);
  from_var5_to_main(timeline);
  from_main_to_router(timeline);
  from_router_to_server(timeline, "Se detectó una cantidad de viento peligrosa");
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
function var5_createAssets() {
  $('<img>', {
    class: 'background',
    src: 'resources/images/wind.svg'
  }).appendTo('#canvas');
  console.log("Created assets for variable 5.");
}

