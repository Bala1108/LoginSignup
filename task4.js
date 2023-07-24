var username=document.getElementById("username")
username.addEventListener("focusout",function(){
    var username1=document.getElementById("username").value

    var display1=document.getElementById("span1")
    if(username1.length<=10 && username1!=""){
        display1.style.visibility="visible"
        display1.textContent="valid user name"
        display1.style.color="green"
        display1.style.fontSize="12px"
    }
    else{
        display1.style.visibility="visible"
        display1.textContent="please enter valid range"
        display1.style.color="red"
        display1.style.fontSize="12px"

    }
})

var password=document.getElementById("password")
password.addEventListener("focusout",function(){
    var password1=document.getElementById("password").value
    var display2=document.getElementById("span3")
    if(password.length==8){
        display2.style.visibility="visible"
        display2.textContent="password is valid"
        display2.style.color="green"
        display2.style.fontSize="12px"

    }
    else{
        display2.style.visibility="visible"
        display2.textContent="please enter valid range"
        display2.style.color="red"
        display2.style.fontSize="12px"
    }
})

var cnfpass=document.getElementById("confirmpassword")

var pass=document.getElementById("password")
cnfpass.addEventListener("focusout",function(){
    var cnfpass1=document.getElementById("confirmpassword").value
    var display3=document.getElementById("span3")
    var  pass1=document.getElementById("password").value
    if(pass1==cnfpass1){
        display3.style.visibility="visible"
        display3.textContent="password is matched"
        display3.style.color="green"
        display3.style.fontSize="12px"

    }
    else{
        display3.style.visibility="visible"
        display3.textContent="password is not matched"
        display3.style.color="red"
        display3.style.fontSize="12px"
    }
})

