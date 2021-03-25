import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InventoriesComponent } from './components/inventories/inventories.component';

const routes: Routes = [
  { path: '', redirectTo: 'inventories', pathMatch: 'full' },
  { path: 'inventories', component: InventoriesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
