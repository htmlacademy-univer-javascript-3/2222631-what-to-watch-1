import React from 'react';
import {FilmCard, FilmCardProps} from '../components/FilmCard';
import {VisuallyHidden} from '../components/VisuallyHidden';
import {Header} from '../components/Header';
import {Footer} from '../components/Footer';


export function MyList(props: FilmCardProps[]){
  return (
    <React.Fragment>
      <VisuallyHidden/>
      <div className='user-page'>
        <Header/>

        <section className='catalog'>
          <h2 className='catalog__title visually-hidden'>Catalog</h2>

          <div className='catalog__films-list'>
            {
              props.map((item) =>
                <FilmCard key={item.title} title={item.title} imgLink={item.imgLink}/>)
            }
          </div>
        </section>

        <Footer/>
      </div>
    </React.Fragment>
  );
}
