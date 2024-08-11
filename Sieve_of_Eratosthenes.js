function sieve (num) {

     const arr = [];
     const prime = [];

     for (let i = 0; i<=num; i++) {
         arr.push(i);
     }
    
for (let i=2; i<=arr.length; i++) {
    if(arr[i] !== false) {
        prime.push(arr[i])
    }
    
    for (let j = i + i; j < arr.length; j += i) {
        arr[j] = false;
    }
}
 
     return prime;
 }
console.log(sieve(400));