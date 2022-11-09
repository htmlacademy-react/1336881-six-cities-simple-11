
import { Stars} from '../../types/commentStars';

const CommentStars = ({title, id, onChange}:Stars) => (
  <>
    <input
      onChange = {onChange}
      className="form__rating-input visually-hidden"
      name="rating"
      id={`${id}-star`}
      type="radio"
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

export default CommentStars;
