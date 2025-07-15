import { useDispatch, useSelector } from 'react-redux';
import { toggleFavorite } from '../redux/slices/favoriteSlice';

export default function FavoriteButton({ photo }) {
  const dispatch = useDispatch();
  const favorites = useSelector(state => state.favorites);
  const isFavorite = favorites.some(fav => fav.id === photo.id);

  return (
    <button
      className={`btn ${isFavorite ? 'btn-danger' : 'btn-outline-danger'} btn-sm mt-2`}
      onClick={() => dispatch(toggleFavorite(photo))}
    >
      {isFavorite ? '💖 Đã thích' : '🤍 Yêu thích'}
    </button>
  );
}
