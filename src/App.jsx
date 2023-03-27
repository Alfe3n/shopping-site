import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Page1 } from "./page1/p1";
import { Page2 } from "./page2/p2";
import { Page3 } from "./page3/p3";
import { Notfound } from "./error/notfound";
import { Page4 } from "./page4/p4";
import { Page5 } from "./page5/p5";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Page1 />} />
        <Route path="/about" element={<Page2 />} />
        <Route path="/products" element={<Page3 />} />
        <Route exact path="products/individual/:id" element={<Page4 />}></Route>
        <Route path="/cart" element={<Page5 />} />
        <Route path="*" element={<Notfound />}></Route>
      </Routes>
    </div>
  );
}

export default App;
