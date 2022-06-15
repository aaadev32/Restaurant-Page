import scene from './restaurant.jpg';
import './style.css'

function header() {
    //h2
    const h2 = document.createElement('h2');
    h2.textContent = 'Callisto\'s Fine Dinery';
    document.getElementById('header').appendChild(h2);

    //#nav menu tabs
    const navContainer = document.createElement('div');
    const navTabs = document.createElement('div');
    navContainer.id = 'nav-container';
    document.getElementById('header').appendChild(navContainer);

    const homeTab = document.createElement('div');
    const menuTab = document.createElement('div');
    const contactTab = document.createElement('div');

    homeTab.textContent = 'Home';
    homeTab.className = 'nav-tabs';
    homeTab.onclick = onClick();

    menuTab.textContent = 'Menu';
    menuTab.className = 'nav-tabs';
    menuTab.onclick = onClick();

    contactTab.textContent = 'Contact';
    contactTab.className = 'nav-tabs';
    contactTab.onclick = onClick();

    document.getElementById('nav-container').append(homeTab, menuTab, contactTab);
}

function background() {
    const div = document.createElement('div');

    //background
    const newImg = new Image();
    newImg.src = scene;
    div.id = 'background';

    document.body.style.backgroundImage = `url(${scene})`;

}

function content() {
    const div = document.createElement('div');

    //#create home content for home tab

    //#create grid for food menu

    //#create contact content for content tab

}

function footer() {
    //#create footer bar with trademarks, associations and other info.
}

function onClick(element) {
    if (element.textContent == 'Home') {

    } else if (element.textContent == 'Menu') {

    } else if (element.textContent == 'Contact')
}

const generateTab = (() => {
    //const homeTab generate page here
    //const menuTab generate page here
    //const contactTab generate page here
})();
document.body.appendChild(content(), header(), background(), footer());
