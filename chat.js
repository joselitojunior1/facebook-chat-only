for (elementid in {'globalContainer':'','pagelet_bluebar':'','pagelet_ticker':''}) {
    var element = document.getElementById(elementid);
    element.parentNode.removeChild(element);
}
document.title = "Facebook Chat";
