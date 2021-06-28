menu_list_array = [
    "Veg Margherita Pizza",
    "Chicken tikka pizza",
    "Chicken BBQ pizza",
    "Deluxe Veggie Pizza",
    "Pepperoni Pizza",
];
function getmenu() {
    var htmldata;
    htmldata="<ol class='menulist'>"
    menu_list_array.sort();
    for(var i=0;i<menu_list_array.length;i++){
        htmldata=htmldata+'<li>' + menu_list_array[i] + '</li>'        
    }
    htmldata=htmldata+"</ol>"
    document.getElementById("display_menu").innerHTML = htmldata;
}
function add_item(){
    var htmldata;
    var item=document.getElementById("addItem").value;
    menu_list_array.sort();
    htmldata='<section class="card">'

}
function additem() {
    var item=document.getElementById("addItem").value;
    menu_list_array.push(item);
    add_item();
    for(var i=0;i<menu_list_array.length;i++){
        htmldata=htmldata+'<div class="card">'
        +'<img src="images/Pizzapng.png"/>'
        +menu_list_array[i] + '</div>'
    }
    htmldata=htmldata+"</section>"
    document.getElementById("display_added_menu").innerHTML = htmldata;
}
