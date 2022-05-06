import '../style/index.scss';
import dayjs from 'dayjs';
import routes from './routes';
import PageList from './PageList';


console.log(dayjs().format('MMMM DD YYYY'));
console.log(dayjs().subtract(10, 'days').format('DD/MM/YYYY'));

const callRoute = () => {
  const { hash } = window.location;
  const pathParts = hash.substring(1).split('/');

  const pageName = pathParts[0];
  const pageArgument = pathParts[1] || '';
  const pageFunction = routes[pageName];

  if (pageFunction !== undefined) {
    pageFunction(pageArgument);
  }
};

window.addEventListener('hashchange', () => callRoute());
window.addEventListener('DOMContentLoaded', () => callRoute());

document.getElementById('button').addEventListener("click", function(){
  PageList(document.getElementById('search').value);
});