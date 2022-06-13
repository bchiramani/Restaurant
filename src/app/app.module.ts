import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { BannerComponent } from './components/banner/banner.component';
import { PopularDishesComponent } from './components/popular-dishes/popular-dishes.component';
import { HistoryComponent } from './components/history/history.component';
import { VideoComponent } from './components/video/video.component';
import { PopularMenuComponent } from './components/popular-menu/popular-menu.component';

import { ReservationComponent } from './components/reservation/reservation.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { NewsComponent } from './components/news/news.component';
import { AddAdminComponent } from './components/add-admin/add-admin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignupComponent } from './components/signup/signup.component';
import { AddChefComponent } from './components/add-chef/add-chef.component';
import { ChefsListComponent } from './components/chefs-list/chefs-list.component';
import { ChefComponent } from './components/chef/chef.component';
import { PlatComponent } from './components/plat/plat.component';
import { AddPlatComponent } from './components/add-plat/add-plat.component';
import { AsterixPipe } from './pipes/asterix.pipe';
import { AdminComponent } from './components/admin/admin.component';
import { PlatsAdminComponent } from './components/plats-admin/plats-admin.component';
import { ChefsAdminComponent } from './components/chefs-admin/chefs-admin.component';
import { SectionBannerComponent } from './components/section-banner/section-banner.component';

import { DataService } from './services/data.service';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { HttpClientModule } from '@angular/common/http';
import { PlatInformationComponent } from './components/plat-information/plat-information.component';
import { AllUsersComponent } from './components/all-users/all-users.component';
import { ChefInformationsComponent } from './components/chef-informations/chef-informations.component';
import { SearchComponent } from './components/search/search.component';
import { SearchChefComponent } from './components/search-chef/search-chef.component';
import { SearchPriceComponent } from './components/search-price/search-price.component';
import { PlatsComponent } from './components/plats/plats.component';
import { PlatChildComponent } from './components/plat-child/plat-child.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    BannerComponent,
    PopularDishesComponent,
    HistoryComponent,
    VideoComponent,
    PopularMenuComponent,
    ReservationComponent,
    TestimonialsComponent,
    NewsComponent,
    AddAdminComponent,
   
    SignupComponent,
   
    AddChefComponent,
   
    ChefsListComponent,
   
    ChefComponent,
   
    PlatComponent,
   
    AddPlatComponent,
   
    AsterixPipe,
   
    AdminComponent,
   
    PlatsAdminComponent,
   
    ChefsAdminComponent,
   
    SectionBannerComponent,
   
    PlatInformationComponent,
   
    AllUsersComponent,
   
    ChefInformationsComponent,
   
   
    SearchComponent,
   
    SearchChefComponent,
   
    SearchPriceComponent,
   
    PlatsComponent,
   
    PlatChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    //InMemoryWebApiModule.forRoot(DataService),
    ReactiveFormsModule,
    HttpClientModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
