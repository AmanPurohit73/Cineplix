import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopratedMovies from "../hooks/useTopratedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import SearchGPT from "./SearchGPT";
import { useSelector } from "react-redux";

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTopratedMovies();
  useUpcomingMovies();

  const showGPTSearch = useSelector((store) => store.gpt.showGptSearch);

  return (
    <div className="">
      <Header />

      {showGPTSearch ? (
        <SearchGPT />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};

export default Browse;
