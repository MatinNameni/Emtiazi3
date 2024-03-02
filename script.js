let n_bold = 0;
let n_italic = 0;

function Bold(){
    var txtbox = document.getElementById("textbox");
    if (n_bold%2 == 0){
        txtbox.style.fontWeight = "bold";
        n_bold += 1;
    }
    else{
        txtbox.style.fontWeight = "normal";
        n_bold += 1;
    }
}

function Italic(){
    var txtbox = document.getElementById("textbox");
    if (n_italic%2 == 0){
        txtbox.style.fontStyle = "italic";
        n_italic += 1;
    }
    else{
        txtbox.style.fontStyle = "normal";
        n_italic += 1;
    }
}

function Left_to_Right(){
    var txtbox = document.getElementById("textbox");
    txtbox.style.textAlign = 'left';
}

function Center(){
    var txtbox = document.getElementById("textbox");
    txtbox.style.textAlign = 'center';
}

function Right_to_Left(){
    var txtbox = document.getElementById("textbox");
    txtbox.style.textAlign = 'right';
}

function UpperCase(){
    var txtbox = document.getElementById("textbox");
    txtbox.style.textTransform = 'uppercase';
}

function LowerCase(){
    var txtbox = document.getElementById("textbox");
    txtbox.style.textTransform = 'lowercase';
}

function Capitalize(){
    var txtbox = document.getElementById("textbox");
    txtbox.style.textTransform = 'capitalize';
}

function Clear(){
    var txtbox = document.getElementById("textbox");
    txtbox.value = "";
}