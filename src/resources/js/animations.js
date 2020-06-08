class Packet {
  constructor(tl, pos, offset = null) {
    this.time = (offset ? offset : tl.duration);
    this.tl = tl;
    this.pos = {
      top: pos.top,
      left: pos.left
    };
    this.jquery = $('<i>', {
      class: 'fa fa-envelope packet',
    }).appendTo('#canvas');
    this.element = this.jquery.get(0);
    this.tl.add({
      targets: this.element,
      top: [this.pos.top, this.pos.top],
      left: [this.pos.left, this.pos.left],
      opacity: [0, 1],
      duration: 300
    }, this.time + 300)
    this.time += 300 + 300;
  }
  calcDuration(pos) {
    var topDiff = Math.abs(parseInt(this.pos.top) - parseInt(pos.top ? pos.top : this.pos.top))
    var leftDiff = Math.abs(parseInt(this.pos.left) - parseInt(pos.left ? pos.left : this.pos.left))
    var mean = (topDiff + leftDiff)
    return mean * 8
  }
  move(pos) {
    if (pos instanceof Array) {
      pos.forEach((e, i) => {
        if (e.top == this.pos.top && e.left == this.pos.left) return;
        if (i == 0) {
          this.tl.add({
            targets: this.element,
            top: [this.pos.top, (e.top ? e.top : this.pos.top)],
            left: [this.pos.left, (e.left ? e.left : this.pos.left)],
            duration: this.calcDuration(e)
          }, this.time + 200);
          this.time += this.calcDuration(e) + 200;
        } else {
          this.tl.add({
            targets: this.element,
            top: [this.pos.top, (e.top ? e.top : this.pos.top)],
            left: [this.pos.left, (e.left ? e.left : this.pos.left)],
            duration: this.calcDuration(e)
          }, this.time);
          this.time += this.calcDuration(e);
        }
        this.pos = {
          top: (e.top ? e.top : this.pos.top),
          left: (e.left ? e.left : this.pos.left)
        }
      });
    } else {
      this.tl.add({
        targets: this.element,
        top: [this.pos.top, (pos.top ? pos.top : this.pos.top)],
        left: [this.pos.left, (pos.left ? pos.left : this.pos.left)],
        duration: this.calcDuration(pos)
      }, this.time + 200);
      this.time += this.calcDuration(pos) + 200;
      this.pos = {
        top: (pos.top ? pos.top : this.pos.top),
        left: (pos.left ? pos.left : this.pos.left)
      }
    }
    return this;
  }
  destroy() {
    this.tl.add({
      targets: this.element,
      opacity: 0,
      duration: 300
    }, this.time + 200);
    this.time += 300 + 200;
    return this;
  }
}
// Message class
class Message {
  constructor(tl, pos, msj, offset, top = true) {
    this.time = (offset ? offset : tl.duration);
    this.tl = tl;
    this.pos = pos;
    var tooltip = $('<div>', {
      class: (top ? 'tooltip' : 'tooltip-bottom'),
      css: {
        top: this.pos.top,
        left: this.pos.left
      }
    });
    this.message = $('<div>', { class: 'message' });
    if (msj instanceof jQuery) {
      this.message.append(msj);
    } else {
      this.message.text(msj);
    }
    this.arrow = $('<div>', { class: 'arrow' });
    tooltip.append(this.message);
    tooltip.append(this.arrow);
    $('#canvas').append(tooltip);
    tl.add({
      targets: [this.message.get(0), this.arrow.get(0)],
      opacity: 1,
      duration: 500
    }, this.time);
    this.time += 500;
  }
  wait(duration) {
    this.tl.add({
      duration: duration
    }, this.time);
    this.time += duration;
    return this;
  }
  destroy() {
    this.tl.add({
      targets: [this.message.get(0), this.arrow.get(0)],
      opacity: 0,
      duration: 500
    }, this.time);
    this.time += 500;
    return this;
  }
}
class Picture {
  constructor(tl, pos, src, offset) {
    this.time = (offset ? offset : tl.duration);
    this.tl = tl;
    this.pos = pos;
    this.img = $('<img>', {
      class: 'image',
      src: src,
      css: {
        top: pos.top,
        left: pos.left,
      }
    }).appendTo('#canvas');
    tl.add({
      targets: this.img.get(0),
      opacity: 1,
      duration: 500
    }, this.time);
    this.time += 500;
  }
  wait(duration) {
    this.tl.add({
      duration: duration
    }, this.time);
    this.time += duration;
    return this;
  }
  destroy() {
    this.tl.add({
      targets: this.img.get(0),
      opacity: 0,
      duration: 500
    }, this.time);
    this.time += 500;
    return this;
  }
}
// Ubicación de los diferentes cosos
var sensor1 = {top: '232px', left: '476px'};
var sensor2 = {top: '289px', left: '446px'};
var sensor3 = {top: '335px', left: '481px'};
var sensor4 = {top: '382px', left: '447px'};
var sensor5 = {top: '428px', left: '476px'};
var sensor6 = {top: '231px', left: '591px'};
var sensor7 = {top: '286px', left: '620px'};
var sensor8 = {top: '335px', left: '589px'};
var sensor9 = {top: '382px', left: '620px'};
var sensor10 = {top: '427px', left: '591px'};
var server = {top: '15px', left: '241px'};
var sinac = {top: '46px', left: '85px'};
var aws = {top: '187px', left: '75px'};
var station = {top: '345px', left: '82px'};
var pc = {top: '383px', left: '156px'};
var cellphone = {top: '391px', left: '192px'};
var tablet = {top: '389px', left: '313px'};
var main = {
  left: {top: '164px', left: '517px'},
  right: {top: '164px', left: '552px'},
  top: {top: '123px', left: '535px'}
};
var internet = {
  left: {top: '202px', left: '205px'},
  top: {top: '163px', left: '260px'},
  bottom: {top: '238px', left: '257px'}
};
var router1 = {
	left: {top: '84px', left: '238px'},
	right: {top: '84px', left: '282px'},
	bottom: {top: '98px', left: '258px'}
};
var router2 = {
	left: {top: '84px', left: '415px'},
	right: {top: '84px', left: '460px'}
};
var router3 = {
	left: {top: '304px', left: '234px'},
	top: {top: '290px', left: '257px'}
};
var switch1 = {
	left: {top: '64px', left: '110px'},
	right: {top: '64px', left: '149px'},
  top: {top: '51px', left: '128px'}
};
var switch2 = {
  left: {top: '329px', left: '109px'},
  right: {top: '329px', left: '149px'},
  top: {top: '318px', left: '130px'},
  bottom: {top: '336px', left: '130px'}
};
var wireless = {
  left: {top: '345px', left: '228px'},
  left_bottom: {top: '354px', left: '228px'},
  right: {top: '346px', left: '268px'}
};
// Caminos
var sensor1_to_main = [
  sensor1,
  {top: '202px', left: '477px'},
  main.left
];
var sensor6_to_main = [
  sensor6,
  {top: '202px', left: '590px'},
  main.right
];
var main_to_router2 = [
  main.top,
  {top: '84px', left: '535px'},
  router2.right
];
var router1_to_switch1 = [
  router1.left,
  {top: '84px', left: '217px'},
  {top: '64px', left: '217px'},
  switch1.right
];
var switch1_to_server = [
  switch1.top,
  {top: '16px', left: '128px'},
  server
];
var switch1_to_sinac = [
  switch1.left,
  {top: '62px', left: '97px'},
  {top: '46px', left: '97px'},
  sinac
];
var internet_to_aws = [
  internet.left,
  {top: '188px', left: '189px'},
  aws
];
var router3_to_switch2 = [
  router3.left,
  {top: '304px', left: '130px'},
  switch2.top
];
var switch2_to_station = [
  switch2.left,
  {top: '329px', left: '93px'},
  {top: '345px', left: '93px'},
  station
];
var switch2_to_wireless = [
  switch2.right,
  {top: '329px', left: '167px'},
  {top: '345px', left: '167px'},
  wireless.left
];
var switch2_to_pc = [
  switch2.bottom,
  {top: '367px', left: '130px'},
  {top: '367px', left: '156px'},
  pc
];
// -----------------------------------
function new_coord(original, top, left) {
  return {
    top: (parseInt(original.top) + top) + 'px',
    left: (parseInt(original.left) + left) + 'px'
  };
}
function show_var1_initial(tl) {
  new Picture(tl, {top: '304px', left: '494px'}, 'resources/images/heat.png')
    .wait(500);
  new Message(tl, new_coord(sensor3, 0, 7), $('<i>', {class: 'fa fa-exclamation-triangle'}))
    .wait(1000)
    .destroy();
}
function show_var2_initial(tl) {
  new Picture(tl, {top: '363px', left: '521px'}, 'resources/images/humidity.png')
    .wait(500);
  new Message(tl, new_coord(sensor10, 0, 7), $('<i>', {class: 'fa fa-exclamation-triangle'}))
    .wait(1000)
    .destroy();
}
function show_var3_initial(tl) {
  new Picture(tl, {top: '205px', left: '402px'}, 'resources/images/fire.png')
    .wait(500);
  new Message(tl, new_coord(sensor2, 0, 7), $('<i>', {class: 'fa fa-exclamation-triangle'}))
    .wait(1000)
    .destroy();
}
function show_var4_initial(tl) {
  new Picture(tl, {top: '327px', left: '524px'}, 'resources/images/rain.png')
    .wait(500);
  new Message(tl, new_coord(sensor8, 0, 7), $('<i>', {class: 'fa fa-exclamation-triangle'}))
    .wait(1000)
    .destroy();
}
function show_var5_initial(tl) {
  new Picture(tl, {top: '370px', left: '490px'}, 'resources/images/wind.png')
    .wait(500);
  new Message(tl, new_coord(sensor5, 0, 7), $('<i>', {class: 'fa fa-exclamation-triangle'}))
    .wait(1000)
    .destroy();
}
function show_var6_initial(tl) {
  new Picture(tl, {top: '347px', left: '544px'}, 'resources/images/lightning.png')
    .wait(500);
  new Message(tl, new_coord(sensor9, 0, 7), $('<i>', {class: 'fa fa-exclamation-triangle'}))
    .wait(1000)
    .destroy();
}
function show_var7_initial(tl) {
  new Picture(tl, {top: '347px', left: '463px'}, 'resources/images/fire.png')
    .wait(500);
  new Message(tl, new_coord(sensor4, 0, 7), $('<i>', {class: 'fa fa-exclamation-triangle'}))
    .wait(1000)
    .destroy();
}
function from_var1_to_main(tl) {
  new Packet(tl, sensor3)
    .move(sensor2)
    .move(sensor1)
    .move(sensor1_to_main)
    .destroy();
}
function from_var2_to_main(tl) {
  new Packet(tl, sensor10)
    .move(sensor9)
    .move(sensor8)
    .move(sensor7)
    .move(sensor6)
    .move(sensor6_to_main)
    .destroy();
}
function from_var3_to_main(tl) {
  new Packet(tl, sensor2)
    .move(sensor1)
    .move(sensor1_to_main)
    .destroy();
}
function from_var4_to_main(tl) {
  new Packet(tl, sensor8)
    .move(sensor7)
    .move(sensor6)
    .move(sensor6_to_main)
    .destroy();
}
function from_var5_to_main(tl) {
  new Packet(tl, sensor5)
    .move(sensor4)
    .move(sensor3)
    .move(sensor2)
    .move(sensor1)
    .move(sensor1_to_main)
    .destroy();
}
function from_var6_to_main(tl) {
  new Packet(tl, sensor9)
    .move(sensor8)
    .move(sensor7)
    .move(sensor6)
    .move(sensor6_to_main)
    .destroy();
}
function from_var7_to_main(tl) {
  new Packet(tl, sensor4)
    .move(sensor3)
    .move(sensor2)
    .move(sensor1)
    .move(sensor1_to_main)
    .destroy();
}
function from_main_to_router(tl) {
  new Packet(tl, main.top)
    .move(main_to_router2)
    .destroy();
  new Packet(tl, router2.left)
    .move(router1.right)
    .destroy();
}
function from_router_to_server(tl, msj) {
  new Packet(tl, router1.left)
    .move(router1_to_switch1)
    .destroy();
  var time = new Packet(tl, switch1.top)
    .move(switch1_to_server)
    .destroy()
    .time;
  new Message(tl, server, msj, time, false)
    .wait(2000)
    .destroy()
    .wait(500);
}
function from_router_to_server_var3(tl) {
  new Packet(tl, router1.left)
    .move(router1_to_switch1)
    .destroy();
  var time = new Packet(tl, switch1.top)
    .move(switch1_to_server)
    .destroy()
    .time;
  var msj1 = new Message(tl, server, "¿Dónde está el fuego?", time, false)
    .wait(500);
  time = msj1.time;
  msj1.wait(4000)
    .destroy()
    .wait(500);
  new Picture(tl, {top: '162px', left: '398px'}, 'resources/images/arrow.png', time)
    .wait(3000)
    .destroy();
  new Message(tl, {top: '170px', left: '436px'}, "Se sabe porque los sensores tienen ubicación fija", time)
    .wait(3000)
    .destroy();
}
function from_server_to_everyone(tl) {
  var time = new Packet(tl, server)
    .move(switch1_to_server.slice().reverse())
    .destroy()
    .time;
  var time_sinac = new Packet(tl, switch1.left, time)
    .move(switch1_to_sinac)
    .destroy()
    .time;
  new Message(tl, sinac, "Recibido!", time_sinac)
    .wait(1000)
    .destroy();
  time = new Packet(tl, switch1.right, time)
    .move(router1_to_switch1.slice().reverse())
    .destroy()
    .time;
  time = new Packet(tl, router1.bottom, time)
    .move(internet.top)
    .destroy()
    .time;
  var time_aws = new Packet(tl, internet.left, time)
    .move(internet_to_aws)
    .destroy()
    .time;
  new Message(tl, aws, "Entendido y guardado!", time_aws)
    .wait(1000)
    .destroy();
  time = new Packet(tl, internet.bottom, time)
    .move(router3.top)
    .destroy()
    .time;
  time = new Packet(tl, router3.left, time)
    .move(router3_to_switch2)
    .destroy()
    .time;
  var time_station = new Packet(tl, switch2.left, time)
    .move(switch2_to_station)
    .destroy()
    .time;
  new Message(tl, station, "Recibido!", time_station)
    .wait(1000)
    .destroy();
  var time_pc = new Packet(tl, switch2.bottom, time)
    .move(switch2_to_pc)
    .destroy()
    .time;
  new Message(tl, pc, "Recibido!", time_pc)
    .wait(1000)
    .destroy();
  time = new Packet(tl, switch2.right, time)
    .move(switch2_to_wireless)
    .destroy()
    .time;
  var time_cellphone = new Packet(tl, wireless.left_bottom, time)
    .move(cellphone)
    .destroy()
    .time;
  new Message(tl, cellphone, "Recibido!", time_cellphone)
    .wait(1000)
    .destroy();
  var time_tablet = new Packet(tl, wireless.right, time)
    .move(tablet)
    .destroy()
    .time;
  new Message(tl, tablet, "Recibido!", time_tablet)
    .wait(1000)
    .destroy();
}
