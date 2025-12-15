import Home from './pages/Home';
import Pricing from './pages/Pricing';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';
import DataProcessing from './pages/DataProcessing';
import AITransparency from './pages/AITransparency';
import __Layout from './Layout.jsx';


export const PAGES = {
    "Home": Home,
    "Pricing": Pricing,
    "Terms": Terms,
    "Privacy": Privacy,
    "DataProcessing": DataProcessing,
    "AITransparency": AITransparency,
}

export const pagesConfig = {
    mainPage: "Home",
    Pages: PAGES,
    Layout: __Layout,
};