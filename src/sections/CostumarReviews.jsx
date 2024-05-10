import ReviewCard from '../Components/ReviewCard';
import { reviews } from '../constants';

const CostumarReviews = () => {
  return (
    <section className='max-container'>
      <h3 className='font-palanquin text-center text-4xl font-bold'>
        what our <span className='text-coral-red'>Costumers</span> say ?
      </h3>
      <p className='info-text text-center m-auto mt-4 max-w-lg'>
        Hear genuine stories from our satisfied customers about their
        exceptional experiences with us.
      </p>
      <div
        className='mt-24 flex flex-1 justify-evenly items-center
        max-lg:flex-col gap-14'
      >
        {reviews.map((review, index) => (
          <ReviewCard
            key={index}
            customerName={review.customerName}
            imgURL={review.imgURL}
            rating={review.rating}
            feedback={review.feedback}
          />
        ))}
      </div>
    </section>
  );
};

export default CostumarReviews;
