import {useAppDispatch} from '../../hooks';
import {changeFilmTab} from '../../store/film-meta-processor/film-meta-processor';
import {Link} from 'react-router-dom';

type tabProps = {
  currentTab: string,
  tabType: string
}

function FilmNavItem ({currentTab, tabType}: tabProps): JSX.Element {
  const dispatch = useAppDispatch();

  return (
    <li className={`film-nav__item ${currentTab === tabType && 'film-nav__item--active'}`}>
      <Link
        to="/project/src/pages"
        className="film-nav__link"
        onClick={
          (evt) => {
            evt.preventDefault();
            dispatch(changeFilmTab(tabType));
          }
        }
      >
        {tabType}
      </Link>
    </li>
  );
}

export default FilmNavItem;
