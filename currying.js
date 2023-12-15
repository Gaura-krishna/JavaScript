// currying basically nested functions which single argument to each fuction 

//normal function
const add = (a, b, c) => {
    let z = a + b + c
    console.log(z)
}
//invoking function
add(1, 2, 3)

//currying function
const sum = (a) => {
    return (b) => {
        return (c) => {
            return console.log(a+b+c)
        }
    }
}
sum(1)(2)(5)