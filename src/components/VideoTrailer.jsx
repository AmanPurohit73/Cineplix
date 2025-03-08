import { useSelector } from "react-redux";
import useVideoTrailer from "../hooks/useVideoTrailer";

const VideoTrailer = ({id}) => {

  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);

  useVideoTrailer(id)


  return (
    <div className="w-full relative overflow-hidden" >
      <iframe className="w-full aspect-video"
        src={"https://www.youtube.com/embed/" + trailerVideo?.key + "?&autoplay=1&mute=1&autohide=1&showinfo=0&controls=0&loop=1"}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
}

export default VideoTrailer
