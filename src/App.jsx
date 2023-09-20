import {BrowserRouter, Route, Routes} from 'react-router-dom'
import './App.css';
import Home from "./Pages/Home";
import About from "./Pages/About";
import Event from "./Pages/Event";
import ImageGallery from "./Pages/ImageGallery";
import FourZeroFour from "./Pages/404";

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/event" element={<Event />} />
                    <Route path="/image-gallery" element={<ImageGallery />} />
                    <Route path="/404" element={<FourZeroFour />} />
                    <Route path="/*" element={<FourZeroFour />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;