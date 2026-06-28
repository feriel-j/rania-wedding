import React, { useEffect } from "react";
import "../../_dist/Basepage.css";
import AudioButton from "../../components/buttons/AudioButton";
import HeroWeddingCard from "../../components/HeroWeddingCard";
import SecondSection from "../../components/SecondSection";
import CounterTimer from "../../components/CounterTimer";
import MomentsCards from "../../components/MomentsCards";
import FooterWedding from "../../components/FooterWedding";
import AskComponent from "../../components/AskComponent";
import ContactWedding from "./ContactWedding";
// import DividerComponent from "../../components/DividerComponent";
import DressCode from "../../components/DressCode";
import Placement from "../../components/Placement";
// import ExecuteScrollComponent from "../../utils/ExecuteScrollComponent";
import Program from "../../components/Program";
const BasePage = () => {
//  useEffect(() => {
//   const interval = setInterval(() => {
//     window.scrollBy({
//       top: 0.5, // vitesse
//       behavior: "auto",
//     });
//   }, 50);

//   return () => clearInterval(interval);
// }, []);

useEffect(() => {
  let stopped = false;
  let animationId: number;

  const speed = 0.5;

  const step = () => {
    if (stopped) return;

    const bottom =
      window.innerHeight + window.scrollY >= document.body.scrollHeight;

    if (bottom) {
      window.scrollTo(0, 0);
    } else {
      window.scrollTo(0, window.scrollY + speed);
    }

    animationId = requestAnimationFrame(step);
  };

  animationId = requestAnimationFrame(step);

  const stop = () => {
    stopped = true;
    cancelAnimationFrame(animationId);
  };

  // IMPORTANT: scroll event only is not enough → use multiple
  window.addEventListener("wheel", stop, { passive: true });
  window.addEventListener("touchstart", stop, { passive: true });

  return () => {
    cancelAnimationFrame(animationId);
    window.removeEventListener("wheel", stop);
    window.removeEventListener("touchstart", stop);
  };
}, []);
 
// useEffect(() => {
//   let stopped = false;
//   let animationId: number;

//   const speed = 0.5;
//   const delay = 50;

//   let lastTime = 0;

//   const step = (time: number) => {
//     if (stopped) return;

//     if (time - lastTime > delay) {
//       window.scrollBy(0, speed);
//       lastTime = time;
//     }

//     animationId = requestAnimationFrame(step);
//   };

//   animationId = requestAnimationFrame(step);

//   const stop = () => {
//     stopped = true;
//     cancelAnimationFrame(animationId); // ✅ IMPORTANT
//   };

//   window.addEventListener("wheel", stop);
//   window.addEventListener("touchstart", stop);

//   return () => {
//     cancelAnimationFrame(animationId);
//     window.removeEventListener("wheel", stop);
//     window.removeEventListener("touchstart", stop);
//   };
// }, []);


  return (
    <section className="base-page-container">
    

      <HeroWeddingCard />
      <SecondSection/>
      <CounterTimer/>
      <MomentsCards/>
      <Placement/>
      <Program/>
      <ContactWedding/>
      <DressCode/>
      <AskComponent/>
      <FooterWedding/>
      <AudioButton audiosrc="audio.mp3" />
            {/* <ExecuteScrollComponent scrollRef={myTopRef} /> */}

    </section>
  );
};

export default BasePage;
