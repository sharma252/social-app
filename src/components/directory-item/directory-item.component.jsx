import "./directory-item.styles.scss";

function DirectoryItem({ product }) {
  return (
    <div className="directory-item-container">
      <div
        className="background-image"
        style={{ backgroundImage: `url(${product.imageUrl})` }}
      />
      <div className="body">
        <h2>{product.title}</h2>
        <p>Show Now</p>
      </div>
    </div>
  );
}

export default DirectoryItem;
