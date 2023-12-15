//calling a other function by Call keyword
function Car(type, fuelType){
	this.type = type;
	this.fuelType = fuelType;
}
function setBrand(brand){
	Car.call(this, "convertible", "petrol");
    // by using call keyword we have to pass one arguments as "this" keyword
    // for Car.call 
    //      ^ 
    //this.type = type;
	//this.fuelType = fuelType;
    //      +
	this.brand = brand;
	console.log(`Car details = `, this);
}
const newBrand = new setBrand('BMW');






// //calling a other function by Apply keyword
// function Cartype(type, fuelType){
// 	this.type = type;
// 	this.fuelType = fuelType;
// }
// function setModel(model){
// 	Cartype.apply(this, ["convertible", "petrol"]);
//     // by using apply keyword we have to pass one arguments as "this" keyword and reamining in array []
//     // for Cartype.apply 
//     //      ^ 
//     //this.type = type;
// 	//this.fuelType = fuelType;
//     //      +
// 	this.model = model;
// 	console.log(`Car details = `, this);
// }
// function definePrice(price){
// 	Cartype.apply(this, new Array("convertible", "diesel")); //Syntax with array object construction
// 	this.price = price;
// 	console.log(`Car details = `, this);
// }
// const newModel = new setModel('BMW suv');
// const newprice = new definePrice(1000000)




