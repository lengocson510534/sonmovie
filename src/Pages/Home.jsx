import MovieList from "../Components/MovieList/MovieList";
import Slide from "../Components/Slide/Slide";

import { category, movieType, tvType } from '../api/api';

function Home(props) {

  return (
    <>
      <Slide />
      <MovieList category={category.movie} type={movieType.popular} title="Trending Movies" icon="bx-trending-up" />
      <MovieList category={category.movie} type={movieType.top_rated} title="Top Rated Movies" icon="bxs-star" />
      <MovieList category={category.tv} type={tvType.popular} title="Trending TV" icon="bxs-tv" />
      <MovieList category={category.tv} type={tvType.top_rated} title="Top Rated TV" icon="bxs-star" />
    </>
  );
}

export default Home;