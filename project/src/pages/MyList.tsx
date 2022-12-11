import React from 'react';
import {FilmCard, FilmCardProps} from '../components/FilmCard';
import {VisuallyHidden} from '../components/VisuallyHidden';
import {Header} from '../components/Header';
import {Footer} from '../components/Footer';
import { IUser } from '../types/IUser';


export function MyList({films, user}: { films: FilmCardProps[]; user: IUser | undefined }) {
  if(!(user?.isAuthorize ?? false)){
    window.location.replace('/login');
  }
  return (
    <React.Fragment>
      <VisuallyHidden/>
      <div className='user-page'>
        <Header/>

        <section className='catalog'>
          <h2 className='catalog__title visually-hidden'>Catalog</h2>

          <div className='catalog__films-list'>
            {
              films.map((item) =>
                <FilmCard key={item.id.toString()} id={item.id} title={item.title} imgLink={item.imgLink}/>)
            }
          </div>
        </section>

        <Footer/>
      </div>
    </React.Fragment>
  );
}
