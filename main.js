import './style.css'
import Alpine from 'alpinejs';
import { Login } from './login';
import { Movies } from './movies'
import './movies.css'

window.Alpine = Alpine;


Alpine.data('login', Login);
Alpine.data('movies', Movies)

Alpine.start();


