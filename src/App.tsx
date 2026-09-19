import { lazy, Suspense } from "react";
import "./App.css";

// Ensure this points to the file containing your "About Me" section/character model
const CharacterModel = lazy(() => import("./components/Character"));
const MainContainer = lazy(() => import("./components/MainContainer"));
const TechStack = lazy(() => import("./components/TechStack"));
import { LoadingProvider } from "./context/LoadingProvider";

const App = () => {
  return (
    <LoadingProvider>
      <Suspense fallback={<div>Loading...</div>}>
        <MainContainer>
          {/* 1. Renders your About Me / Intro section first */}
          <Suspense fallback={null}>
            <CharacterModel />
          </Suspense>
          
          {/* Scroll trigger threshold for the 3D physics */}
          <div id="work" style={{ width: "100%", height: "1px", clear: "both" }} />

          {/* 2. Renders your Tech Stack section directly below it */}
          <Suspense fallback={null}>
            <TechStack />
          </Suspense>
        </MainContainer>
      </Suspense>
    </LoadingProvider>
  );
};

export default App;