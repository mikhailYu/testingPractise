function analyze(obj) {
  const objectInput = obj;

  function getAverage() {
    return (
      objectInput.reduce((partialSum, a) => partialSum + a, 0) /
      objectInput.length
    );
  }

  function getMin() {
    return Math.min(...objectInput);
  }

  function getMax() {
    return Math.max(...objectInput);
  }

  const averageCalc = getAverage(),
    minNum = getMin(),
    maxNum = getMax();
  let objectOutput = {
    average: averageCalc,
    min: minNum,
    max: maxNum,
    length: objectInput.length,
  };
  return objectOutput;
}
module.exports = analyze;
