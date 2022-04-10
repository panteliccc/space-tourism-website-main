const open = document.querySelector(".ham");
const close = document.querySelector(".close");
let menu = document.querySelector(".menu");
const html = document.querySelector("html");

open.addEventListener("click",function(){
    menu.classList.add("active");
    html.style.overflow = "hidden";

});
close.addEventListener("click",function(){
    menu.classList.remove("active");
    html.style.overflow = "auto";
});

$('.row .sel ul li').click(function(){
    $('.row').removeClass('active');
    $('.tab_content'+$(this).attr('id')).addClass('active');
});
$('.row .sel .row3 div').click(function(){
    $('.row').removeClass('active');
    $('.tab_content'+$(this).attr('id')).addClass('active');
});