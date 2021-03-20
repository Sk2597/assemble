import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import {PagenotfoundComponent} from './pagenotfound/pagenotfound.component'
import {FinalProductComponent} from './final-product/final-product.component'
import {AssemblePartsComponent} from './assemble-parts/assemble-parts.component'
import {SelectPartsComponent} from './select-parts/select-parts.component'



const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  // { path: '', component: HomepageComponent  },
  { path: 'home', component: HomepageComponent  },
  { path: 'finalproduct', component: FinalProductComponent },
  { path: 'assembleparts', component: AssemblePartsComponent },
  { path: 'selectparts', component: SelectPartsComponent  },
  { path: '**',   component: PagenotfoundComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [HomepageComponent,PagenotfoundComponent,FinalProductComponent,AssemblePartsComponent,SelectPartsComponent]
