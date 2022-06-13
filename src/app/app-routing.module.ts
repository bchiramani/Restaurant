import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddAdminComponent } from './components/add-admin/add-admin.component';
import { AddChefComponent } from './components/add-chef/add-chef.component';
import { AddPlatComponent } from './components/add-plat/add-plat.component';
import { AdminComponent } from './components/admin/admin.component';
import { ChefInformationsComponent } from './components/chef-informations/chef-informations.component';
import { ChefsListComponent } from './components/chefs-list/chefs-list.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { PlatInformationComponent } from './components/plat-information/plat-information.component';
import { PlatsComponent } from './components/plats/plats.component';
import { PopularDishesComponent } from './components/popular-dishes/popular-dishes.component';
import { SearchChefComponent } from './components/search-chef/search-chef.component';
import { SearchPriceComponent } from './components/search-price/search-price.component';
import { SearchComponent } from './components/search/search.component';
import { SignupComponent } from './components/signup/signup.component';




const routes: Routes = [
  {path: '', component: HomeComponent},
  {path:'login',component: LoginComponent},
  {path:'addAdmin',component: AddAdminComponent},
  {path:'addChef',component: AddChefComponent},
  {path:'chefs',component: ChefsListComponent},
  {path:'dishes',component: PopularDishesComponent},
  {path:'addPlat',component: AddPlatComponent},
  {path:'editPlat/:id',component: AddPlatComponent},
  {path:'chefInformation/:id',component: ChefInformationsComponent},
  {path:'addChef/:id',component: AddChefComponent},
  {path:'admin',component: AdminComponent},
  {path:'platInformation/:id',component: PlatInformationComponent},
  {path:'search',component: SearchComponent},
  {path:'search/chef',component: SearchChefComponent},
  {path:'search/price',component: SearchPriceComponent},
  {path:'plats',component: PlatsComponent},
  {path:'signup',component: SignupComponent},
  {path:'signupAdmin',component: SignupComponent}





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
