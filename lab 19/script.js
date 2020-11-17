function doit(form)
{
    var result;

    var firstEl = document.getElementById("firstEl").value;
    var secondEl = document.getElementById("secondEl").value;
    var thirdEl = document.getElementById("thirdEl").value;

    var text = document.getElementById("text").value;
    var replaceText = text.replace("man", "person");
    //document.getElementById("result").innerHTML = result;
    //result = document.getElementById("text").value;
    //document.getElementById("text").innerHTML = result;
    //result.innerHTML = replaceText.innerHTML;
    
    var arr = [firstEl, secondEl, thirdEl];
    document.write("Our array: " + "<br/>");
    for(var i = 0; i < 3; i++)
    {
        if(i == 2)
        {
            arr[i] = "Norway";
        }

        document.write(arr[i] + "<br/>");
    }
    
    arr.push(firstEl, thirdEl);
    var length = 0;
    document.write("<br/>Our NEW array: " + "<br/>");
    for(var i = 0; i < 5; i++)
    {
        document.write(arr[i] + "<br/>");
        length++;
    }
    document.write("<br/>Length of the array: " + length + "<br/>");
    document.write("<br>Replace sentence: " + replaceText); 
}
