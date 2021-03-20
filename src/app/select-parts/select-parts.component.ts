import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {SelectPartsService} from './select-parts.service';
import {Part} from './part'

@Component({
  selector: 'app-select-parts',
  templateUrl: './select-parts.component.html',
  styleUrls: ['./select-parts.component.css']
})
export class SelectPartsComponent implements OnInit {

  constructor(private router:Router,
    private selectPartsService : SelectPartsService) { 
    }

  ngOnInit(): void {
  }

  // productParts = ['shoe', 'boots','Loafers','heels','mocassins']

  part: Part = {
    name: 'Select All',
    selected: false,
    color: 'primary',
    subparts: [
      {name: 'LeftWheel', selected: false, color: 'primary', image:'assets/images/LeftWheel.jpg'},
      {name: 'Trunk', selected: false, color: 'primary', image:'assets/images/Trunk.jpg'},
      {name: 'RightWheel', selected: false, color: 'primary', image:'assets/images/RightWheel.jpg'},
      {name: 'Roof', selected: false, color: 'primary', image:'assets/images/Roof.jpg'},
      {name: 'Hood', selected: false, color: 'primary', image:'assets/images/Hood.jpg'},
      {name: 'Floor', selected: false, color: 'primary',image:'assets/images/Floor.jpg'},
      
    ],
    image : 'string'
  };

  allSelected: boolean = false;
  selectedPartNames:any = []
  selectedParts:any = []
  canPush :boolean = false;

  updateAllSelected() {
    this.allSelected = this.part.subparts != null && this.part.subparts.every(t => t.selected)
    console.log('this.all selected', this.allSelected)
    // debugger;
    console.log("before selected parts", this.selectedParts)
    if(this.part.subparts)
    this.part.subparts.forEach(t => {
      // t.selected&&
      let index = this.selectedPartNames.indexOf(t.name);
      // console.log('index for name',index,t.name)
      // console.log('t.selected and name',t.selected,t.name)
      if(t.selected&&index===-1){
          // val not found, pushing onto array
          this.selectedPartNames.push(t.name);
          this.selectedParts.push(t);
          // console.log("if selected parts names", this.selectedPartNames)
          // console.log("if selected parts", this.selectedParts)
      } 

      else if(!t.selected&&index!=-1){
        // val is found, removing from array
        this.selectedPartNames.splice(index,1);
        this.selectedParts.splice(index,1);
        // console.log("else selected part names", this.selectedPartNames)
        // console.log("else selected parts", this.selectedParts)
      }
      }
    )
    console.log("final selected parts", this.selectedParts)
    // console.log('selected parts', this.part.subparts)
    // this.pushElement(this.part.subparts);
  }

  someSelected(): boolean {
    if (this.part.subparts == null) {
      return false;
    }
    return this.part.subparts.filter(t => t.selected).length > 0 && !this.allSelected;
  }

  setAll(selected: boolean) {
    this.allSelected = selected;
    if (this.part.subparts == null) {
      return;
    }
    this.part.subparts.forEach(t => t.selected = selected);
    console.log('set all selected', this.allSelected)
  }

  saveOptions() {
    this.router.navigate(['assembleparts']);
    //if all parts seleted pass all values
    if(this.allSelected){
      this.selectedParts = this.part.subparts
      console.log('if this.all selected == true', this.selectedParts)
      localStorage.setItem("selectedParts", JSON.stringify(this.selectedParts));
    } 
    else{
      localStorage.setItem("selectedParts", JSON.stringify(this.selectedParts));
    }
  }


}

// selChk(val) {
//   var index = this.id.indexOf(val);
//   if(index === -1){
//     // val not found, pushing onto array
//     this.id.push(val);
//   }else{
//     // val is found, removing from array
//     this.id.splice(index,1);
//   }
//  }

// pushElement(x: Part[] | undefined) {
//   if(x){
//     console.log("x-->", x)
    
//     x.forEach((element: any) => {
//        // Check if a value exists in the selectedparts array
//        console.log("x.name-->", element.name)
//        console.log("xelement-->", element)
//        console.log("before selected parts", this.selectedParts)
//        let index = x.indexOf(element.name);
//        console.log("Index", index)
//       // if(element.selected === true && this.selectedParts.length != 0){
//       //   this.selectedParts.array.forEach((onepart:any)=> {
//       //     if(element.name != onepart.name){  
//       //     this.selectedParts.push(element);
//       //     }
//       //   });
//       // }
//       // else this.selectedParts.push(element);
//     });
//   }
 
//   console.log("final selected parts", this.selectedParts)
 
// }
// && this.selectedParts.indexOf(element.name) !== -1
