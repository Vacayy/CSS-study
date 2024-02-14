import { Route, Routes } from "react-router-dom";
import TextAni from './text-bg-animation/TextAni';
import UserPage from "./text-bg-animation/UserPage";
import ScrollPage from "./text-bg-animation/ScrollPage";
import LandingTest from "./text-bg-animation/LandingTest";
import ScrollPageA from "./text-bg-animation/ScrollPageA";

function App() {
  return (

    <Routes>
      <Route path="/textani" element={<TextAni />} />
      <Route path="/userpage" element={<UserPage />} />
      <Route path="/scroll" element={<ScrollPage />} />
      <Route path="/landing-one" element={<LandingTest />} /> 
      <Route path="/scroll-a" element={<ScrollPageA />} /> 

    </Routes>

  );
}

export default App;