import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-final-product',
  templateUrl: './final-product.component.html',
  styleUrls: ['./final-product.component.css']
})
export class FinalProductComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  goto(){
    this.router.navigate(['home']);
  }

}
