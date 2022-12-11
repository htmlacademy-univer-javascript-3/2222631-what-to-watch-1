import React from 'react';
import { Link } from 'react-router-dom';

export function FilmCard(props: FilmCardProps){
  return (
    <article className={'small-film-card catalog__films-card'}>
      <div className='small-film-card__image'>
        <img
          src={ props.imgLink }
          alt={ props.title } width='280' height='175'
        />
      </div>
      <h3 className='small-film-card__title'>
        <Link
          to={`/films/${props.id}`}
          className='small-film-card__link'
        >
          { props.title }
        </Link>
      </h3>
    </article>
  );
}

export type FilmCardProps = {
  id: number;
  title: string;
  imgLink: string;
}
