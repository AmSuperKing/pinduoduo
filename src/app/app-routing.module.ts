import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'recommend', loadChildren: () => import('./recommend').then(m => m.RecommendModule) },
  { path: 'category', loadChildren: () => import('./category').then(m => m.CategoryModule ) },
  { path: 'chat', loadChildren: () => import('./chat').then(m => m.ChatModule) },
  { path: 'my', loadChildren: () => import('./my').then(m => m.MyModule) },
  { path: 'products', loadChildren: () => import('./product').then(m => m.ProductModule) },
  { path: 'orders', loadChildren: () => import('./product').then(m => m.ProductModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
