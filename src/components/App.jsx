import Header from "./Header";
import Navbar from "./Navbar";
import Switch from './Switch';

import { Routes, Route } from 'react-router-dom';
import BSTree from "../pages/BSTree";
import LinkedList from "../pages/LinkedList";
// import ExprTree from "../pages/ExprTree";
// import Heap from "../pages/Heap";
import Home from "../pages/Home";


function App() {

  return (
    <>
      <div className='bg-blue-300 dark:bg-gray-900 sm:p-4 p-2 flex justify-between items-center'>
        <Header />
        <div className="flex items-center gap-8">
          <Switch />
          <Navbar />
        </div>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/binary-search-tree" element={<BSTree />} />
        <Route path="/linked-list" element={<LinkedList />} />
        {/* <Route path="/expression-tree" element={<ExprTree />} /> */}
        {/* <Route path="/heap" element={<Heap />} /> */}
      </Routes>
    </>
  )
}

export default App;