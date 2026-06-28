import React from "react";
import "../_dist/SecondSection.css";
import DividerComponent from "./DividerComponent";
const SecondSection = () => {
  return (
    <section className="section-container">
        <DividerComponent/>
      <h3> ﴿ بسم الله الرحمان الرحيم﴾</h3>
      <h2>
        وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَاجًا
        لِّتَسْكُنُوا إِلَيْهَا وَجَعَلَ بَيْنَكُم مَّوَدَّةً وَرَحْمَةً
      </h2>
      <h4>
      بكل محبة، تتشرف عائلة  <span>عمر غناي</span> وعائلة <span>محمد الصغير الشايب</span> 
      </h4>
     
      <h4> بدعوتكم
          لمشاركتهم بداية حكاية جديدة، والاحتفال بعقد قران </h4>
      
      <h1>علاء الدين و رانيا</h1>
      <br />
      <h4>فحضوركم هو أجمل ما
        يكتمل به الفرح</h4>
        <DividerComponent/>
    </section>
  );
};

export default SecondSection;
