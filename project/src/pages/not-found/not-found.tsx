import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';

function NotFound(): JSX.Element {
  return (
    <div className="user-page">
      <Header>
        <h1 className="page-title user-page__title">
          Error HTTP 404.
          Page not found.
        </h1>
      </Header>

      <div className="sign-in user-page__content">
        <form action="#" className="sign-in__form">
          <div className="sign-in__submit">
            <button className="sign-in__btn">Main page</button>
          </div>
        </form>
      </div>

      <Footer/>
    </div>
  );
}

export default NotFound;

