function toArray(collection) {
    [].slice.call(collection);
}

function toggleElements(activate) {
    var styleDisplay = activate ? 'none' : '';
    var styleDisplayBackground = !activate ? 'none' : '';

    var globalContainer = document.getElementById('globalContainer');
    globalContainer.style.display = styleDisplay;

    var pageletBluebar = document.getElementById('pagelet_bluebar');
    pageletBluebar.style.display = styleDisplay;

    var pageletTicker = document.getElementById('pagelet_ticker');
    pageletTicker.style.display = styleDisplay;

    var pageletDock = document.getElementById('pagelet_dock');
    var updatesContainer = toArray(pageletDock.children).filter(function(elem) {
        return toArray(elem.children).filter(function(elem) {
            return elem.tagName === 'UL';
        }).length > 0;
    });
    for (var i = 0; i < updatesContainer.length; i++) {
        updatesContainer[i].style.display = styleDisplay;
    }

    window.chatOnlyBackground.style.display = styleDisplayBackground;
}

if (window.chatOnlyActive === undefined) {
    window.chatOnlyActive = false;
}

if (window.chatOnlyBackground === undefined) {
    window.chatOnlyBackground = document.createElement('div');
    window.chatOnlyBackground.id = 'blank_div';
    window.chatOnlyBackground.style.position = 'absolute';
    window.chatOnlyBackground.style.width = '100%';
    window.chatOnlyBackground.style.height = '100%';
    window.chatOnlyBackground.style.backgroundColor = '#6286D2';
    window.chatOnlyBackground.style.backgroundImage = "url('"
        + chrome.extension.getURL('background.png') + "')";
    window.chatOnlyBackground.style.backgroundPosition = 'center';
    window.chatOnlyBackground.style.backgroundRepeat = 'no-repeat';
    window.chatOnlyBackground.style.WebkitOpacity = '0.3';
    window.chatOnlyBackground.style.zIndex = '1';

    var globalContainer = document.getElementById('globalContainer');
    globalContainer.parentNode.insertBefore(window.chatOnlyBackground, globalContainer);
}

if (!window.chatOnlyActive) {
    toggleElements(true);
    window.previousTitle = document.title;
    document.title = 'Facebook Chat';
    window.chatOnlyActive = true;
} else {
    toggleElements(false);
    document.title = window.previousTitle;
    window.chatOnlyActive = false;
}
