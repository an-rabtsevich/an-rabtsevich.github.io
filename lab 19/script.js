function doit()
{
    var firstEl = document.getElementById("firstEl").value;
    var secondEl = document.getElementById("secondEl").value;
    var thirdEl = document.getElementById("thirdEl").value;
    console.log(firstEl);
    var text1 = firstEl + " - very beautiful country";
    var text2 = secondEl + " - country of modest, intelligent beauty";
    var text3 = thirdEl + " - a great opportunity to relax with the whole family";

    document.getElementById("result1").innerHTML = text1;
    document.getElementById("result2").innerHTML = text2;
    document.getElementById("result3").innerHTML = text3;

    var text = document.getElementById("text").value;
    var replaceText = text.replace("man", "person");
    document.getElementById("repText").innerHTML = replaceText;
}
