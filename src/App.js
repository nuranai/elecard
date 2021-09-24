import { useSelector } from "react-redux";
import Main from "./components/Main";
import Header from "./components/Header";
import Footer from "./components/Footer";
import './styles/styles.css'
import Tree from "./components/Tree";

function App() {
  const view = useSelector(state => state.view)

  return (
    <div>
      <Header />
      {view === 'card' ? <Main /> : <Tree />}
      <Footer />
    </div>
  );
}

export default App;
