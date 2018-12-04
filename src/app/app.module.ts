import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import{Routes, RouterModule} from '@angular/router';
import{ WSignupService} from './sign-up/w-signup.service';
 import { HttpModule} from '@angular/http';
import { PartnerComponent } from './sign-up/partner/partner.component';
import { GeneralComponent } from './sign-up/partner/general/general.component';
import { ServiceschargesComponent} from './sign-up/partner/servicescharges/servicescharges.component';
import { PayeeComponent } from './sign-up/partner/payee/payee.component';

const appRoutes:Routes = [
  {path:'',component:SignInComponent},
  {path:'sign-up',component:SignUpComponent},
  {path:'partner',component:PartnerComponent},
  {path:'general',component:GeneralComponent},
  {path:'servicescharges',component:ServiceschargesComponent},
  {path:'payee',component:PayeeComponent},

  ];
@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    SignUpComponent,
    PartnerComponent,
    GeneralComponent,
    ServiceschargesComponent,
    PayeeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
