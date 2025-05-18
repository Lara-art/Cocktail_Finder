import { BrowserRouter, Routes, Route } from 'react-router-dom';
import IndexPage from './views/indexPage.tsx';
import FavoritesPages from './views/FavoritesPage.tsx';
import Layout from './layouts/Layout.tsx';
export default function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout/>}> 
                {/*Layout estará para toda la página*/}
                <Route path='/' element={<IndexPage />} index/>
                <Route path='/favoritos' element={<FavoritesPages />} />
            </Route>
            </Routes>
        </BrowserRouter>
    );
}
