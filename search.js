var query = document.getElementById('query');

query.onclick = function() {
    query.value = "";
}

document.getElementById('btn').onclick=function() {
    location = "result.html?q="+ query.value;
}
