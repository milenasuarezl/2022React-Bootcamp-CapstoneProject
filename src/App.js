import './App.css';
//import { useFeaturedBanners } from './utils/hooks/useFeaturedBanners';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';

function App() {
  //const { data, isLoading } = useFeaturedBanners();
  // console.log(data, isLoading);

  return (
    <div className="App">
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
