import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import SobreMim from "./pages/SobreMim";
import Menu from "./componentes/Menu";
import Post from "pages/Post";
import Rodape from "componentes/Rodape";
import PaginaPadrao from "componentes/PaginaPadrao";
import NaoEncontrada from "pages/NaoEncontrada";


function AppRoutes() {
  return (
    <div>
        <BrowserRouter>
            <Menu />
            <Routes>
                <Route path="/" element={<PaginaPadrao />}>
                    <Route 
                      index
                      element={<Index />}
                    />
                    <Route 
                      path="sobremim"
                      element={<SobreMim />}
                    />
                </Route>

                <Route
                  path="posts/:id/*"
                  element={<Post />}   
                />

                <Route 
                  path="*"
                  element={<NaoEncontrada />}
                />
            </Routes>
            <Rodape />
        </BrowserRouter>
    </div>
  );
}

export default AppRoutes;
