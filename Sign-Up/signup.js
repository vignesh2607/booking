document.getElementById().addEventListener("oninput",num_validation());
function num_validation(){
    let number =document.getElementById("num").value
    if((number.length==10)&&((number[0]>=6)&&(number[0]<=9)))
    {
        document.getElementById("error").innerHTML="*valid number";
    }
    else
    {
        document.getElementById("error").innerHTML="*Invalid number";
    }
}

function password(){
    let p1=document.getElementById("pass").value;
    if ((p1.length>=16) && (p1.length<=32))
    {
        let upper=0;
        let lower=0;
        let num=0;
        let special=0;
    }
    for (i=0;i<p1.length;i++)
    {
        if((p1[i]>='A') && (p1[i]<='Z'))
        {
            upper++;
        }
        else if ((p1[i]>='a') && (p1[i]<='z'))
        {
            lower++;
        }
        else if ((p1[i]>='0') && (p1[i]<='9'))
        {
            num++;
        }  
        else
        {
            special++;
        }
    }
    if ((upper>=1) && (lower>=1) && (num>=1) && (special>=1) )
    {
        alert("strong password");
    }
    else
    {
        alert("weak password");
    }
}


function validateemail()  
{  
var x=document.myform.email.value;  
var atposition=x.indexOf("@");  
var dotposition=x.lastIndexOf(".");  
if (atposition<1 || dotposition<atposition+2 || dotposition+2>=x.length){  
alert("Please enter a valid e-mail address \n atpostion:"+atposition+"\n dotposition:"+dotposition);  
return false;  
}  
}  