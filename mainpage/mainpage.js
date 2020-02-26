var menu_expand;

$(document).ready(function () {
    /*set menu default*/
    menu_expand = false;
    document.getElementById("menu").style.display = "none";
    document.getElementById("menu").style.width = "0px"

    /*set main default*/
    changeMainPage("../profile/profile.html"); 
})

/*menu state changes*/
function changeMenuState() {
    var width = 280; /*width of menu window*/
    var speed = 200; /*speed of menu window sliding*/
    menu_expand = !menu_expand;
    if (menu_expand){
        show_hor("#menu", width, speed);
    }
    else {
        hide_hor("#menu", speed);
    }
}
function show_hor(el, width, speed) {
    $(el).css({ "display": "block" });
    $(el).animate({ "width": width }, speed);
}
function hide_hor(el, speed) {
    $(el).animate({ "width": "0px" }, speed, function () {
        $(el).css({ "display": "none" });
    });
}

/*main div changes*/
function changeMainPage(_url) {
    $("#main").attr("src", _url);
}