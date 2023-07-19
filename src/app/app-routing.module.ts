import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { ListCentresComponent } from './list-centres/list-centres.component';
import { Router } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { AddClaimComponent } from './add-claim/add-claim.component';
import { ClaimsListComponent } from './claims-list/claims-list.component';
import { UpdateClaimComponent } from './update-claim/update-claim.component';
const routes: Routes = [
  {path: 'login', component: LoginComponent},
  //{path: '', component: SideBarComponent},
  {path: 'centres', component: ListCentresComponent},

  {path:'signup',component: RegisterComponent},
  {path:'addclaim',component: AddClaimComponent},
  {path:'myclaims',component: ClaimsListComponent},
  {path:'update-claim/:id',component: UpdateClaimComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
