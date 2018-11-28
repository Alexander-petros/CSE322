var theme = document.getElementById('selectTheme');
storage = window.localStorage;
var themeColor = storage.getItem('storedTheme');
theme.onchange = function(){
    var select = theme.selectedIndex;
    if (theme[select].text == 'Dark') {
        darkTheme();
    }
    else if (theme[select].text == 'Blue'){
        blueTheme();
    }
    else if (theme[select].text == 'Red'){
        redTheme();
    }
    else {
        lightTheme();
    }
}
function darkTheme(){ 
    let items = document.querySelectorAll("body");
    items.forEach(function(change) {
        change.style.color = "white";
        change.style.backgroundColor = "black";
    });
    let navChange = document.querySelectorAll("nav");
    navChange.forEach(function(nav){
        nav.style.backgroundColor = "grey";
        nav.style.border = "none";
    });
    themeColor = 'dark';
    storage.setItem('storedTheme', themeColor);
}
function lightTheme(){
    let items = document.querySelectorAll("body");
    items.forEach(function(change) {
        change.style.color = "black";
        change.style.backgroundColor = "white";
    });
    let navChange = document.querySelectorAll("nav");
    navChange.forEach(function(nav){
        nav.style.backgroundColor = "#F0F0F0";
        nav.style.border = "1px solid #ccc";
    });
    themeColor = 'light';
    storage.setItem('storedTheme', themeColor);
}
function blueTheme(){
    let items = document.querySelectorAll("body");
    items.forEach(function(change) {
        change.style.color = "darkblue";
        change.style.backgroundColor = "lightblue";
    });
    let navChange = document.querySelectorAll("nav");
    navChange.forEach(function(nav){
        nav.style.backgroundColor = "lightskyblue";
        nav.style.border = "1px solid #ccc";
    });
    themeColor = 'blue';
    storage.setItem('storedTheme', themeColor);
}
function redTheme(){
    let items = document.querySelectorAll("body");
    items.forEach(function(change) {
        change.style.color = "red";
        change.style.backgroundColor = "lightcoral";
    });
    let navChange = document.querySelectorAll("nav");
    navChange.forEach(function(nav){
        nav.style.backgroundColor = "maroon";
        nav.style.border = "none";
    });
    themeColor = 'red';
    storage.setItem('storedTheme', themeColor);
}

//applies correct theme on startup
//defaults to light theme
if (themeColor == 'dark'){
    darkTheme();
}
else if (themeColor == 'blue'){
    blueTheme();
}
else if (themeColor == 'red'){
    redTheme();
}
else{
    lightTheme();
}
