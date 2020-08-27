Synth instanceof AudioSynth; // true

var testInstance = new AudioSynth;
testInstance instanceof AudioSynth; // true

testInstance === Synth; // true


$(".key").click(function() { 
    var forms = $(".form");
    var piano;
    var inst = "piano";
    for(let i = 0; i < forms.length; i++) {
        //console.log(forms[i].innerText)
        if($(forms[i]).hasClass("full-opacity")) {
            piano = Synth.createInstrument((forms[i].innerText).toLowerCase());
            inst = (forms[i].innerText).toLowerCase();
            break;
        }
    }

    console.log(inst);
    var note = this.innerText;
    var octave = $(this).hasClass("4") ? 4 : 5;
    //console.log(note)
    var duration = 2;
    if(inst == "organ" || inst == "edm")
        duration = 1;
    piano.play(note, octave, duration); 
})

function isValid(note) {
    switch(note) {
        case 'A' : return true;
        case 'B' : return true;
        case 'C' : return true;
        case 'D' : return true;
        case 'E' : return true;
        case 'F' : return true;
        case 'G' : return true;
        default : return false;
    }
}

$("body").keydown(function(e) {
    var note = String.fromCharCode((e.which));
    console.log(note);

    var forms = $(".form");
    var piano;
    var inst = "piano";
    for(let i = 0; i < forms.length; i++) {
        //console.log(forms[i].innerText)
        if($(forms[i]).hasClass("full-opacity")) {
            piano = Synth.createInstrument((forms[i].innerText).toLowerCase());
            inst = (forms[i].innerText).toLowerCase();
            break;
        }
    }
    var duration = 2;
    if(inst == "organ" || inst == "edm")
        duration = 1;
    if(!isValid(note)) {
        note = String.fromCharCode((65 + e.which % 7));;
    }
    piano.play(note, 4, duration); 
})

$(".form").click(function() {
    //console.log(this);
    var forms = $(".form");
    //console.log(forms);
    for(let i = 0; i < forms.length; i++) {
        //console.log(forms[i])
        $(forms[i]).removeClass("full-opacity");
        $(forms[i]).addClass("half-opacity");
    }
    $(this).removeClass("half-opacity");
    $(this).addClass("full-opacity");
}) 