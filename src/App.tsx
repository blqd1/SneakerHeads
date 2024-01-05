import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Accesories from "./pages/Accesories";
import Women from "./pages/Women";
import Men from "./pages/Men";
import Children from "./pages/Children";
function App() {
    return (
        <div className="bg-gray-200 font-fjalla">
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/women" element={<Women />} />
                <Route path="/men" element={<Men />} />
                <Route path="/children" element={<Children />} />
                <Route path="/accesories" element={<Accesories />} />
            </Routes>
        </div>
    );
}

export default App;
