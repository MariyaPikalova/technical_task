import { News } from '../../components/Posts';
import { Gallery } from '../../components/Gallery';
import { Vacancies } from '../../components/Vacancies';
import './main.scss';

export const Main = () => (
  <React.Fragment>
    <News />
    <Vacancies />
    <Gallery />
  </React.Fragment>
);
