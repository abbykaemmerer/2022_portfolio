import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  mockObj1 = {
    name: 'Abby',
    age: 12,
    city: 'Austin',
    employee: false
  };

  mockObj2 = {
    name: 'Matt',
    age: 16,
    city: 'St. Louis',
    employee: true
  };

  gridArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  // public selectedItem;
  public items = document.querySelectorAll(".item");

  constructor() { }

  ngOnInit(): void {
    this.compareTwoObjects(this.mockObj1, this.mockObj2);

    const original = document.getElementById("item-0");
    original?.classList.add('blue');
    this.createPhoneNumber([6,3,6,2,3,6,3,9,9,3]);
  }

  createPhoneNumber(arr: any[]){
    let num = '';
    arr = arr.map(String);
    num += arr[0] + arr[1] + arr[2] + '-' 
    + arr[3] + arr[4] + arr[5] + '-'
    + arr[6] + arr[7] + arr[8] + arr[9];
    console.log(num);
  }

  moveLeft(){
    // this.selectedItem = this.gridArray.
    // classList.add('item'+{number});

    console.log('clicked');

    // original?.classList.remove('blue');


    for (let i = 0; i < this.items.length ; i++) {
      console.log(this.items[i]);
      this.items[i].classList.add('blue')
    }


  }

  compareTwoObjects(obj1: Object, obj2: Object){
    let obj1Keys = Object.keys(obj1);
    let obj2Keys = Object.keys(obj2);
    if(obj1Keys[0] === obj2Keys[0]) {
      console.log(true);
    } else {
      console.log(false);
    }
  }

}
