import React from "react";
import ScatterPlot from "./ScatterPlot";

const App: React.FC = () => {

  const data = [];
  for (let x = 0; x <= 1000; x += 100) {
    const y = Math.abs(x - 500);
    data.push({ x, y });
  }

  return (
    <div
      style={{
        alignItems: "center",
        justifyContent: "center",
        flex: 1,
        alignContent: "center",
        paddingLeft: 10,
        display: "flex",
      }}
    >
      <div style={{
        // height: 500,
        // width: 800,
      }} >
        <h1>Scatter Plot Chart</h1>
        <ScatterPlot data={data} />
      </div>
      <div style={{ marginLeft: 100 }} >
        <div>x   y</div>
        {data.map((item, ind) => {
          return (
            <div>
              {item.x} {item.y}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;
