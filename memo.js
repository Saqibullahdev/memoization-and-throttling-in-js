function sum(n) {
    var sum = 0;
    for (var i = 0; i <= n; i++) { // Use <= instead of <
      sum += i;
    }
    return sum;
  }
  
  /***
   * If the value of n is already in cache, then return the value from cache
   * Else, calculate the result and store it in cache
   */
  function memoizedSumFunction(fn) {
    var cache = {};
    return function (n) {
      if (n in cache) {
        console.log("Fetching from cache");
        return cache[n];
      } else {
        console.log("Calculating result");
        var result = fn(n);
        cache[n] = result;
        return result;
      }
    };
  }
  
  const memoizedSum = memoizedSumFunction(sum);
  console.time();
  console.log(memoizedSum(5)); // Calculating result
  console.timeEnd();
  
  console.time();
  console.log(memoizedSum(5)); // Fetching from cache
  console.timeEnd();
  