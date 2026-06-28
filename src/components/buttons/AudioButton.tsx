import React, {  useEffect, useRef, useState } from "react";
import"../../_dist/AudioButton.css"
import PlayIcon from "../icons/PlayIcon";
import PauseIcon from "../icons/PauseIcon";
import { useLocation } from "react-router";

interface AudioButtonProps extends React.HTMLAttributes<HTMLDivElement> {
  id?: string;
  audiosrc: string;
}

const AudioButton = ({ ...props }: AudioButtonProps) => {
  const audio = useRef<HTMLAudioElement>(null);
  const [play,setPlay]=useState(true)

 const location = useLocation();
 console.log(location.pathname==="/main")
//   const navigate = useNavigate();



useEffect(() => {
  const el = audio.current;
  if (!el) return;

  el.load(); // 🔥 forces reload of audio resource

  const playAudio = async () => {
    try {
      await el.play();
      setPlay(true);
    } catch {
      setPlay(false);
    }
  };

  playAudio();
}, []);



  


  return (
    <div {...props} className={`audio-button-container ${props.className && props.className }`}>
      <audio ref={audio} src={props.audiosrc} loop preload="auto"  />
      <button className="audio-button"
        onClick={() => {
          if (!audio.current) return;

          if (audio.current.paused) {
            audio.current.play();
            setPlay(true)
          } else {
            audio.current.pause();
            setPlay(false)
          }
        }}>
    {play? <PauseIcon/>: <PlayIcon/>}
      </button>
    </div>
  );
};

export default AudioButton;
