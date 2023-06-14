import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { ListCentresComponent } from './list-centres/list-centres.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  //{path: '', component: SideBarComponent},
  {path: 'centres', component: ListCentresComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
