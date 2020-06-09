$(document).ready(() => {
  console.log("Page has been loaded.");
  topology();
});
function initClick() {
  $("#var-1").prop("onclick", null).off("click");
  $("#var-1").click(var1);
  $("#var-2").prop("onclick", null).off("click");
  $("#var-2").click(var2);
  $("#var-3").prop("onclick", null).off("click");
  $("#var-3").click(var3);
  $("#var-4").prop("onclick", null).off("click");
  $("#var-4").click(var4);
  $("#var-5").prop("onclick", null).off("click");
  $("#var-5").click(var5);
  $("#var-6").prop("onclick", null).off("click");
  $("#var-6").click(var6);
  $("#var-7").prop("onclick", null).off("click");
  $("#var-7").click(var7);
  $("#topology").prop("onclick", null).off("click");
  $("#topology").click(topology);
}
function clearSelected() {
  $("#var-1").removeClass("selected");
  $("#var-2").removeClass("selected");
  $("#var-3").removeClass("selected");
  $("#var-4").removeClass("selected");
  $("#var-5").removeClass("selected");
  $("#var-6").removeClass("selected");
  $("#var-7").removeClass("selected");
  $("#topology").removeClass("selected");
}
function clearAssets() {
  $("#canvas").empty();
  console.log("Assets has been cleared.");
}
function var1() {
  console.log("Variable 1 option has been selected.");
  $("#control").show();
  initClick();
  clearSelected();
  $("#var-1").prop("onclick", null).off("click");
  $("#var-1").addClass("selected");
  clearAssets();
  var1_createAssets();
  var1_animation();
}
function var2() {
  console.log("Variable 2 option has been selected.");
  $("#control").show();
  initClick();
  clearSelected();
  $("#var-2").prop("onclick", null).off("click");
  $("#var-2").addClass("selected");
  clearAssets();
  var2_createAssets();
  var2_animation();
}
function var3() {
  console.log("Variable 3 option has been selected.");
  $("#control").show();
  initClick();
  clearSelected();
  $("#var-3").prop("onclick", null).off("click");
  $("#var-3").addClass("selected");
  clearAssets();
  var3_createAssets();
  var3_animation();
}
function var4() {
  console.log("Variable 4 option has been selected.");
  $("#control").show();
  initClick();
  clearSelected();
  $("#var-4").prop("onclick", null).off("click");
  $("#var-4").addClass("selected");
  clearAssets();
  var4_createAssets();
  var4_animation();
}
function var5() {
  console.log("Variable 5 option has been selected.");
  $("#control").show();
  initClick();
  clearSelected();
  $("#var-5").prop("onclick", null).off("click");
  $("#var-5").addClass("selected");
  clearAssets();
  var5_createAssets();
  var5_animation();
}
function var6() {
  console.log("Variable 6 option has been selected.");
  $("#control").show();
  initClick();
  clearSelected();
  $("#var-6").prop("onclick", null).off("click");
  $("#var-6").addClass("selected");
  clearAssets();
  var6_createAssets();
  var6_animation();
}
function var7() {
  $("#control").show();
  console.log("Variable 7 option has been selected.");
  initClick();
  clearSelected();
  $("#var-7").prop("onclick", null).off("click");
  $("#var-7").addClass("selected");
  clearAssets();
  var7_createAssets();
  var7_animation();
}

function topology() {
  console.log("Topology option has been selected.");
  initClick();
  clearSelected();
  $("#topology").prop("onclick", null).off("click");
  $("#topology").addClass("selected");
  clearAssets();
  topology_createAssets();
  $("#control").hide();

}
