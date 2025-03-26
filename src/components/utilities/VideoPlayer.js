"use client";
import YouTube from "react-youtube";
import { useState } from "react";

const VideoPlayer = ({ YoutubeId }) => {
  const [isVisible, setIsVisible] = useState(false);

  const options = {
    width: "100%",
    height: "100%",
  };

  return (
    <>
      {/* Tombol untuk membuka video */}
      {!isVisible && (
        <button
          className="fixed bottom-4 right-4 bg-blue-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-500 md:px-6 md:py-3"
          onClick={() => setIsVisible(true)}
        >
          Play Trailer
        </button>
      )}

      {isVisible && (
        <div className="fixed bottom-4 right-4 w-[90%] max-w-[400px] h-[200px] md:h-[250px] bg-black/80 rounded-lg shadow-lg overflow-hidden flex flex-col items-end p-2">
          {/* Tombol Close */}
          <button
            className="text-white bg-gray-700 hover:bg-gray-500 rounded-full px-2 py-1 text-xs mb-2 md:text-sm"
            onClick={() => setIsVisible(false)}
          >
            X
          </button>

          {/* Video Player */}
          <div className="w-full h-full">
            <YouTube videoId={YoutubeId} opts={options} className="w-full h-full" />
          </div>
        </div>
      )}
    </>
  );
};

export default VideoPlayer;
