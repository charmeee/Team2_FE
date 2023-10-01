import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/Login';
import Layout from './common/templates/Layout';
import LandingPage from './pages/Landing';
import Canvas from './pages/Canvas';
import AlbumCreationPage from './pages/Album/AlbumCreate';

const Router = () => (
    <BrowserRouter>
        <Routes>
            <Route element={<Layout />}>
                <Route path="/" element={<LandingPage />} />
                <Route path="albumcreate" element={<AlbumCreationPage/>}/>
            </Route>
            <Route path="login" element={<LoginPage />} />
            <Route path="canvas" element={<Canvas />} />
        </Routes>
    </BrowserRouter>
);

export default Router;
