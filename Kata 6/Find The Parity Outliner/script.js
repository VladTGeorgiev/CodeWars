const ingetersGroupOne = [2, 4, 0, 100, 4, 11, 2602, 36]
// Should return: 11 (the only odd number)

const ingetersGroupTwo = [160, 3, 1719, 19, 11, 13, -21]
// Should return: 160 (the only even number)

function findOutlier(integers){
    let outliner;
    const tempOne =[];
    const tempTwo = [];
    for ( let i = 0; i < integers.length; i++ ) {
        if (integers[i] % 2 === 0){
            tempOne.push(integers[i])
        } else {
            tempTwo.push(integers[i])
        }
    }
    if (tempOne.length > tempTwo.length) {
        outliner = tempTwo
    } else {
        outliner = tempOne
    }
    console.log(parseInt(outliner));
};

findOutlier(ingetersGroupOne); // 11
findOutlier(ingetersGroupTwo); // 160