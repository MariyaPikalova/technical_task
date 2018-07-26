import ReactDom from 'react-dom';
import { Header } from './parts/Header';
import { Main } from './parts/Main';
import { Footer } from './parts/Footer';
import './app.scss';

const component = (
 <React.Fragment>

   <Header />
   <Main />
   <Footer />
 </React.Fragment>

);
ReactDom.render(component, document.getElementById('app'));
