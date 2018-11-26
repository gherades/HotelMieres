import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ServicesComponent } from './services/services.component';

const routes: Routes = [
  {path: '', redirectTo: 'fares', pathMatch: 'full'},
  {path: 'fares', loadChildren: './fares/fares.module#FaresModule'},
  {path: 'services', component: ServicesComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
