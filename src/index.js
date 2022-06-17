import scene from './restaurant.jpg';
import './style.css'
import eats from './eats.png';

function header() {
    const contentDiv = document.getElementById('content');
    const h2 = document.createElement('h2');
    h2.textContent = 'Callisto\'s Fine Dinery';
    document.getElementById('header').appendChild(h2);

    //#nav menu tabs
    const navContainer = document.createElement('div');
    const navTabs = document.createElement('div');
    navContainer.id = 'nav-container';
    document.getElementById('header').appendChild(navContainer);

    const homeTab = document.createElement('div');
    homeTab.textContent = 'Home';
    homeTab.className = 'nav-tabs';
    homeTab.id = 'home-tab';
    homeTab.onclick = function () {
        while (contentDiv.firstChild) {
            contentDiv.removeChild(contentDiv.firstChild);
        }
        generateTab.home();
    }

    const menuTab = document.createElement('div');
    menuTab.textContent = 'Menu';
    menuTab.className = 'nav-tabs';
    menuTab.id = 'menu-tab';
    menuTab.onclick = function () {
        while (contentDiv.firstChild) {
            contentDiv.removeChild(contentDiv.firstChild);
        }
        generateTab.menu();
    }

    const contactTab = document.createElement('div');
    contactTab.textContent = 'Contact';
    contactTab.className = 'nav-tabs';
    contactTab.id = 'contact-tab';
    contactTab.onclick = function () {
        while (contentDiv.firstChild) {
            contentDiv.removeChild(contentDiv.firstChild);
        }
        generateTab.contact();
    }

    console.log(homeTab);

    document.getElementById('nav-container').append(homeTab, menuTab, contactTab);
}

function background() {
    const div = document.createElement('div');

    const newImg = new Image();
    newImg.src = scene;
    div.id = 'background';

    document.body.style.backgroundImage = `url(${scene})`;

}

function content() {
    const div = document.createElement('div');
}

function footer() {
}

const generateTab = (() => {

    const home = () => {
        const homeContainer = document.createElement('div');
        homeContainer.id = 'home-container';
        document.getElementById('content').appendChild(homeContainer);



        let banner = document.createElement('h1');
        banner.textContent = 'Callisto\'s Fine Dinery';

        let about = document.createElement('h3');
        about.textContent = 'serving the finest mediterranean style foods since 1986'

        let uberDeal = document.createElement('div');
        uberDeal.textContent = 'get 5$ off your first take out order with '
        uberDeal.id = 'uber-deal';
        let uberEats = new Image();
        uberEats.src = eats;
        let address = document.createElement('h3');
        address.textContent = 'Address: Porky Pine rd 35590 N'

        document.getElementById('home-container').append(banner, about, uberDeal, address);
        document.getElementById('uber-deal').appendChild(uberEats);

    }

    const menu = () => {
        const homeContainer = document.createElement('div');
        homeContainer.id = 'menu-container';
        document.getElementById('content').appendChild(homeContainer);

        for (let i = 0; i < 9; i++) {
            let cell = document.createElement('div');
            cell.className = 'menu-grid';
            cell.id = `grid-${i}`;
            document.getElementById('menu-container').appendChild(cell);
        }
    }

    const contact = () => {
        const homeContainer = document.createElement('div');
        homeContainer.id = 'contact-container';
        document.getElementById('content').appendChild(homeContainer);

        for (let i = 0; i < 9; i++) {
            let cell = document.createElement('div');
            cell.className = 'contact-grid';
            cell.id = `grid-${i}`;
            document.getElementById('contact-container').appendChild(cell);
        }
    }

    return { home, menu, contact };

})();
document.body.appendChild(content(), header(), background(), footer());
