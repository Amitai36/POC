import React, { useEffect, useState } from "react";

function MainWin() {
  const [mainColor, setMainColor] = useState<string>("yellow");
  const [secSize, setSecSize] = useState<number>(500);

  return (
    <>
      <input placeholder="enter color" value={mainColor} onChange={(e) => setMainColor(e.target.value)} />
      <button
        onClick={() => {
          //@ts-ignore
          window.colors.changeMainBackgroundColor(mainColor);
        }}
      >
        change color
      </button>
      <input placeholder="enter highet size px" value={secSize} onChange={(e) => setSecSize(+e.target.value)} />
      <button
        onClick={() =>
          //@ts-ignore
          window.size.changeMainSize(secSize)
        }
      >
        change size
      </button>
    </>
  );
}

export default MainWin;
