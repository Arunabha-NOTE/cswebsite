import {BrowserRouter, Route, Routes} from 'react-router-dom'
import './App.css';
import Home from "./pages/Home";
import About from "./pages/About";
import Event from "./pages/Event";
import ImageGallery from "./pages/ImageGallery";
import FourZeroFour from "./pages/404";

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