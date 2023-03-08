var button;

let synth = new Tone.DuoSynth().toDestination();

function setup() {
  createCanvas(400, 400);
  colorMode(HSB);

  button = createImg('hey cutie.jpg');
  button.position(0, 0);
  button.mousePressed(toggleSound);
  button.size(400,400);
}

function draw() {
  background(220);
}

function toggleSound() {
  var seq = new Tone.Sequence(function (time, note) {
    synth.triggerAttackRelease(note, .12, time);
  }, [["D3", "D3"], "D4", "A3", [null, "G#3"], [null, "G3"], [null, "F3"], [null, "D3"],["F3", "G3"],
  ["C3", "C3"], "D4", "A3", [null, "G#3"], [null, "G3"], [null, "F3"], [null, "D3"],["F3", "G3"],
  ["B2", "B2"], "D4", "A3", [null, "G#3"], [null, "G3"], [null, "F3"], [null, "D3"],["F3", "G3"],
  ["A#2", "A#2"], "D4", "A3", [null, "G#3"], [null, "G3"], [null, "F3"], [null, "D3"],["F3", "G3"],
  ]);

  if (Tone.Transport.state == "started") {
    seq.stop();
    Tone.Transport.stop();
    Tone.Transport.cancel(0);
  } else {
    Tone.start();
    seq.start(0);
    Tone.Transport.start();
  }
}