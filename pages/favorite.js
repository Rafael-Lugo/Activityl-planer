import FavoriteListPage from "@/components/FavoriteList";

export default function FavoritesPage({ liked, toggleLiked }) {
  return <FavoriteListPage liked={liked} toggleLiked={toggleLiked} />;
}
