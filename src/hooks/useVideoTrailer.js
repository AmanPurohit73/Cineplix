import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../utils/moviesSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";

const useVideoTrailer = (id) =>{  
const dispatch = useDispatch();

  
  const getMovieVideos = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos`,
      API_OPTIONS
    );
    const json = await data.json();
    const trailerData = json.results.filter(
      (video) => video.type === "Trailer"
    );
    const trailer = trailerData.length ? trailerData[0] : json.results[0];

    dispatch(addTrailerVideo(trailer));
  };

  useEffect(() => {
    getMovieVideos();
  }, []);
}

export default useVideoTrailer