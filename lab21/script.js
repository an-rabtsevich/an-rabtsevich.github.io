function check()
{
    var result = " из 10" ;
    var res = "Правильных ответов: ";
    var resCount;

    var q1=document.myform.q1.value;
    var q2=document.myform.q2.value;
    var q3=document.myform.q3.value;
    var q4=document.myform.q4.value;
    var q5=document.myform.q5.value;
    var q6=document.myform.q6.value;
    var q7=document.myform.q7.value;
    var q8=document.myform.q8.value;
    var q9=document.myform.q9.value;
    var q10=document.myform.q10.value;

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
             if(q6=="true"){
                count=count+1;
            }
             if(q7=="true"){
                count=count+1;
            }
             if(q8=="true"){
                count=count+1;
            }
             if(q9=="true"){
                count=count+1;
            }
             if(q10=="true"){
                count=count+1;
            }
                
                resCount = count + result;
                document.getElementById("res").innerHTML = res;
                document.getElementById("count").innerHTML = resCount;
                document.getElementById("result").style.display = 'block';

                if(count>=9)
                {
                    document.getElementById("img9-10").style.display = 'flex';
                }
                if(count>=6 && count<=8)
                {
                    document.getElementById("img6-8").style.display = 'flex';
                }
                if(count>=3 && count<=5)
                {
                    document.getElementById("img3-5").style.display = 'flex';
                }
                if(count>=0 && count<=2)
                {
                    document.getElementById("img0-2").style.display = 'block';
                }
                

}