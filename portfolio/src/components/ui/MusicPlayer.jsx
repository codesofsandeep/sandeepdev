// import React, { useState, useRef, useEffect } from "react";
// import { Play, Pause, SkipBack, SkipForward, Loader2 } from "lucide-react";

// const MusicPlayer = () => {
//   const [isPlaying, setIsPlaying] = useState(false);
//   const [currentTrack, setCurrentTrack] = useState(0);
//   const [isLoading, setIsLoading] = useState(true);
//   const audioRef = useRef(null);

//   const tracks = [
//     {
//       id: 1,
//       title: "Olha Mensagem",
//       cover: "/images/pain.jpeg",
//       src: "/music/pain.mp3",
//     },
//     {
//       id: 2,
//       title: "Hotline",
//       cover: "/images/hotline.jpeg",
//       src: "/music/hotline.mp3",
//     },
//     {
//       id: 3,
//       title: "Veki Veki",
//       cover: "/images/veki-veki.png",
//       src: "/music/veki.mp3",
//     },
//   ];

//   // Handle audio loading + ended
//   useEffect(() => {
//     const audio = audioRef.current;
//     if (!audio) return;

//     setIsLoading(true);
//     const handleCanPlay = () => setIsLoading(false);
//     const handleEnded = () => setIsPlaying(false);

//     audio.addEventListener("canplaythrough", handleCanPlay);
//     audio.addEventListener("ended", handleEnded);

//     // Load new track manually
//     audio.load();

//     return () => {
//       audio.removeEventListener("canplaythrough", handleCanPlay);
//       audio.removeEventListener("ended", handleEnded);
//     };
//   }, [currentTrack]);

//   // Handle play/pause
//   useEffect(() => {
//     const audio = audioRef.current;
//     if (!audio) return;

//     if (isPlaying && !isLoading) {
//       audio
//         .play()
//         .catch((err) => {
//           console.error("Playback error:", err);
//           setIsPlaying(false);
//         });
//     } else {
//       audio.pause();
//     }
//   }, [isPlaying, isLoading, currentTrack]);

//   const handlePlayPause = () => {
//     if (!isLoading) setIsPlaying((prev) => !prev);
//   };

//   const handleNext = () => {
//     setIsPlaying(false);
//     setCurrentTrack((prev) => (prev + 1) % tracks.length);
//   };

//   const handlePrevious = () => {
//     setIsPlaying(false);
//     setCurrentTrack((prev) => (prev - 1 + tracks.length) % tracks.length);
//   };

//   return (
//     <div className="flex flex-col items-center w-full h-full justify-around rounded-2xl border border-midcolor hover:shadow-2xl transition-all duration-500 p-6 overflow-hidden">
//       <audio ref={audioRef} src={tracks[currentTrack].src} preload="metadata" />

//       {/* Album Cover or Loading Spinner */}
//       <div className="relative w-62 h-62 flex items-center justify-center mb-4">
//         {isLoading ? (
//           <Loader2 className="animate-spin text-midcolor w-16 h-16" />
//         ) : (
//           <img
//             src={tracks[currentTrack].cover}
//             alt={tracks[currentTrack].title}
//             className={`w-full h-full object-cover rounded-full border-4 border-solid transition-all duration-700 ${
//               isPlaying ? "animate-spin-slow" : ""
//             }`}
//           />
//         )}
//       </div>

//       <div className="text-2xl font-bold mb-6 text-solid">
//         {tracks[currentTrack].title}
//       </div>

//       {/* Controls */}
//       <div className="flex items-center justify-between gap-8">
//         <button
//           onClick={handlePrevious}
//           disabled={isLoading}
//           className="p-3 text-solid hover:text-midcolor transition-transform duration-200 hover:scale-110 disabled:opacity-40"
//         >
//           <SkipBack size={26} />
//         </button>

//         <button
//           onClick={handlePlayPause}
//           disabled={isLoading}
//           className="bg-solid text-white p-4 rounded-full hover:shadow-lg transition-all duration-300 transform hover:scale-105 disabled:opacity-50"
//         >
//           {isLoading ? (
//             <Loader2 size={26} className="animate-spin" />
//           ) : isPlaying ? (
//             <Pause size={26} />
//           ) : (
//             <Play size={26} />
//           )}
//         </button>

