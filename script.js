// Complete the js 
function Car(make, model) {
	this.make=make;
	this.model=model;
}
Car.protorype.getMakeModel=function() {
	return this._make+ " " +this.model;
	
};

function SportsCar(make, model, topSpeed) {
	Car.call(this,make,model);
	this.topSpeed=topSpeed;
}
SportsCar.prototype=Object.create(Car.prototype);
SportsCar.prototype.constructor=SportsCar;
SportsCar.prototype.getTopSpeed=function(){
	return this.topSpeed;
}

// Do not change the code below
window.Car = Car;
window.SportsCar = SportsCar;
