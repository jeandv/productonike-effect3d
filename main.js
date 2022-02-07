var cajaProducto = document.getElementById('cajaProd');
var voltearDer = document.querySelector('.voltearDer');
var voltearIzq = document.querySelector('.voltearIzq');
var zapato1 = document.querySelector('.frontImg');
var zapato2 = document.querySelector('.backImg');

voltearDer.addEventListener('click', () => {
    cajaProducto.style.transform = 'rotateY(180deg)';
    zapato1.style.left = '1020px';
    zapato2.style.left = '20px';
    zapato1.style.transform = 'rotate(-30deg)';
    zapato2.style.transform = 'rotate(0deg)';
});

voltearIzq.addEventListener('click', () => {
    cajaProducto.style.transform = 'rotateY(0deg)';
    zapato1.style.left = '20px';
    zapato2.style.left = '-1020px';
    zapato1.style.transform = 'rotate(0deg)';
    zapato2.style.transform = 'rotate(-30deg)';
});