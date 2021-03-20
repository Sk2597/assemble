import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { Router } from '@angular/router';
// import { Part } from '../select-parts/part';

@Component({
  selector: 'app-assemble-parts',
  templateUrl: './assemble-parts.component.html',
  styleUrls: ['./assemble-parts.component.css']
})
export class AssemblePartsComponent implements OnInit {

  constructor(private router:Router) { }

  selectedParts:any =[]

  ngOnInit(): void {
    
    this.getData();

  }

  getData(){
    this.selectedParts = JSON.parse(localStorage.getItem("selectedParts") || "[]");
    console.log("In Assemble", this.selectedParts)
  }

  todo = [
    'Get to work',
    'Pick up groceries',
    'Go home',
    'Fall asleep'
  ];

  done:any = [
  ];

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }

  goto(){
    this.router.navigate(['finalproduct']);
  }
}

