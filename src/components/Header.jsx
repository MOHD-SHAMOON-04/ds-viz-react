import { useState } from 'react';
import { Link } from 'react-router-dom';
export default function Header() {
  const [text, setText] = useState('DSV');

  return (
    <>
      <Link to="/" >
        <h1 className="headerStyle text-xl sm:text-4xl font-normal font-sans cursor-pointer" >
          <span
            onMouseMove={() => {
              setText("Data Structures Visualizer");
            }}
            onMouseLeave={() => {
              setText("DSV");
            }}
          >
            {text}
          </span>
        </h1>
      </Link>
    </>
  )
}
