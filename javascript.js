function validationform(){
    var fname=document.validate.fname.value;
    var lname=document.validate.lname.value;
    var city=document.validate.city.value;
    var phno=document.validate.phno.value;
    var address=document.validate.address.value;
    if(fname==null || fname==""){
           alert("Enter your Firstname");
           return false;
}
else if(lname==null || lname==""){
    alert("Enter your Lastname");
    return false;
}
else if(city==null || city==""){
    alert("Enter your City");
    return false;
}
else if(phno.length<10 || phno.length>10){
    alert("Check your Phone Number");
    return false;
}
else if(address==null || address==""){
    alert("Enter your Address");
    return false;
}
}
