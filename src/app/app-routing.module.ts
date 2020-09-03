import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { HomeComponent } from './home/home.component';
import { WelcomeComponent } from './home/welcome.component';
import { ProductDetailComponent } from './product/product-detail/product-detail.component';
import { ProductDetailGuard } from './product/product-detail/product-detail.guard';


const routes: Routes = [
  {path: '', redirectTo: 'welcome', pathMatch: 'full' },
  {path: 'product', component : ProductComponent},
  {path: 'product/:id',canActivate: [ProductDetailGuard], component : ProductDetailComponent},
  {path: 'welcome', component : WelcomeComponent},
  {path: 'home', component : HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const rootingComponents = [ProductComponent, HomeComponent]