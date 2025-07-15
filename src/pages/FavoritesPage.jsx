import { useSelector } from 'react-redux';

export default function FavoritesPage() {
  const favorites = useSelector(state => state.favorites);

  return (
    <div className="container mt-4">
      <h2 className="mb-4">📌 Ảnh Yêu Thích</h2>
      <div className="row">
        {favorites.length === 0 ? (
          <p>Chưa có ảnh nào được yêu thích.</p>
        ) : (
          favorites.map(photo => (
            <div className="col-md-4 mb-4" key={photo.id}>
              <div className="card">
                <img src={photo.url} className="card-img-top" alt={photo.name} />
                <div className="card-body">
                  <h5 className="card-title">{photo.name}</h5>
                  <p className="card-text">📁 {photo.category}</p>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
