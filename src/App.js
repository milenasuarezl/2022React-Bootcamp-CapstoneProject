//import { useFeaturedBanners } from './utils/hooks/useFeaturedBanners';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import GlobalContent from './GlobalContent.js';

function App() {
  // const { data, isLoading } = useFeaturedBanners();
  // console.log(data, isLoading);

  return (
    <GlobalContent>
      <Header />
      <Home />
      <Footer />
    </GlobalContent>
  );
}

export default App;
