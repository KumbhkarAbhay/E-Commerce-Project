import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';


@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {

  isSidePanVisible: boolean=true;

  openSidePanel(){
    this.isSidePanVisible=true;
  }
     
  closeSidePanel(){
    this.isSidePanVisible=true;
  }
   

}
