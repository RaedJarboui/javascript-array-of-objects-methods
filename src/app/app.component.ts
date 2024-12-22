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
      color: "green",
      type: "Renaut",
      capacity: 7
    },
    {
      color: "red",
      type: "Citroen",
      capacity: 5
    },
    {
      color: "blue",
      type: "Peugeot",
      capacity: 3
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

    //splice : add element
    this.cars.splice(2,0,{  color: "grey",
      type: "KIA",
      capacity:5})
      console.log("this cars after splice :",this.cars)

      //splice : remove element by index 

      this.cars.splice(3,1)
      console.log("this.cars after splice to remove element : ",this.cars)


    //sort

    let sorted_cars_color = this.cars.sort((car1,car2)=>(car1.color.localeCompare(car2.color)))
    console.log("sorted cars by color :",sorted_cars_color)
    let sorted_cars_capacity = this.cars.sort((car1,car2)=>car1.capacity - car2.capacity)
    console.log("sorted cars by capacity :",sorted_cars_capacity)

    //slice
    console.log("cars array before slice : ",this.cars)
    let slice_car = this.cars.slice(1)
    console.log("slice_car : ",slice_car)
    let slice_car_2 = this.cars.slice(0,2)
    console.log("slice_car_2 : ",slice_car_2)




  }


}
