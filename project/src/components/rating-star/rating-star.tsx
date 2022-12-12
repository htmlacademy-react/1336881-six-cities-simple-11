
import { Stars} from '../../types/rating-star';

const RatingStar = ({title, id, currentRating, onChange}:Stars) => (
  <>
    <input
      onChange = {(e) => onChange(Number(e.target.value))}
      className="form__rating-input visually-hidden"
      name="rating"
      id={`${id}-star`}
      type="radio"
      checked={currentRating === id}
      value={id}
    />
    <label
      htmlFor={`${id}-star`}
      className="reviews__rating-label form__rating-label"
      title={title}
    >
      <svg className="form__star-image" width={37} height={33}>
        <use xlinkHref="#icon-star" />
      </svg>
    </label>
  </>
);

export default RatingStar;
