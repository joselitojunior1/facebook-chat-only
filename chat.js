var globalContainer = document.getElementById('globalContainer');
var pagelet_bluebar = document.getElementById('pagelet_bluebar');
var pagelet_ticker = document.getElementById('pagelet_bluebar');

var background = document.createElement('div');
background.id = "blank_div";
background.style.position = 'absolute';
background.style.width = '100%';
background.style.height = '100%';
background.style.backgroundColor = '#FFFFFF';
background.style.backgroundImage = "url('background.jpg')";
background.style.zIndex = '1';

globalContainer.parentNode.insertBefore(background, globalContainer);
globalContainer.style.display = 'none';
pagelet_bluebar.style.display = 'none';
pagelet_ticker.style.display = 'none';

document.title = 'Facebook Chat';
