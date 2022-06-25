import { Component, OnInit } from '@angular/core';
import { Animal } from '../Classes/Animal';
import {FormsModule } from '@angular/forms';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-app-animals',
  templateUrl: './app-animals.component.html',
  styleUrls: ['./app-animals.component.css']
})
export class AppAnimalsComponent implements OnInit {

    closeResult!: string;
  myform: any;

  constructor(
    private httpClient:HttpClient,
    private modalService: NgbModal
    ) { }

  ngOnInit():void {
  }
 
  newAnimal: Animal = new Animal();

  AddOrEdit: boolean = false;

  //מערך תמונות
  arrPic:any[]=[
    "assets/Images/cat.jpg",
    "assets/Images/giraffe.jpg",
    "assets/Images/bird.jpg",
    "assets/Images/fish.jpg",
    "assets/Images/horse.jpg",
    "assets/Images/tigger.jpg"
  ]
  //מערך חיות
    allAnimals: Array<Animal> = [
      new Animal(1234,"Cat",3,true,this.arrPic[0]),
      new Animal(5289,"Giraffe",4,true,this.arrPic[1]),
      new Animal(1593,"Bird",7,true,this.arrPic[2]),
      new Animal(7531,"Fish",9,true,this.arrPic[3]),
      new Animal(9874,"Horse",2,true,this.arrPic[4]),
      new Animal(2578,"Tigger",5,true,this.arrPic[5])
    ]

    OKForm():void{
      for (let index = 0; index < this.allAnimals.length; index++) {
        let element = this.allAnimals[index];
        if(this.newAnimal.id==element.id){
          this.allAnimals[index]={...this.newAnimal}
          return;
        }
      }
      this.allAnimals.push(this.newAnimal)
    }
    //עדכון טופס
    update(j:Animal):void{
      this.AddOrEdit=true
      this.newAnimal={...j}
    }
    //ריקון טופס לאחר הוספה
    resetForm():void{
      this.myform.reset();
    }
    //פתיחת טופס
    open(content:any) {
     this.AddOrEdit=!this.AddOrEdit
      this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
        this.closeResult = `Closed with: ${result}`;
      }, (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
         this.resetForm();
      });
    }
    
    private getDismissReason(reason: any): string {
      if (reason === ModalDismissReasons.ESC) {
        return 'by pressing ESC';
      } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
        return 'by clicking on a backdrop';
      } else {
        return `with: ${reason}`;
      }
    }
  
}
