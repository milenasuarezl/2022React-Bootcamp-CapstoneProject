//import { useFeaturedBanners } from './utils/hooks/useFeaturedBanners';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import GlobalContent from './GlobalContent.js';
import ProductList from './pages/Home/ProductList';
import { useState } from 'react';

function App() {
  // const { data, isLoading } = useFeaturedBanners();
  // console.log(data, isLoading);

  const [ isVIsiblePage, setVisiblePage ] = useState('Home');
  let visiblePage;

  visiblePage = (isVIsiblePage === 'Home') 
    ? <Home onClick={() => setVisiblePage('ProductList')}/>
    : <ProductList />

  return (
    <GlobalContent>
      <Header onClick={() => setVisiblePage('Home')} />
      { visiblePage }
      <Footer />
    </GlobalContent>
  );
}

export default App;
