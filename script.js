var tablinks = document.getElementsByClassName("tab-links");

var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
    for (tab of tablinks) {
        tab.classList.remove("active-link");
    }
    for (tab of tabcontents) {
        tab.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab")
}

var sidemenu = document.getElementById('sidemenu');

function openmenu() {
    sidemenu.style.right = "0";
}
function closemenu() {
    sidemenu.style.right = "-200px";
}

const scriptURL = 'https://script.google.com/macros/s/AKfycbwmkFse5-1vuZTNmAErAzII-yLWi9d61KmROKcpl5nuF2jsrNY5F5R15aUmRa0Q4APGEQ/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg");

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            msg.innerHTML = "Sent."
            setTimeout(function () {
                msg.innerHTML = "";
            }, 2000)
            form.reset()
        })
        .catch(error => console.error('Error!', error.message))
})