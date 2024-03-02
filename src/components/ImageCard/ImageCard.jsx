export default function ImageCard({ image }) {
  return (
    <div>
      <img src={image.urls.small} alt={image.alt_description} />
      <div>
        <div>
          <p>Likes:</p>
          <p>{image.likes}</p>
        </div>
        <div>
          <p>Tags: </p>
          <p>{image.tags.map(tag => '#' + tag.title).join(' ')}</p>
        </div>
      </div>
    </div>
  );
}
