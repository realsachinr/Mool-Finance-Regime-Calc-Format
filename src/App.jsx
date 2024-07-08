import "./App.css";
import Navbar from "./components/Navbar";
import FormPage from "./components/FormPage";
function App() {
  return (
    <div>
      <Navbar className="shadow-xl" />
      <FormPage />
    </div>
  );
}

export default App;
