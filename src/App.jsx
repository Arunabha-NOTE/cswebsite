import {BrowserRouter, Route, Routes} from 'react-router-dom'
import './App.css';
import Home from "./Pages/Home";
import About from "./Pages/About";
import Event from "./Pages/Event";
import ImageGallery from "./Pages/ImageGallery";

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/event" element={<Event />} />
                    <Route path="/image-gallery" element={<ImageGallery />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;