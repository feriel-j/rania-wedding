// import { Route, Routes } from "react-router-dom";
import { Route, Routes } from "react-router";
import "./_dist/App.css"

import InvitationPage from "./domains/pages/InvitationPage";
import WelcomePage from "./domains/pages/WelcomePage";
import { createContext, useRef } from "react";
export const refContext = createContext<React.RefObject<HTMLElement> | null>(
  null
);
function App() {
    const myTopRef = useRef<HTMLElement>(null!);
  

  return (
     <refContext.Provider value={myTopRef}>
    <div className="App">
      
      <Routes>
        <Route path="/" element={<InvitationPage />} />
        <Route path="/welcome" element={<WelcomePage />} />
        
      </Routes>
    </div>
    </refContext.Provider>
  );
}

export default App;
