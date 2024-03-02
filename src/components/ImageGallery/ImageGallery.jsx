import ImageCard from '../ImageCard/ImageCard';
import css from './ImageGallery.module.css';

export default function ImageGallery({ images, openModal, getImage }) {
  return (
    <ul className={css.list}>
      {images.map(image => (
        <li key={image.id}>
          <ImageCard image={image} openModal={openModal} getImage={getImage} />
        </li>
      ))}
    </ul>
  );
}
