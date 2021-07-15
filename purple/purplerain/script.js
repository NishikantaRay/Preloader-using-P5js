var makeItRain = function() {
  //clear out everything
  $('.rain').empty();

  var increment = 0;
  var drops = "";
  var backDrops = "";

  while (increment < 100) {
    //couple random numbers to use for various randomizations
    //random number between 98 and 1
    var randoHundo = (Math.floor(Math.random() * (98 - 1 + 1) + 1));
    //random number between 5 and 2
    var randoFiver = (Math.floor(Math.random() * (5 - 2 + 1) + 2));
    //increment
    increment += randoFiver;
    //add in a new raindrop with various randomizations to certain CSS properties
    drops += '<div class="drop" style="left: ' + increment + '%; bottom: ' + (randoFiver + randoFiver - 1 + 100) + '%; animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"><div class="stem" style="animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"></div><div class="splat" style="animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"></div></div>';
    backDrops += '<div class="drop" style="right: ' + increment + '%; bottom: ' + (randoFiver + randoFiver - 1 + 100) + '%; animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"><div class="stem" style="animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"></div><div class="splat" style="animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"></div></div>';
  }

  $('.rain.front-row').append(drops);
  $('.rain.back-row').append(backDrops);
}

$('.splat-toggle.toggle').on('click', function() {
  $('body').toggleClass('splat-toggle');
  $('.splat-toggle.toggle').toggleClass('active');
  makeItRain();
});

$('.back-row-toggle.toggle').on('click', function() {
  $('body').toggleClass('back-row-toggle');
  $('.back-row-toggle.toggle').toggleClass('active');
  makeItRain();
});

$('.single-toggle.toggle').on('click', function() {
  $('body').toggleClass('single-toggle');
  $('.single-toggle.toggle').toggleClass('active');
  makeItRain();
});

makeItRain();


const tl = new TimelineMax({
  repeat: -1,
  repeatDelay: 2 });


const svg = document.querySelector('svg');

const scene1 = {
  wrapper: svg.querySelector('.scene1'),
  mask: svg.querySelector('.scene1 .mask'),
  ground: svg.querySelector('.scene1 .ground'),
  sky1: svg.querySelector('.scene1 .sky1'),
  sky2: svg.querySelector('.scene1 .sky2'),
  sky3: svg.querySelector('.scene1 .sky3'),
  tree1: svg.querySelector('.scene1 .tree1'),
  tree2: svg.querySelector('.scene1 .tree2'),
  tree3: svg.querySelector('.scene1 .tree3'),
  tree4: svg.querySelector('.scene1 .tree4'),
  tree5: svg.querySelector('.scene1 .tree5'),
  tree6: svg.querySelector('.scene1 .tree6'),
  tree7: svg.querySelector('.scene1 .tree7'),
  mountain: svg.querySelector('.scene1 .mountain'),
  mountain1: svg.querySelector('.scene1 .mountain-left'),
  mountain2: svg.querySelector('.scene1 .mountain-right') };


tl.from(scene1.mask, 1, {
  attr: {
    r: 0 },

  ease: Elastic.easeOut.config(3, 1) });


tl.from(scene1.ground, 0.5, {
  autoAlpha: 0,
  attr: {
    y: '+=200' },

  transformOrigin: 'left center',
  ease: Power4.easeOut },
0.1);

tl.staggerFrom([scene1.sky1, scene1.sky2, scene1.sky3], 0.5, {
  autoAlpha: 0,
  skewY: 0,
  attr: {
    y: '+=90' },

  transformOrigin: 'center bottom',
  ease: Elastic.easeOut.config(1, 3) },
0.075, 0.25);

tl.staggerFrom([scene1.tree1, scene1.tree2, scene1.tree3, scene1.tree4, scene1.tree5, scene1.tree6, scene1.tree7], 0.5, {
  rotation: 45,
  scale: 0,
  transformOrigin: 'bottom center',
  ease: Back.easeOut.config(2, 1.55) },
0.05, 0.4);

tl.staggerFrom([scene1.mountain], 0.75, {
  y: '+=50',
  skewX: -200,
  scale: 0,
  transformOrigin: 'bottom center',
  ease: Back.easeOut.config(1, .2) },
0.0125, 0.5);

tl.to(scene1.mask, 1, {
  attr: {
    r: 0 },

  transformOrigin: 'center center',
  ease: Back.easeIn.config(2, 1.55) },
'+=3');