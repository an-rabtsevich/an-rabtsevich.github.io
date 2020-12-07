var imgs = new Array("./img/i1.jpg", "./img/i2.jpg", "./img/i3.jpg", "./img/i4.jfif", "./img/i5.jpg", "./img/i6.jfif", "./img/i7.jpg");
var i = 1;

setInterval(function imgSrc ()
{ 
    document.getElementById("image").src = imgs[i];
        i++;
        if (i == 7) 
        {
            i = 0;
        }
}, 6000);

///////////////////////////////////

function check()
{
    var result = " из 5" ;
    var res = "Правильных ответов: ";
    var resCount;

    var q1=document.myform.q1.value;
    var q2=document.myform.q2.value;
    var q3=document.myform.q3.value;
    var q4=document.myform.q4.value;
    var q5=document.myform.q5.value;

    var count=0;
            
            if(q1=="true"){
                count=count+1;
            }
             if(q2=="true"){
                count=count+1;
            }
             if(q3=="true"){
                count=count+1;
            }
             if(q4=="true"){
                count=count+1;
            }
             if(q5=="true"){
                count=count+1;
            }
                
                resCount = count + result;
                document.getElementById("res").innerHTML = res;
                document.getElementById("count").innerHTML = resCount;
                document.getElementById("result").style.display = 'block';
}