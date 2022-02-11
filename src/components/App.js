import './App.css';

//components
import { Header } from "./header/";
import { Footer } from "./footer/";

function App({children}) {
  return (
    <div className="App">
        <Header/>
        {children}
        <Footer/>
    </div>
  );
}
export default App;
