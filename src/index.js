import 'regenerator-runtime/runtime';
import axios from 'axios';
import './sass/main.scss';
import imgApiService from '../src/js/apiService.js';
import { refs } from './js/refs';
import card from './template/card.hbs';
import { alert } from './../node_modules/@pnotify/core/dist/PNotify.js';
import './../node_modules/@pnotify/core/dist/PNotify.css';
import './../node_modules/@pnotify/core/dist/BrightTheme.css';
import './../node_modules/@pnotify/core/dist/Material.css';
import scrollIntoView from './js/scrolling';

const imgFromBE = new imgApiService;
let markup = '';

async function getImage(e) {
    imgFromBE.resetPageNumber();
    refs.gallery.innerHTML = '';
    e.preventDefault();
    const value = refs.input.value;
    imgFromBE.setQuery(value);
    const pics = await imgFromBE.fetchImages();
    console.log('pics :>> ', pics);
    if (pics.length > 0) {
        drawResult(pics);
        refs.moreBtn.classList.remove('is-hidden');
    } else {
        alert('specify your request more precisely')
    }
}

async function getMoreImg(e) {
    e.preventDefault();
    const value = refs.input.value;
    console.log('inputVal', value);
    imgFromBE.setQuery(value);
    const pics = await imgFromBE.fetchImages();
    console.log('pics', pics);
    drawResult(pics)
}

function drawResult(arr) {
    console.log('arr :>> ', arr);
    markup = card(arr);
    refs.gallery.insertAdjacentHTML('beforeend', markup);
}

refs.findBtn.addEventListener('click', getImage)
refs.moreBtn.addEventListener('click', getMoreImg)
refs.moreBtn.addEventListener('click', scrollIntoView);
