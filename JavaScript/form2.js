'use strict';
  
  var head = document.head,
      link = document.createElement('link');
  link.rel = 'stylesheet';
  
  if (localStorage.getItem('themeStyle') === 'dark') {
    link.href = "css/dark.css"; 
    document.getElementById('switch-1').setAttribute('checked', true); 
  }

  else {
    link.href = "css/light.css"; 
  }
  head.appendChild(link); 

 
  document.getElementById('switch-1').addEventListener('change', ev => {
    let btn = ev.target;
    alert("event has happened");
    
    if (btn.checked) {
      link.href = "css/dark.css"; 
    }
    else {
      link.href = "css/light.css"; 
    }
  });

function lb5(){
    if(CheckFName() && CheckNumber && CheckLName())
    {
        alert("Дякуємо за повідомлення");
    }}
function AuditText(value){
    var re=/^[а-яА-Я]+$/; /*перевірка на наявність букв*/
    if (value.match(re))
    {
        return true;
    }
    else
    {
        return false;
    }}
function AuditNumber(value){
    return !isNaN(value); /*перевіряє на число*/
}
function CheckFName()
{
    let fnameValue = document.forms["form"]["fname"].value; 
    if(!AuditText(fnameValue)) /*перевіряєм на наявність букв*/
    {
        alert("Ім'я повинно вводитись буквами"); 
        return false;
    }
    return true;
}
function CheckLName()
{
    let fnameValue = document.forms["form"]["lname"].value; 
    if(!AuditText(fnameValue)) /*перевіряєм на наявність букв*/
    {
        alert("Прізвище повинно вводитись буквами"); 
        return false;
    }
    return true;
}
function CheckNumber(){
    let numberValue = document.forms["form"]["tel"].value;
    if(!AuditNumber(numberValue)){
        alert("Неправильний номер"); /*Перевіряєм на наявність цифр*/
        return false;
    }
    return true;}
function lb5(){
    if(CheckName() && CheckNumber())
    {
        alert("Стіл заброньовано");
    }} 
var el = document.getElementById("logo");
el.onmouseenter = function() {
	this.style.width = '200px';
}
el.onmouseleave = function() {
	this.style.width = null;
}
function buttonClick(button)
{
    alert("Переглядайте більше");
}
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("myBtn").style.display = "block";
  } else {
    document.getElementById("myBtn").style.display = "none";
  }
}


function topFunction() {
  document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0; 
}



