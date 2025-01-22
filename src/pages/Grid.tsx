import { useState } from 'react';

const Grid = () => {
  const [colors, setColors] = useState(Array(9).fill('bg-blue-900'));
  const [clickOrder, setClickOrder] = useState<number[]>([]);

  const handleSquareClick = (index: number) => {
    const newColors = [...colors];
    newColors[index] = 'bg-red-500';
    setColors(newColors);
    setClickOrder([...clickOrder, index]);

    if (index === 8) {
      setTimeout(() => {
        const resetColors = [...colors];
        clickOrder.forEach((i, idx) => {
          setTimeout(() => {
            resetColors[i] = 'bg-blue-900';
            setColors([...resetColors]);
          }, idx * 100);
        });
        setClickOrder([]);
      }, 500);
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full h-[120vh] md:h-full md:px-24 md:py-24 lg:px-40 lg:py-36 px-4 py-24">
      <div className="col-span-1 md:col-span-2 lg:col-span-1 w-full h-80 bg-gradient-to-br from-[#3C01FF] to-[#F100FF] rounded-2xl shadow-md shadow-black-800/55">
      </div>
      <div className="col-span-1 w-full h-80 rounded-2xl shadow-md shadow-black-800/55 flex items-center justify-center">
        <img src="/Grid/ecell.png" alt="E-cell Logo" className="w-full h-full object-contain" />
      </div>
      <div className="col-span-1 w-full h-80 rounded-2xl shadow-inner shadow-black-800/55 grid grid-cols-3 gap-4 p-6">
        {colors.map((color, index) => (
          <div
            key={index}
            className={`w-full h-full ${color} rounded cursor-pointer`}
            onClick={() => handleSquareClick(index)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Grid;
