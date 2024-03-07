let monitorCount = function(rows, columns){
  return (rows * columns)
}

const numOfMonitors = monitorCount(5,4);

console.log(numOfMonitors);


function monitorCount(rows, columns) {
  const numOfMonitors = rows * columns;
  return numOfMonitors;
}

console.log(monitorCount(5,4))



function multiplyByNineFifths(number) {
  return number * (9/5);
};

function getFahrenheit(celsius) {
  return multiplyByNineFifths(celsius) + 32;
};

getFahrenheit(15); // Returns 59
