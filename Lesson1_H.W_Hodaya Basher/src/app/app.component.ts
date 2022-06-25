import { Component, OnInit } from '@angular/core';
import { Car } from './Classes/Car';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  myFirstName: String = "Hodaya"
  myLastName: String = "Basher"
  nameOfProject:String="Car's info"

  ngOnInit(): void {

  }
  //car array
  ArrCars:Car[]=[
    new Car("74185296", "Toyota", 2019,true),
    new Car("98765432", "Nissan", 2018,false),
    new Car("12345678", "Tesla",2022,true),
    new Car("25885236", "Jeep", 2020,true),
    new Car("18529647", "Audi", 2019,false),
    new Car("12345678", "Ford",2015,true)
  ]

    //get the name company by car's id
    nameCompanyFunc(id:string): void {
      this.ArrCars.forEach(element => {
        if (element.getCarId() == id) 
          alert(element.getCompanyName())
      });
      
    }

  
    changeStatus(id:string):void{
      this.ArrCars.forEach(element => {
        if (element.getCarId() == id) 
          element.setPassedTestInLastYear(!element.getPassedTestInLastYear())
      });
    }
  
  constructor() {


  }

}
