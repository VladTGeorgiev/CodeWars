const first = [1,1,1,1] // return [1,1] with limit 2

const second = [20,37,20,21] // return [20,37,21] with limit 1

function deleteNth(arr,n){
    new_arr = [];
    const counts = [];
    arr.forEach(function(el) {
      counts[el] = (counts[el] || 0)+1;
      if (counts[el] <= n) {
          new_arr.push(el);
      }
    });
    console.log(new_arr);
}

deleteNth(first, 2) // [ 1, 1 ]

deleteNth(second, 1) // [ 20, 37, 21 ]