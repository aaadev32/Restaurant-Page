import scene from './restaurant.jpg';
import './style.css'

function header() {
    const element = document.createElement('div');
    const h2 = document.createElement('h2');
    h2.textContent = 'Callisto\'s Fine Dine';
    document.getElementById('header').appendChild(h2);
}

function background() {
    const element = document.createElement('div');

    //background
    const newImg = new Image();
    newImg.src = scene;
    element.id = 'background';

    document.body.style.backgroundImage = `url(${scene})`;

}

function content() {

}

function footer() {

}

document.body.appendChild(content(), header(), background(), footer());
