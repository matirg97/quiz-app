
import './App.css';
import Main from './Main/Main';
import Footer from './Footer/Footer';

function App() {
  return (
    <div className="App">
      <Main className="mainComponent"/>
      <div className='footerCmp'>
      <Footer className="footerComponent" />
      </div>
    </div>
  );
}

export default App;
