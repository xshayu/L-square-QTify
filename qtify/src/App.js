import './App.css';
import HomePage from './components/Pages/Home/Home';
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" Component={HomePage} />
      </Routes>
    </>
  );
}

export default App;
