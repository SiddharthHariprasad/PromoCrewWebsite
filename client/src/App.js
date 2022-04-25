import Main from './components/Main';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      {/* Navbar (header region of the visible body) */}
      <Header />
      
      {/* main content div that can be modified to dynamically include content (dynamicity not yet set up) */}
      <Main />
      
      {/* Footer */}
      <Footer />
    </div>
  );
}
export default App;