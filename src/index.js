import scene from './restaurant.jpg';

function component(){
    const element = document.createElement('div');
    const newImg = new Image();
    newImg.src = scene;
    element.appendChild(newImg);

    return element;
}

document.getElementById('content').appendChild(component());