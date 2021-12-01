import "./App.css";
import Sidebar from "./components/Sidebar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AboutUs } from "./pages/AboutUs";
import {
  Services,
  ServicesOne,
  ServicesTwo,
  ServicesThree,
} from "./pages/Services";
import { Events, EventsOne, EventsTwo } from "./pages/Events";
import Contact from "./pages/ContactUs";
import Support from "./pages/Support";
function App() {
  return (
    <Router>
      <Sidebar />
      <Routes>
        <Route path="/about-us" exact element={<AboutUs />} />
        <Route path="/services" exact element={<Services />} />
        <Route path="/services/services1" exact element={<ServicesOne />} />
        <Route path="/services/services2" exact element={<ServicesTwo />} />
        <Route path="/services/services3" exact element={<ServicesThree />} />
        <Route path="/contact" exact element={<Contact />} />
        <Route path="/events" exact element={<Events />} />
        <Route path="/events/events1" exact element={<EventsOne />} />
        <Route path="/events/events2" exact element={<EventsTwo />} />
        <Route path="/support" exact element={<Support />} />
      </Routes>
    </Router>
  );
}

export default App;
