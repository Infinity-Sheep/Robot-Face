var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":[],"propsByKey":{}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

background('rosybrown');

//variables assigned
var eyeColor = rgb(randomNumber(0,255),randomNumber(0,255),randomNumber(0,255));
var eyeSize = randomNumber(2,75);
var hairColor = rgb(randomNumber(0,255),randomNumber(0,255),randomNumber(0,255));
var hairLength = randomNumber(10,75);
var lipColor = rgb(randomNumber(0,255),randomNumber(0,255),randomNumber(0,255));
var chinHairColor = rgb(randomNumber(0,255),randomNumber(0,255),randomNumber(0,255));
var eyebrowColor = rgb(randomNumber(0,255),randomNumber(0,255),randomNumber(0,255));
var eyebrowSize = randomNumber(2,50);
var faceColor = rgb(randomNumber(0,255),randomNumber(0,255),randomNumber(0,255));

//Face
fill(faceColor);
ellipse(200,200,300,300);

//Hair:
noStroke();
fill(hairColor);
arc(290,78,2,hairLength,0,270);
arc(285,76,2,hairLength,0,270);
arc(280,74,2,hairLength,0,270);
arc(275,72,2,hairLength,0,270);
arc(270,70,2,hairLength,0,270);
arc(265,68,2,hairLength,0,270);
arc(260,66,2,hairLength,0,270);
arc(255,64,2,hairLength,0,270);
arc(250,62,2,hairLength,0,270);
arc(245,60,2,hairLength,0,270);
arc(240,58,2,hairLength,0,270);
arc(235,56,2,hairLength,0,270);
arc(230,54,2,hairLength,0,270);
arc(225,52,2,hairLength,0,270);
arc(220,50,2,hairLength,0,270);
arc(215,48,2,hairLength,0,270);
arc(210,48,2,hairLength,0,270);
arc(205,48,2,hairLength,0,270);
arc(200,48,2,hairLength,0,270);
arc(195,48,2,hairLength,0,270);
arc(190,48,2,hairLength,0,270);
arc(185,48,2,hairLength,0,270);
arc(180,48,2,hairLength,0,270);
arc(175,48,2,hairLength,0,270);
arc(170,50,2,hairLength,0,270);
arc(165,52,2,hairLength,0,270);
arc(160,54,2,hairLength,0,270);
arc(155,56,2,hairLength,0,270);
arc(150,58,2,hairLength,0,270);
arc(145,60,2,hairLength,0,270);
arc(140,62,2,hairLength,0,270);
arc(135,64,2,hairLength,0,270);
arc(130,66,2,hairLength,0,270);
arc(125,68,2,hairLength,0,270);

//Lips
fill(lipColor);
ellipse(193,251,50,20);

//Eyes
fill(eyeColor);
rect(123,125,eyeSize, eyeSize + 50);
rect(268,125,eyeSize, eyeSize + 50);

//pupils
fill('black');
rect(150,150,eyeSize -50, eyeSize -25);
rect(280,150,eyeSize -50, eyeSize -25);

//Eyebrows
fill(eyebrowColor);
rect(123,90,eyebrowSize, eyebrowSize -10);
rect(268,90,eyebrowSize, eyebrowSize -10);

//Chinhair
fill(chinHairColor);
shape(191,368,118,325,286,325);
// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
