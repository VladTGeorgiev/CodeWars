function flatten (...names) {
	const result = [];
	function deepFlatten (names) {
		for (let i = 0; i < names.length; ++i) {
			if (!Array.isArray(names[i])) {
				result.push(names[i]);
			} else {
				for (let j = 0; j < names[i].length; ++j) {
					if (!Array.isArray(names[i][j])) {
						result.push(names[i][j]);
					} else {
						deepFlatten(names[i][j]);
					}
				}
			}
		}
	}
	deepFlatten(names);
	console.log(result);
}

flatten(1, [ 2, 3 ], 4, 5, [ 6, [ 7 ] ]); // returns [1, 2, 3, 4, 5, 6, 7]

flatten('a', [ 'b', 2 ], 3, null, [ [ 4 ], [ 'c' ] ]); // returns ['a', 'b', 2, 3, null, 4, 'c']
