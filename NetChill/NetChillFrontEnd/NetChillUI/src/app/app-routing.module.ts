import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import{ RegisteredComponent } from './registered/registered.component';
import{ UnRegisteredComponent } from './un-registered/un-registered.component'
import{ GetFeaturedComponent } from './registered/get-featured/get-featured.component'
import{ GetNewReleasedComponent } from './registered/get-new-released/get-new-released.component'
import{ GetUpcomingComponent } from './registered/get-upcoming/get-upcoming.component'
import { GetMyMoviesComponent } from './registered/get-my-movies/get-my-movies.component'
import { LoginComponent } from './un-registered/login/login.component';
import { SigninComponent } from "./un-registered/signin/signin.component";
import { AdminComponent } from "./admin/admin.component";
import { AddMovieComponent } from "./admin/add-movie/add-movie.component";
import { RevokeSubscriptionComponent } from "./admin/revoke-subscription/revoke-subscription.component";
import { AdminFeatureMovieComponent } from "./admin/admin-feature-movie/admin-feature-movie.component";
import { AdminNewReleasesComponent } from "./admin/admin-new-releases/admin-new-releases.component";
import {AdminUpcomingMovieComponent  } from "./admin/admin-upcoming-movie/admin-upcoming-movie.component";
import { MovieDetailComponent } from "./registered/movie-detail/movie-detail.component";
import { AdminMovieDetailComponent } from "./admin/admin-movie-detail/admin-movie-detail.component";

var val:any;
const routes: Routes = [
  {path:'registered', component:RegisteredComponent},
  {path:'', component:UnRegisteredComponent},
  {path:'registered/getfeatured', component:GetFeaturedComponent},
  {path:'registered/getnewreleased', component:GetNewReleasedComponent},
  {path:'registered/getupcoming', component:GetUpcomingComponent},
  {path:'registered/getmymovies', component:GetMyMoviesComponent},
  {path:'login', component:LoginComponent},
  {path:'signin', component:SigninComponent},
  {path:'admin', component:AdminComponent},
  {path:'admin/addmovie', component:AddMovieComponent},
  {path:'admin/revokesubscription', component:RevokeSubscriptionComponent},
  {path:'admin/featuremovies', component:AdminFeatureMovieComponent},
  {path:'admin/newreleases', component:AdminNewReleasesComponent},
  {path:'admin/upcomingmovies', component:AdminUpcomingMovieComponent},
  {path:'registered/moviedetail', component:MovieDetailComponent},
  {path:'admin/moviedetail', component:AdminMovieDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
