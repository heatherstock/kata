function aPrime(check) {
    if (check < 2) return false;
    for (let i = 2; i < check; i++)
        if (check % i === 0) return false;
    return true;
   }
   
   
   console.time('timer')
   const found = [];
   for (let x = 2;  found.length < 10001; x++) {
    if (aPrime(x)) found.push(x);
   }
   console.log(found.pop());
   console.timeEnd('timer');
