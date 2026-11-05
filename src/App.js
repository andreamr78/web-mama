import 'bootstrap/dist/css/bootstrap.min.css';
import TopSite from './sites/TopSite';
import IntroSite from './sites/IntroSite'
import TravelSite from './sites/TravelsSite'
import InternationalSite from './sites/InternationalSite'
import CatalogSite from './sites/CatalogSite'
import SocialSites from './sites/SocialSites'
import './styles/GlobalStyles.css';

function App() {
  return (
    <div>
      <TopSite/>
      <IntroSite/>
      <TravelSite/>
      <InternationalSite/>
      <CatalogSite/>
      <SocialSites/>
    </div>
  );
}

export default App;
