function toArray(collection) {
    var array = [];
    for (var i = 0; i < collection.length; i++) {
        array.push(collection[i]);
    }
    return array;
}

function toggleElements(styleDisplay) {
    var globalContainer = document.getElementById('globalContainer');
    globalContainer.style.display = styleDisplay;

    var pagelet_bluebar = document.getElementById('pagelet_bluebar');
    pagelet_bluebar.style.display = styleDisplay;

    var pagelet_ticker = document.getElementById('pagelet_ticker');
    pagelet_ticker.style.display = styleDisplay;

    var pagelet_dock = document.getElementById('pagelet_dock');
    var updates_container = toArray(pagelet_dock.children).filter(function(elem) {
        return toArray(elem.children).filter(function(elem) {
            return elem.tagName === 'UL';
        }).length > 0;
    });

    for (var i = 0; i < updates_container.length; i++) {
        updates_container[i].style.display = styleDisplay;
    }
}

if (window.chatOnlyActive === undefined) {
    window.chatOnlyActive = false;
}

if (!window.chatOnlyActive) {
    toggleElements('none');

    var background = document.createElement('div');
    background.id = 'blank_div';
    background.style.position = 'absolute';
    background.style.width = '100%';
    background.style.height = '100%';
    background.style.backgroundColor = '#EEEEEE';
    //background.style.backgroundImage = "url('background.jpg')";
    background.style.zIndex = '1';
    globalContainer.parentNode.insertBefore(background, globalContainer);

    document.title = 'Facebook Chat';
    chrome.runtime.sendMessage({'action': 'activate'});
    window.chatOnlyActive = true;

} else {
    toggleElements('');

    var background = document.getElementById('blank_div');
    background.parentNode.removeChild(background);

    document.title = 'Facebook';
    chrome.runtime.sendMessage({'action': 'deactivate'});
    window.chatOnlyActive = false;
}
