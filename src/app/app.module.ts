import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { ListCentresComponent } from './list-centres/list-centres.component';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './auth.service';
import { FormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { AddClaimComponent } from './add-claim/add-claim.component';
import { ClaimsListComponent } from './claims-list/claims-list.component';
import { UpdateClaimComponent } from './update-claim/update-claim.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SideBarComponent,
    ListCentresComponent,
    RegisterComponent,
    AddClaimComponent,
    ClaimsListComponent,
    UpdateClaimComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
