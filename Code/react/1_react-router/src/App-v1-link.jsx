import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Product from "./Pages/Product";
import Pricing from "./Pages/Pricing";
import Home from "./Pages/Home";
import PageNotFound from "./Pages/PageNotFound";

function App() {
    return (
        <BrowserRouter>
            <div>
                <h2>Tabs</h2>
                <Link to="/">Home</Link>
                <Link to="/pricing">Pricing</Link>
                <Link to="/product">Product</Link>
            </div>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/product" element={<Product />} />
                <Route path="/pricing" element={<Pricing />} />
                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
