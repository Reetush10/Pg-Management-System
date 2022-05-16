const email= document.getElementById('email')
const password = document.getElementById('password')
const firs = document.getElementById('First-name')


function login()
{
    if(email.value=="" && password.value==""){
        alert("Please fill out credentials")
    }
    alert("Login Successful!!");
}
function register()
{
    if(firs.value==""){
    alert("Please fill out credentials")
    }
    else
    alert("Registration Successful!!")
}
function img1(){
    const newImage = document.getElementById('selectA').value;
    document.getElementById('poll').innerHTML = x;
}

/* const Pg =[
    Name: Pragati Pg
    Address: Malleshwaram bangalore
    State:Karnataka
    City: Bagalore
    Phone No: 6543278654


]*/