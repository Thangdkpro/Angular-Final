
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { WelcomeComponent} from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { BookTradeComponent } from './book-trade/book-trade.component';
import { AddbookComponent } from './addbook/addbook.component'


const appRoutes: Routes = [  
{ path: '', component: WelcomeComponent },   
{ path: 'login', component: LoginComponent },
{ path :'register',component:RegisterComponent },
{ path :'booktrade',component:BookTradeComponent },
{ path :'addbook',component: AddbookComponent },


];

@NgModule({
  declarations: [AppComponent],
  imports: [
      RouterModule.forRoot(appRoutes, { enableTracing: true })
  ],
  providers: [],
  bootstrap: [],
  exports: [RouterModule]
})

export class AppRoutingModule { }