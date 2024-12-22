import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'Array_JS_methods';
   cars = [
    {
      "color": "green",
      "type": "Renaut",
      "capacity": 7
    },
    {
      "color": "red",
      "type": "Citroen",
      "capacity": 5
    },
    {
      "color": "blue",
      "type": "Peugeot",
      "capacity": 3
    },
   
  ]

  ngOnInit(): void {
    this.arrayMethods(this.cars);
  }

  arrayMethods(cars:{color:string,type:string,capacity:number}[]){

    //push item to array
    let car = {color :"green",type:"BWM",capacity:6}
    cars.push(car);

    //unshift : push item at first index of cars list
    let car1 = {color :"yellow",type:"Mercedes",capacity:4}
    this.cars.unshift(car1);

    //length array
    let array_size : number = this.cars.length;
    console.log("cars size : ",array_size);

    //pop : remove last item from cars array

    this.cars.pop();

    //shift : remove first car item from cars

    this.cars.shift()

    //index of item inside of cars
    let index : number = this.cars.indexOf(car1)
    console.log("index of car : ",index);

    //filter cars by capacity 

   let filtered_cars =  this.cars.filter(car=>car.capacity > 5)
   console.log("filtered cars : ",filtered_cars);

   //map cars
    let cars_types = this.cars.map(car=>car.type)
    console.log("car types : ",cars_types);

    //findIndex of item inside cars 

    let index1 = this.cars.findIndex(car=>car.color =="red")
    console.log("index of car with red color : ",index1);

    //find item inside cars :
    console.log("this.cars find : ",this.cars);
    let car2 : any = this.cars.find(car=>car.capacity == 6 && car.type =="BWM")
    console.log("car2 : ",car2);

    //some : return true or false depends on condition is valid
    let some_car : any = this.cars.some(car=>car.capacity == 6)
    console.log("some_car : ",some_car); 

    //every : return true or false depends on condition is valid for all cars
    let every_car : boolean = this.cars.every(car=>car.capacity>2)
    console.log("every_car :",every_car)

    //forEach : loop inside cars array 
    this.cars.forEach(car=>console.log("cars loop : ",car))



  }


}
