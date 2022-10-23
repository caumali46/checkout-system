import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import ScannedItems from "./components/ScannedItems";
import CheckedOutItems from "./components/CheckedOutItems";

import AddItemForm from "./components/AddItemForm";
import NavBar from "./components/NavBar";
import Layout from "./components/Layout";

function App() {
  return (
    <div className="App bg-gray-100 ">
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Layout>
                <AddItemForm />
                <ScannedItems />
              </Layout>
            }
          />
          <Route
            path="/checkout"
            element={
              <Layout>
                <CheckedOutItems />
              </Layout>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
