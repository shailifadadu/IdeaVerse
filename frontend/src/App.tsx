import { Route, Routes, BrowserRouter } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Account from "./pages/Account";
function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/account" element={<Account />} />
          <Route path="/new-post" element={<h1>New Post</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
