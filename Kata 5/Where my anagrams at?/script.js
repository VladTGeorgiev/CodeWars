function anagrams (word, words) {
	const destructuredWord = {};
	for (let i = 0; i < word.length; i++) {
		let char = word[i];
		if (destructuredWord[char] === undefined) {
			destructuredWord['word'] = word;
			destructuredWord[char] = 1;
		} else {
			destructuredWord[char] = destructuredWord[char] + 1;
		}
	}

	const wordsArrayOfObjects = [];
	words.forEach((element) => {
		const destructuredWords = {};
		for (let i = 0; i < element.length; i++) {
			let char = element[i];
			if (destructuredWords[char] === undefined) {
				destructuredWords['word'] = element;
				destructuredWords[char] = 1;
			} else {
				destructuredWords[char] = destructuredWords[char] + 1;
			}
		}
		wordsArrayOfObjects.push(destructuredWords);
	});

	const result = [];
	wordsArrayOfObjects.forEach((element) => {
		let matchingWord = element.word;
		element['word'] = word;
		if (
			Object.keys(destructuredWord).length === Object.keys(element).length &&
			Object.keys(destructuredWord).every((char) => destructuredWord[char] === element[char])
		) {
			result.push(matchingWord);
		}
	});
	return result;
}

anagrams('abba', [ 'aabb', 'abcd', 'bbaa', 'dada' ]); // => ['aabb', 'bbaa']

anagrams('racer', [ 'crazer', 'carer', 'racar', 'caers', 'racer' ]); // => ['carer', 'racer']

anagrams('laser', [ 'lazing', 'lazy', 'lacer' ]); // => []
