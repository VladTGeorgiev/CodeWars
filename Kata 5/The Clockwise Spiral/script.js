function createSpiral (N) {
	if (Number.isInteger(N)) {
		let result = new Array(N).fill().map(() => new Array(N).fill(''));
		let counter = 1;
		let startCol = 0;
		let endCol = N - 1;
		let startRow = 0;
		let endRow = N - 1;
		while (startCol <= endCol && startRow <= endRow) {
			for (let i = startCol; i <= endCol; i++) {
				result[startRow][i] = counter;
				counter++;
			}
			startRow++;
			for (let i = startRow; i <= endRow; i++) {
				result[i][endCol] = counter;
				counter++;
			}
			endCol--;
			for (let i = endCol; i >= startCol; i--) {
				result[endRow][i] = counter;
				counter++;
			}
			endRow--;
			for (let i = endRow; i >= startRow; i--) {
				result[i][startCol] = counter;
				counter++;
			}
			startCol++;
		}
		return result;
	} else {
		return (result = []);
	}
}

createSpiral(3);

createSpiral(4);

createSpiral(5);