//         <button
//           onClick={handleNext}
//           disabled={isLoading}
//           className="p-3 text-solid hover:text-midcolor transition-transform duration-200 hover:scale-110 disabled:opacity-40"
//         >
//           <SkipForward size={26} />
//         </button>
//       </div>
//     </div>
//   );
// };

// export default MusicPlayer;



import React, { useState, useRef, useEffect } from "react";
import { Play, Pause, SkipBack, SkipForward, Loader2 } from "lucide-react";

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrack, setCurrentTrack] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const audioRef = useRef(null);

  const tracks = [
    { id: 1, title: "Olha Mensagem", cover: "/images/pain.jpeg", src: "/music/pain.mp3" },
    { id: 2, title: "Hotline", cover: "/images/hotline.jpeg", src: "/music/hotline.mp3" },
    { id: 3, title: "Veki Veki", cover: "/images/veki-veki.png", src: "/music/veki.mp3" },
  ];

  // Handle audio loading + ended
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    setIsLoading(true);
    const handleCanPlay = () => setIsLoading(false);
    const handleEnded = () => setIsPlaying(false);

    audio.addEventListener("canplaythrough", handleCanPlay);
    audio.addEventListener("ended", handleEnded);

    audio.load();

    return () => {
      audio.removeEventListener("canplaythrough", handleCanPlay);
      audio.removeEventListener("ended", handleEnded);
    };
  }, [currentTrack]);

  // Handle play/pause
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying && !isLoading) {
      audio.play().catch((err) => {
        console.error("Playback error:", err);
        setIsPlaying(false);
      });
    } else {
      audio.pause();
    }
  }, [isPlaying, isLoading, currentTrack]);

  const handlePlayPause = () => {
    if (!isLoading) setIsPlaying((prev) => !prev);
  };

  const handleNext = () => {
    setIsPlaying(false);
    setCurrentTrack((prev) => (prev + 1) % tracks.length);
  };

  const handlePrevious = () => {
    setIsPlaying(false);
    setCurrentTrack((prev) => (prev - 1 + tracks.length) % tracks.length);
  };

  return (
    <div className="relative w-full max-w-sm h-[29rem] rounded-2xl overflow-hidden border border-midcolor hover:shadow-2xl transition-all duration-500">
      <audio ref={audioRef} src={tracks[currentTrack].src} preload="metadata" />

      {/* Album Cover */}
      {isLoading ? (
        <div className="flex items-center justify-center w-full h-full bg-gray-200">
          <Loader2 className="animate-spin text-midcolor w-16 h-16" />
        </div>
      ) : (
        <img
          src={tracks[currentTrack].cover}
          alt={tracks[currentTrack].title}
          className="w-full h-full object-cover"
        />
      )}

      {/* Overlay for controls */}
      <div className="absolute inset-0 flex flex-col items-center justify-end p-6 pointer-events-none">
        {/* Track Title */}
        <div className="text-white text-md font-bold mb-4 pointer-events-auto text-center">
          {tracks[currentTrack].title}
        </div>

        {/* Controls */}
        <div className="flex items-center justify-between w-full gap-6 pointer-events-auto">
          <button
            onClick={handlePrevious}
            disabled={isLoading}
            className="p-3 text-white hover:text-gray-300 transition-transform duration-200 hover:scale-110 disabled:opacity-40"
          >
            <SkipBack size={20} />
          </button>

          {/* Play/Pause button with glassmorphism */}
          <button
            onClick={handlePlayPause}
            disabled={isLoading}
            className="bg-white/20 backdrop-blur-md text-white p-4 rounded-full hover:shadow-lg transition-all duration-300 transform hover:scale-105 disabled:opacity-50"
          >
            {isLoading ? (
              <Loader2 size={20} className="animate-spin" />
            ) : isPlaying ? (
              <Pause size={20} />
            ) : (
              <Play size={20} />
            )}
          </button>

          <button
            onClick={handleNext}
            disabled={isLoading}
            className="p-3 text-white hover:text-gray-300 transition-transform duration-200 hover:scale-110 disabled:opacity-40"
          >
            <SkipForward size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MusicPlayer;

