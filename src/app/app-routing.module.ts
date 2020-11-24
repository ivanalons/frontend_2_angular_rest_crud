import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from "./app.component";
import { GetallComponent } from "./components/getall/getall.component";


const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'getall', component: GetallComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
