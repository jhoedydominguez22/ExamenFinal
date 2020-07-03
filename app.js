  

  function highlight(e) {
    if (selected[0]) selected[0].className = '';
    e.target.parentNode.className = 'selected';
}

var table = document.getElementById('tableMain'),
selected = table.getElementsByClassName('selected');
table.onclick = highlight;


function fnselect(){
msg = "Presiono el boton de seleccionar"
msg2 = $("tr.selected td:first").html();
alert(msg);
console.log(msg);
    alert($("tr.selected td:first" ).html());
    console.log(msg2);
    /*
    alert($("tr.selected td:nth-child(even)" ).html());
    alert($("tr.selected td:last" ).html());
    */
}
