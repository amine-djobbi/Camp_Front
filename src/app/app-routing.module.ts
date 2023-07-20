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
import { AddPostComponent } from './add-post/add-post.component';
import { PostListComponent } from './post-list/post-list.component';
import { PostDetailsComponent } from './post-details/post-details.component';
import { DeliveriesComponent } from './deliveries/deliveries.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  //{path: '', component: SideBarComponent},
  {path: 'centres', component: ListCentresComponent},

  {path:'signup',component: RegisterComponent},
  {path:'addclaim',component: AddClaimComponent},
  {path:'myclaims',component: ClaimsListComponent},
  {path:'update-claim/:id',component: UpdateClaimComponent},
  {path:'addpost',component: AddPostComponent},
  {path:'postlist',component: PostListComponent},
  {path:'postdetails/:id',component: PostDetailsComponent},
  {path:'deliveries',component: DeliveriesComponent},






];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
