Synth instanceof AudioSynth; // true

var testInstance = new AudioSynth;
testInstance instanceof AudioSynth; // true

testInstance === Synth; // true

var piano = Synth.createInstrument('piano');


$(".key").click(function() { 
    var note = this.innerText;
    var octave = $(this).hasClass("4") ? 4 : 5;
    console.log(note)
    piano.play(note, octave, 2); 
})