import { useState, useRef, useEffect } from "react";
import BrowseRecommend from "./BrowseRecommend";
export default function Browser() {
  const browserRef = useRef("test");
  console.log(browserRef);

  function change(e) {
    browserRef.current = e.target.value;
    console.log(browserRef);
  }

  return (
    <div>
      <input type="text" id="browser" ref={browserRef} onChange={change} />
      <BrowseRecommend />
    </div>
  );
}
