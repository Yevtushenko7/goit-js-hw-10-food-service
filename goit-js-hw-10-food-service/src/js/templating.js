import dishes from "../data/menu.json";
import itemsTemplate from "../templates/menu-items.hbs";
import theme from './theme';

const refs = {
    menuList: document.querySelector('.js-menu'),
    body: document.body,
    switcher: document.querySelector('#theme-switch-toggle')
}

const markup = itemsTemplate(dishes)
refs.menuList.insertAdjacentHTML('beforeend', markup);
refs.switcher.checked = localStorage.getItem('theme') === theme.DARK

const saveSettings = localStorage.getItem('theme') === null ? theme.LIGHT : localStorage.getItem('theme')
refs.body.classList.add(saveSettings)

const changeClass = (add, rem) => {
    refs.body.classList.remove(rem)
        refs.body.classList.add(add)
        localStorage.setItem('theme', add)
}

refs.switcher.addEventListener('change', ({ target }) => {
    
    if (target.checked) {
        changeClass(theme.DARK,theme.LIGHT)
    }
    else {
        changeClass(theme.LIGHT, theme.DARK)
        
    }
})