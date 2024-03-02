import css from './ImageCard.module.css';
import { AiOutlineLike } from 'react-icons/ai';
import { LiaHashtagSolid } from 'react-icons/lia';

export default function ImageCard({ image }) {
  return (
    <div className={css.container}>
      <img
        className={css.img}
        src={image.urls.small}
        alt={image.alt_description}
        width="320"
        height="200"
      />
      <div className={css.textWrapper}>
        <div className={css.likes}>
          <AiOutlineLike />
          <p>Likes:</p>
          <p>{image.likes}</p>
        </div>
        <div className={css.tags}>
          <LiaHashtagSolid />
          <p>Tags: </p>
          <p>{image.tags.map(tag => '#' + tag.title).join(' ')}</p>
        </div>
      </div>
    </div>
  );
}
