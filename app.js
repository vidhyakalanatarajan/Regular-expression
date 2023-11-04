function validate()
{
    var Name=document.getElementById("uname").value;
    var text=new RegExp(/^[A-Za-z]{3,20}$/);
    if(text.test(Name))
    {
        document.getElementById("uname1").innerText="valid";
    }
    else{
        document.getElementById("uname1").innerText="must only have characters";
    }
    var mail=document.getElementById("email").value;
    var mailv=new RegExp(/^[A-Za-z0-9]{5,20}[@][a-z]{5}[./][a-z]{3}$/);
    if(mailv.test(mail)){
        document.getElementById("mail1").innerText="valid";
    }
    else{
        document.getElementById("mail1").innerText="enter valid mail id";
    }
    var mobid=document.getElementById("mob").value;
    var mobile=new RegExp(/^[0-9]{10}$/);
    if(mobile.test(mobid)){
        document.getElementById("mob11").innerText="valid";
    }
    else{
        document.getElementById("mob11").innerText="enter valid mobile number";
    }
    var passwd=document.getElementById("pass").value;
    var pawd=new RegExp(/^[0-9]{4,6}$/);
    if(pawd.test(passwd)){
        document.getElementById("pass1").innerText="valid";
    }
    else{
        document.getElementById("pass1").innerText="enter valid password";
    }
    var recity=document.getElementById("city").value;
    var city1=new RegExp(/^[A-Za-z]{3,20}$/);
    if(city1.test(recity)){
        document.getElementById("city1").innerText="valid";
    }
    else{
        document.getElementById("city1").innerText="enter the city correctly";
    }
    var pincode=document.getElementById("pin").value;
    var pinc=new RegExp(/^[0-9]{6}$/);
    if(pinc.test(pincode)){
        document.getElementById("pin1").innerText="valid";
    }
    else{
        document.getElementById("pin1").innerText="enter a valid pincode";
    }
    var referal=document.getElementById("code").value;
    var referalco=new RegExp(/^[0-9]{5,10}$/);
    if(referalco.test(referal)){
        document.getElementById("code1").innerText="valid";
    }
    else{ 
        document.getElementById("code1").innerText="enter a valid pincode";  
    }
    document.getElementById("btn").className=display1;
}
