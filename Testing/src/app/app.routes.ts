import { Routes } from '@angular/router';
import { LoginComponent } from './admin/login/login.component';
import { LayoutComponent } from './admin/layout/layout.component';
import { ProductsComponent } from './admin/products/products.component';

export const routes: Routes = [

    {
        path:'',
        redirectTo:'login',
        pathMatch:'full'
    },
      {
        path:'login',
        component:LoginComponent
      },

    {
      path:'',
      component:LayoutComponent,
      children:[
        {
          path:'products',
          component:ProductsComponent
        }

      ]
    }  
];
