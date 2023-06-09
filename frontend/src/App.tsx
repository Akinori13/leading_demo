import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import * as Sentry from "@sentry/react";

import Home from './pages/Home';
import Tweets from './pages/Tweets';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/tweets">Tweets</Link>
            </li>
        </ul>
        <Routes>
          <Route path="/" element={<Home username="SampleUser" />} />
          <Route path="/tweets" element={<Tweets />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default Sentry.withProfiler(App);
