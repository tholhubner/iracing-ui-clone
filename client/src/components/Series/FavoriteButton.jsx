import { useDispatch, useSelector } from "react-redux"
import { addSeriesToFavorites, removeSeriesFromFavorites } from "../../app/reducers/userReducer"
import { isSeriesFavorite } from "../../helpers/seriesListHelper"
import { getIcon } from "../../helpers/iconHelper"

function FavoriteButton({ title }) {
	const { favoriteSeries } = useSelector((state) => state.user)
	const dispatch = useDispatch()
	return (
		<td>
			<div onClick={() => {
				if (isSeriesFavorite(favoriteSeries, title)) dispatch(removeSeriesFromFavorites(title))
				else dispatch(addSeriesToFavorites(title))
			}}>
				{isSeriesFavorite(favoriteSeries, title) ? getIcon("favorite") : getIcon("favorite-empty") }
			</div>
		</td>
	)
}

export { FavoriteButton }
