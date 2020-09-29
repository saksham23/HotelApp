import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {BsDropdownModule} from 'ngx-bootstrap/dropdown';

import { AppComponent } from './app.component';
import { HotelComponent } from './hotel/hotel.component';
import { HeaderComponent } from './Header/Header.component';
import { FormsModule } from '@angular/forms';
import { AuthService } from './services/auth.service';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';
import { BookingsComponent } from './bookings/bookings.component';
import { HotelListComponent } from './hotel/hotel-list/hotel-list.component';
import { HotelItemComponent } from './hotel/hotel-list/hotel-item/hotel-item.component';


@NgModule({
  declarations: [			
    AppComponent,
    HotelComponent,
    HeaderComponent,
    HomeComponent,
    RegisterComponent,
    BookingsComponent,
    HotelListComponent,
    HotelItemComponent
   ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    BsDropdownModule.forRoot(),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
