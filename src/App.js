import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import { AppRouter } from './router/AppRouter';
import { Header } from './layout/Header';
import { Footer } from './layout/Footer';

function App() {
  return (
    <Router >
      <div className='flex flex-col max-w-[1480px] mx-auto min-h-screen'>
        <Header />
        <AppRouter />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
