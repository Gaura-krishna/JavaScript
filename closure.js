function outer() {
    const a = "Hello ";

    function inner() {
      const b = "World"; 
      console.log(a+b);
    }
    return inner;
 }
 const greet = outer()
 greet()