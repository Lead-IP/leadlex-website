/**
 * pages.config.js - Page routing configuration
 * 
 * This file is AUTO-GENERATED. Do not add imports or modify PAGES manually.
 * Pages are auto-registered when you create files in the ./pages/ folder.
 * 
 * THE ONLY EDITABLE VALUE: mainPage
 * This controls which page is the landing page (shown when users visit the app).
 * 
 * Example file structure:
 * 
 *   import HomePage from './pages/HomePage';
 *   import Dashboard from './pages/Dashboard';
 *   import Settings from './pages/Settings';
 *   
 *   export const PAGES = {
 *       "HomePage": HomePage,
 *       "Dashboard": Dashboard,
 *       "Settings": Settings,
 *   }
 *   
 *   export const pagesConfig = {
 *       mainPage: "HomePage",
 *       Pages: PAGES,
 *   };
 * 
 * Example with Layout (wraps all pages):
 *
 *   import Home from './pages/Home';
 *   import Settings from './pages/Settings';
 *   import __Layout from './Layout.jsx';
 *
 *   export const PAGES = {
 *       "Home": Home,
 *       "Settings": Settings,
 *   }
 *
 *   export const pagesConfig = {
 *       mainPage: "Home",
 *       Pages: PAGES,
 *       Layout: __Layout,
 *   };
 *
 * To change the main page from HomePage to Dashboard, use find_replace:
 *   Old: mainPage: "HomePage",
 *   New: mainPage: "Dashboard",
 *
 * The mainPage value must match a key in the PAGES object exactly.
 */
import AITransparency from './pages/AITransparency';
import CompareClio from './pages/CompareClio';
import CompareHubSpot from './pages/CompareHubSpot';
import CompareInterAction from './pages/CompareInterAction';
import CompareLawmatics from './pages/CompareLawmatics';
import CompareNexl from './pages/CompareNexl';
import LexiAI from './pages/LexiAI';
import Contact from './pages/Contact';
import DataProcessing from './pages/DataProcessing';
import FAQ from './pages/FAQ';
import Home from './pages/Home';
import LinkedInBanner from './pages/LinkedInBanner';
import Pricing from './pages/Pricing';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import TryLeadLex from './pages/TryLeadLex';
import UseCaseAssociates from './pages/UseCaseAssociates';
import UseCaseBD from './pages/UseCaseBD';
import UseCaseManagement from './pages/UseCaseManagement';
import UseCasePartners from './pages/UseCasePartners';
import __Layout from './Layout.jsx';


export const PAGES = {
    "AITransparency": AITransparency,
    "CompareClio": CompareClio,
    "CompareHubSpot": CompareHubSpot,
    "CompareInterAction": CompareInterAction,
    "CompareLawmatics": CompareLawmatics,
    "CompareNexl": CompareNexl,
    "Contact": Contact,
    "DataProcessing": DataProcessing,
    "FAQ": FAQ,
    "Home": Home,
    "LexiAI": LexiAI,
    "LinkedInBanner": LinkedInBanner,
    "Pricing": Pricing,
    "Privacy": Privacy,
    "Terms": Terms,
    "TryLeadLex": TryLeadLex,
    "UseCaseAssociates": UseCaseAssociates,
    "UseCaseBD": UseCaseBD,
    "UseCaseManagement": UseCaseManagement,
    "UseCasePartners": UseCasePartners,
}

export const pagesConfig = {
    mainPage: "Home",
    Pages: PAGES,
    Layout: __Layout,
};