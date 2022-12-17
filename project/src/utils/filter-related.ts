import Film from '../types/film/film';

export const filterRelated = (films: Film[], currentId: number | undefined) => {
  const result = films.filter((film) => (
    film.id !== currentId
  ));

  if (result.length > 4) {
    return result.slice(0, 4);
  }

  return result;
};
