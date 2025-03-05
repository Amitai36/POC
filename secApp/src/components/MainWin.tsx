import React, { useState } from "react";

function MainWin() {
  const [mainColor, setMainColor] = useState<string>("yellow");
  const [secSize, setSecSize] = useState<number>(500);

  return (
    <div style={{ height: "97vh", width: "97vw" , overflow:"hidden"}}>
      <div style={{position:"absolute", top:0}}>
        <input
          value={mainColor}
          onChange={(e) => setMainColor(e.target.value)}
        />
        <button
          onClick={() => {
            //@ts-ignore
            window.colors.changeMainBackgroundColor(mainColor);
          }}
        >
          change color
        </button>
        <input value={secSize} onChange={(e) => setSecSize(+e.target.value)} />
        <button
          onClick={() =>
            //@ts-ignore
            window.size.changeMainSize(secSize)
          }
        >
          change size
        </button>
      </div>
    </div>
  );
}

export default MainWin;
