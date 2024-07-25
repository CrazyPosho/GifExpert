export const GifItem = ({ title, url }) => {
  return (
    <>
      <div className="card">
          <img src={url} alt={title} className="card-img-top" />
          <p className="card-title">{title}</p>
      </div>
    </>
  );
};
