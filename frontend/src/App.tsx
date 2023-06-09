import { BrowserRouter, Routes, Route } from "react-router-dom";
import * as Sentry from "@sentry/react";

import Home from './pages/Home';
import Tweets from './pages/Tweets';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home username="SampleUser" />} />
          <Route path="/tweets" element={<Tweets />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default Sentry.withProfiler(App);
