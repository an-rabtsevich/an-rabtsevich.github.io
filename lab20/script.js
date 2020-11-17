var counter = 0;
function doit()
{
    var text1 = "body";
    var text2 = "once";
    var text3 = "told me";
    var text4 = "the world";
    var text5 = "is gonna roll me";
    

    if(counter == -1)
    {
        document.getElementById("text").innerHTML = "Some...";
    }
    if(counter == 0)
    {
        document.getElementById("text").innerHTML = text1;
    }
    if(counter == 1)
    {
        document.getElementById("text").innerHTML = text2;
    }
    if(counter == 2)
    {
        document.getElementById("text").innerHTML = text3;
    }
    if(counter == 3)
    {
        document.getElementById("text").innerHTML = text4;
    }
    if(counter == 4)
    {
        document.getElementById("text").innerHTML = text5;
        counter = -2;
    }

    counter++;
}

function doit2()
{
    var text1 = "Never gonna let you down";
    var text2 = "Never gonna run around and desert you";
    var text3 = "Never gonna make you cry";
    var text4 = "Never gonna say goodbye";
    var text5 = "Never gonna tell a lie and hurt you";
    

    if(counter == -1)
    {
        document.getElementById("text2").innerHTML = "Never gonna give you up";
    }
    if(counter == 0)
    {
        document.getElementById("text2").innerHTML = text1;
    }
    if(counter == 1)
    {
        document.getElementById("text2").innerHTML = text2;
    }
    if(counter == 2)
    {
        document.getElementById("text2").innerHTML = text3;
    }
    if(counter == 3)
    {
        document.getElementById("text2").innerHTML = text4;
    }
    if(counter == 4)
    {
        document.getElementById("text2").innerHTML = text5;
        counter = -2;
    }

    counter++;
}

function doit3()
{
    var text1 = "I just can't pick up the phone again";
    var text2 = "This time, I'll be on my own, my friend";
    var text3 = "One more time, I'm all alone again";
    

    if(counter == -1)
    {
        document.getElementById("text3").innerHTML = "Lovin' you is like a fairytale";
    }
    if(counter == 0)
    {
        document.getElementById("text3").innerHTML = text1;
    }
    if(counter == 1)
    {
        document.getElementById("text3").innerHTML = text2;
    }
    if(counter == 2)
    {
        document.getElementById("text3").innerHTML = text3;
        counter = -2;
    }

    counter++;
}
