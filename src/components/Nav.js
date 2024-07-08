import { useState, useRef, useEffect } from "react";

export default function Nav() {
  const browserRef = useRef("test");
  console.log(browserRef);

  function change(e) {
    browserRef.current = e.target.value;
    console.log(browserRef);
  }

  return (
    <nav>
      <div>
        <input type="text" id="browser" ref={browserRef} onChange={change} />
      </div>
    </nav>
  );
}
