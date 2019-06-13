export class CellularAutomata {
  constructor(numberOfCells, rule) {
    const cells = [];
    for (let i = 0; i < numberOfCells; i++) {
      cells.push(0);
    }
    if (numberOfCells % 2 === 0)
      cells[numberOfCells / 2] = 1;
    else
      cells[(numberOfCells - 1) / 2] = 1;

    this.cells = cells;
    this.binaryRule = rule.toString(2).padStart(8, "0");
  }

  iterate = (numberOfIterations) => {
    const automataState = [];
    for (let i = 0; i < numberOfIterations; i++) {
      automataState.push(this.cells);
      this.cells = this.getNextIterationCells()
    }
    return automataState;
  };

  getNextIterationCells = () => {
    let newCells = [];
    for (let j = 0; j < this.cells.length; j++) {
      if (j === 0)
        newCells.push(
          this.getNextCellState(
            1,
            this.cells[j],
            this.cells[j + 1],
            this.binaryRule
          )
        );
      else if (j === this.cells.length - 1)
        newCells.push(
          this.getNextCellState(
            this.cells[j - 1],
            this.cells[j],
            1,
            this.binaryRule
          )
        );
      else
        newCells.push(
          this.getNextCellState(
            this.cells[j - 1],
            this.cells[j],
            this.cells[j + 1],
            this.binaryRule
          )
        );
    }
    return newCells
  }

  getNextCellState = (leftNeighbourVal, cellVal, rightNeighbourVal, rule) => {
    const actualCellState = String.prototype.concat(
      leftNeighbourVal.toString(),
      cellVal.toString(),
      rightNeighbourVal.toString()
    );

    switch (actualCellState) {
      case "111":
        return parseInt(rule[0]);
      case "110":
        return parseInt(rule[1]);
      case "101":
        return parseInt(rule[2]);
      case "100":
        return parseInt(rule[3]);
      case "011":
        return parseInt(rule[4]);
      case "010":
        return parseInt(rule[5]);
      case "001":
        return parseInt(rule[6]);
      case "000":
        return parseInt(rule[7]);
      default:
        return 0;
    }
  };
}


export const tryParseInputs = (numberOfCells, numberOfIterations, rule) => {
  const parsedIterations = parseInt(numberOfIterations)
  const parsedCells = parseInt(numberOfCells)
  const parsedRule = parseInt(rule)
  if (isNaN(parsedCells) || isNaN(parsedIterations) || isNaN(parsedRule))
    throw Error("Wprowadzone wartości nie są liczbami")

  return { parsedCells, parsedIterations, parsedRule }
}

