import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CardProvider } from 'context/CardContex';
import Home from 'pages/Home/Home';
import Cards from 'pages/Cards/Cards';
import { GlobalStyles } from 'styles/global-styles';

const App = () => {
  return (
    <CardProvider>
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="cards" element={<Cards />} />
          </Routes>
        </div>
      </BrowserRouter>
      <GlobalStyles />
    </CardProvider>
  );
}

export default App;
