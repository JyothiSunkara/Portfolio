const tablinks = document.getElementsByClassName("tab-links");
const tabcontents = document.getElementsByClassName("tab-contents");

for(let i = 0; i < tablinks.length; i++)
    tablinks[i].addEventListener("click",function () {
   
    for(let tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(let tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    this.classList.add("active-link");
    tabcontents[i].classList.add("active-tab");

});

const bars = document.getElementById("bars");
const xmark = document.getElementById("xmark");
const menu = document.getElementById("menu");

bars.addEventListener("click" , function(){
    menu.style.right = "0";
});
xmark.addEventListener("click" , function(){
    menu.style.right = "-150px";
});

const scriptURL = 'https://script.google.com/macros/s/AKfycbzOdvF-T3NUeHHwoBSZFIXWa1e9UxAk2YqvTWZ9s1dH6D5f9V2yeI8j708loP1A0zhF6Q/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")      
form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form),mode: 'no-cors'})
        .then(response => {
             msg.innerHTML = "Message sent successfully"
             setTimeout(function(){
                msg.innerHTML = ""
             },5000)
             form.reset()
        })
        .catch(error => console.error('Error!', error.message))
    })