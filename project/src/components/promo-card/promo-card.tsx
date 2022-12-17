import User from '../user/user';
import {useAppSelector} from '../../hooks';
import {getFavoriteCount, getPromo} from '../../store/main-page-processor/selectors';
import {getAuthorizationStatus} from '../../store/user-meta-processor/selectors';
import {favoriteClickType} from '../../const';
import FilmCardButtons from '../film-description/film-card-buttons';
import Header from '../header/header';

function PromoCard(): JSX.Element {
  const promo = useAppSelector(getPromo);
  const authStatus = useAppSelector(getAuthorizationStatus);
  const favoriteCount = useAppSelector(getFavoriteCount);

  if (!promo) {
    return <section className='film-card'></section>;
  }

  return (
    <section className='film-card'>
      <div className='film-card__bg'>
        <img src={promo.previewImage} alt={promo.name}/>
      </div>

      <h1 className='visually-hidden'>WTW</h1>

      <Header>
        <User />
      </Header>

      <div className='film-card__wrap'>
        <div className='film-card__info'>
          <div className='film-card__poster'>
            <img src={promo.posterImage} alt={promo.name} width='218' height='327' />
          </div>

          <div className='film-card__desc'>
            <h2 className='film-card__title'>{promo.name}</h2>
            <p className='film-card__meta'>
              <span className='film-card__genre'>{promo.genre}</span>
              <span className='film-card__year'>{promo.released.toString()}</span>
            </p>

            <FilmCardButtons
              id={promo.id}
              authStatus={authStatus}
              film={promo}
              favoriteCount={favoriteCount}
              favoriteType={favoriteClickType.Promo}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default PromoCard;
