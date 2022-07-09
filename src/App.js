import './App.css';
import Router from './Router';

import Header from './Components/Header/Header' 
import Footer from './Components/Footer/Footer';

function App() {

  return (
    <div>
      <Header/>
      <div className="container max-w-7xl mx-auto">
        <Router />
      </div>
      <Footer />
    </div>
  );
}

export default App;
