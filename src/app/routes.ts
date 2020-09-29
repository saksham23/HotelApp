import { Routes } from '@angular/router';
import { BookingsComponent } from './bookings/bookings.component';
import { HomeComponent } from './home/home.component';
import { HotelComponent } from './hotel/hotel.component';
import { AuthGuard } from './_gaurds/auth.guard';

export const appRoutes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'hotel', component: HotelComponent},
    {path: 'booking', component: BookingsComponent, canActivate: [AuthGuard]},
    {path: '**', redirectTo: 'home', pathMatch: 'full'}
];