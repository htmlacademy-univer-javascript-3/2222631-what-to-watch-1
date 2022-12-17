import {FilmPageTabs} from '../../const';
import FilmNavItem from './film-nav-item';

type tabsProps = {
  currentTab: string;
}

function FilmNavigators ({currentTab}: tabsProps): JSX.Element {
  return (
    <nav className="film-nav film-card__nav">
      <ul className="film-nav__list">
        <FilmNavItem currentTab={currentTab} tabType={FilmPageTabs.Overview} />
        <FilmNavItem currentTab={currentTab} tabType={FilmPageTabs.Details} />
        <FilmNavItem currentTab={currentTab} tabType={FilmPageTabs.Reviews} />
      </ul>
    </nav>
  );
}

export default FilmNavigators;
