import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { RecipeComponent } from './recipe/recipe.component';
import { OrderBookComponent } from './order-book/order-book.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { UserProfileComponent } from './user-profile/user-profile.component';


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    RecipeComponent,
    OrderBookComponent,
    RegisterComponent,
    LoginComponent,
    UserProfileComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
