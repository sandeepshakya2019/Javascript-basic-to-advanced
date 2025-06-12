import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Product from "./Pages/Product";
import Pricing from "./Pages/Pricing";
import Home from "./Pages/Home";
import PageNotFound from "./Pages/PageNotFound";

function App() {
    return (
        <BrowserRouter>
            <nav>
                <NavLink
                    to="/"
                    style={({ isActive }) => ({
                        fontWeight: isActive ? "bold" : "normal",
                        color: isActive ? "green" : "black",
                        marginRight: "10px",
                    })}
                >
                    Home
                </NavLink>

                <NavLink
                    to="/pricing"
                    style={({ isActive }) => ({
                        fontWeight: isActive ? "bold" : "normal",
                        color: isActive ? "green" : "black",
                        marginRight: "10px",
                    })}
                >
                    Pricing
                </NavLink>

                <NavLink
                    to="/product"
                    style={({ isActive }) => ({
                        fontWeight: isActive ? "bold" : "normal",
                        color: isActive ? "green" : "black",
                    })}
                >
                    Product
                </NavLink>
            </nav>

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
