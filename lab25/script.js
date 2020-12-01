var word;
var WD = "Web-design is";
function b1()
{
    document.getElementById("b1").style.display = 'inline';
    document.getElementById("b2").style.display = 'none';
    document.getElementById("b3").style.display = 'none';
    document.getElementById("b4").style.display = 'none';
    document.getElementById("b5").style.display = 'none';
    word = " wonderful";
    word.style.color = 'rgb(19, 19, 109)';
}

function b2()
{
    document.getElementById("b1").style.display = 'none';
    document.getElementById("b2").style.display = 'inline';
    document.getElementById("b3").style.display = 'none';
    document.getElementById("b4").style.display = 'none';
    document.getElementById("b5").style.display = 'none';
    word = " miraculous";
}

function b3()
{
    document.getElementById("b1").style.display = 'none';
    document.getElementById("b2").style.display = 'none';
    document.getElementById("b3").style.display = 'inline';
    document.getElementById("b4").style.display = 'none';
    document.getElementById("b5").style.display = 'none';
    word = " unique";
}

function b4()
{
    document.getElementById("b1").style.display = 'none';
    document.getElementById("b2").style.display = 'none';
    document.getElementById("b3").style.display = 'none';
    document.getElementById("b4").style.display = 'inline';
    document.getElementById("b5").style.display = 'none';
    word = " distinctive";
}

function b5()
{
    document.getElementById("b1").style.display = 'none';
    document.getElementById("b2").style.display = 'none';
    document.getElementById("b3").style.display = 'none';
    document.getElementById("b4").style.display = 'none';
    document.getElementById("b5").style.display = 'inline';
    word = " fancy";
}

function end()
{
    var newWord = WD + word;
    document.getElementById("string").innerHTML = newWord;
    document.getElementById("divString").style.display = 'inline';
    document.getElementById("all").style.display = 'none';
}