Synth instanceof AudioSynth; // true

var testInstance = new AudioSynth;
testInstance instanceof AudioSynth; // true

testInstance === Synth; // true

var piano = Synth.createInstrument('piano');


$(".key").click(function() { 
    var note = this.innerText;
    console.log(note)
    piano.play(note, 4, 2); 
})