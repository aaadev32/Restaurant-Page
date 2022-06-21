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

    const aboutTab = document.createElement('div');
    aboutTab.textContent = 'About';
    aboutTab.className = 'nav-tabs';
    aboutTab.id = 'about-tab';
    aboutTab.onclick = function () {
        while (contentDiv.firstChild) {
            contentDiv.removeChild(contentDiv.firstChild);
        }
        generateTab.about();
    }

    console.log(homeTab);

    document.getElementById('nav-container').append(homeTab, menuTab, aboutTab);
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



const generateTab = (() => {

    const home = () => {
        const homeContainer = document.createElement('div');
        homeContainer.id = 'home-container';
        document.getElementById('content').appendChild(homeContainer);



        let banner = document.createElement('h1');
        banner.textContent = 'Callisto\'s Fine Dinery';

        let about = document.createElement('h3');
        about.textContent = 'open monday - saturday, 2pm - 10pm'

        let uberDeal = document.createElement('div');
        uberDeal.textContent = 'get 5$ off your first take out order with '
        uberDeal.id = 'uber-deal';
        let uberEats = new Image();
        uberEats.src = eats;
        let address = document.createElement('h3');
        address.textContent = 'Address: Sequoia rd 3590 N'

        document.getElementById('home-container').append(banner, about, uberDeal, address);
        document.getElementById('uber-deal').appendChild(uberEats);

    }

    const menu = () => {
        const homeContainer = document.createElement('div');
        homeContainer.id = 'menu-container';
        document.getElementById('content').appendChild(homeContainer);

        let appetizerContainer = document.createElement('div')
        appetizerContainer.id = 'appetizer-container';
        appetizerContainer.style.gridArea = 'ap';
        document.getElementById('menu-container').appendChild(appetizerContainer);

        for (let i = 0; i < 4; i++) {
            let appetizers = null;
            if (i == 0) {
                appetizers = document.createElement('h3');
            } else {
                appetizers = document.createElement('div');
            }
            appetizers.id = `appetizer-${i}`;
            document.getElementById('appetizer-container').appendChild(appetizers);
        }

        document.getElementById('appetizer-0').textContent = 'Appetizer\'s';
        document.getElementById('appetizer-1').textContent = 'Caprese          $5.95';
        document.getElementById('appetizer-2').textContent = 'Antipasto        $12.25';
        document.getElementById('appetizer-3').textContent = 'Bruschetta       $7.27';


        let saladsSoupsContainer = document.createElement('div');
        saladsSoupsContainer.id = 'ss-container';
        saladsSoupsContainer.style.gridArea = 'ss';
        document.getElementById('menu-container').appendChild(saladsSoupsContainer);


        for (let i = 0; i < 4; i++) {
            let saladsSoupsItem = null;
            if (i == 0) {
                saladsSoupsItem = document.createElement('h3');
            } else {
                saladsSoupsItem = document.createElement('div');
            }
            saladsSoupsItem.id = `ss-${i}`;
            document.getElementById('ss-container').appendChild(saladsSoupsItem);
        }

        document.getElementById('ss-0').textContent = 'Salads and Soups';
        document.getElementById('ss-1').textContent = 'Caesar Salad     $5.95';
        document.getElementById('ss-2').textContent = 'Soup of the Day  $4.25';
        document.getElementById('ss-3').textContent = 'House Salad      $2.95';

        let specialsContainer = document.createElement('div');
        specialsContainer.id = 'specials-container';
        specialsContainer.style.gridArea = 'sp';
        document.getElementById('menu-container').appendChild(specialsContainer);


        for (let i = 0; i < 7; i++) {
            let specialsItem = null;
            if (i == 0) {
                specialsItem = document.createElement('h3');
            } else {
                specialsItem = document.createElement('div');
            }
            specialsItem.id = `special-${i}`;
            document.getElementById('specials-container').appendChild(specialsItem);
        }

        document.getElementById('special-0').textContent = 'House Specialties';
        document.getElementById('special-1').textContent = 'Marger Pizza     $13.95';
        document.getElementById('special-2').textContent = 'Vegan Pizza      $14.25';
        document.getElementById('special-3').textContent = 'Calzone          $9.50';
        document.getElementById('special-4').textContent = 'Chicken Marsala  $13.95';
        document.getElementById('special-5').textContent = 'Fettucine        $8.95';
        document.getElementById('special-6').textContent = 'Cheeses & Fruit  $5.50';

        let drinksContainer = document.createElement('div');
        drinksContainer.id = 'drinks-container';
        drinksContainer.style.gridArea = 'dr';
        document.getElementById('menu-container').appendChild(drinksContainer);


        for (let i = 0; i < 4; i++) {
            let drinkItem = null;
            if (i == 0) {
                drinkItem = document.createElement('h3');
            } else {
                drinkItem = document.createElement('div');
            }
            drinkItem.id = `drink-${i}`;
            document.getElementById('drinks-container').appendChild(drinkItem);
        }

        document.getElementById('drink-0').textContent = 'Drinks';
        document.getElementById('drink-1').textContent = 'Italian Soda     $2.00';
        document.getElementById('drink-2').textContent = 'Tea              $1.75';
        document.getElementById('drink-3').textContent = 'Lemonade         $2.50';

        let dessertsContainer = document.createElement('div');
        dessertsContainer.id = 'desserts-container';
        dessertsContainer.style.gridArea = 'ds';
        document.getElementById('menu-container').appendChild(dessertsContainer);


        for (let i = 0; i < 4; i++) {
            let dessertsItem = null;
            if (i == 0) {
                dessertsItem = document.createElement('h3');
            } else {
                dessertsItem = document.createElement('div');
            }
            dessertsItem.id = `dessert-${i}`;
            document.getElementById('desserts-container').appendChild(dessertsItem);
        }

        document.getElementById('dessert-0').textContent = 'Desserts';
        document.getElementById('dessert-1').textContent = 'Cannoli       $3.50';
        document.getElementById('dessert-2').textContent = 'Zeppole       $4.50';
        document.getElementById('dessert-3').textContent = 'Tiramisu      $3.25';

    }

    const about = () => {
        const aboutContainer = document.createElement('div');
        aboutContainer.id = 'about-container';
        document.getElementById('content').appendChild(aboutContainer);

        for (let i = 0; i < 3; i++) {
            let infoItem = document.createElement('div');
            infoItem.className = 'about-line';
            infoItem.id = `line-${i}`;
            document.getElementById('about-container').appendChild(infoItem);
        }

        document.getElementById(`line-0`).textContent= 'Over the years, Callistos\'s has continued to evolve. The deli was replaced with a dining counter, the linen tablecloths gave way to casual vinyl and then to rustic wood, and a children\'s menu was added. In 2005, Callisto\'s received an extensive interior remodel, giving it a more Tuscan feel. Most recently in 2017 Callisto\'s updated it\'s look with new flooring, paint, tabletops and window treatments. Reflecting a clean modern aesthetic and the authentic Italian style of his cooking.'
        document.getElementById(`line-1`).textContent= `Throughout the years, the heart of Callisto's has remained Callisto's and his cooking. Callisto's love of cooking shows in each dish he creates. If he could cook all day, with no phone calls, paperwork, ordering, staffing or cleaning, he would consider it a perfect day - well, maybe throw in a break for a Mariner's game, a long run, and family time with son Jordon and daughter Kaylene! Most of Callisto's hours are joyfully spent in the kitchen preparing fresh mouth-watering meals for his guests. He loves the open kitchen because he can chat with guests as he works. He never tires of hearing "It smells so good in here!"`
        document.getElementById(`line-2`).textContent= `Catering, cooking classes, wine dinners and special holiday menus are just a few of the things Callisto offers to his customers. Please say "hello" or wave to Callisto when you come in. Callisto is grateful to have such a wonderful and dedicated pastry chef, Judy Melbourne. The staff (many with 15+ years at Callisto's) enjoys meeting and getting to know the many wonderful customers and takes pride in serving them. Callisto thanks each of you for choosing to dine at Callisto's.`
    }   


    return { home, menu, about };

})();
document.body.appendChild(content(), header(), background());
