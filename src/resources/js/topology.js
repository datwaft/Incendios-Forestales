function topology_createAssets() {
  $('<img>', {
    class: 'background',
    src: 'resources/images/general.svg'
  }).appendTo('#canvas');
  console.log("Created assets for topology.");
}