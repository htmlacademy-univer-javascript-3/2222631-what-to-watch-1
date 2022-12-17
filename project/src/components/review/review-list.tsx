import Reviews from '../../types/reviews';
import ReviewCard from './review-card';

type ReviewsProps = {
  reviews: Reviews
}

function ReviewList({reviews}: ReviewsProps): JSX.Element {
  return (
    <div className="film-card__reviews film-card__row">
      <div className="film-card__reviews-col">
        {reviews.filter((a,i) => i % 2 === 0).map((review) => (
          <ReviewCard
            key={review.id}
            comment={review.comment}
            date={review.date}
            rating={review.rating}
            user={review.user}
          />))}
      </div>
      <div className="film-card__reviews-col">
        {reviews.filter((a,i) => i % 2 === 1).map((review) => (
          <ReviewCard
            key={review.id}
            comment={review.comment}
            date={review.date}
            rating={review.rating}
            user={review.user}
          />))}
      </div>
    </div>

  );
}

export default ReviewList;
