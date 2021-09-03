import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsModule } from './Components/components.module';
import { SharedService } from './Services/shared.service';
import { RegisteredComponent } from './registered/registered.component';
import { UnRegisteredComponent } from './un-registered/un-registered.component';
import { RegisteredNavbarComponent } from './registered/registered-navbar/registered-navbar.component';
import { UnRegisteredNavbarComponent } from './un-registered/un-registered-navbar/un-registered-navbar.component';
import { GetFeaturedComponent } from './registered/get-featured/get-featured.component';
import { GetNewReleasedComponent } from './registered/get-new-released/get-new-released.component';
import { GetUpcomingComponent } from './registered/get-upcoming/get-upcoming.component';
import { GetMyMoviesComponent } from './registered/get-my-movies/get-my-movies.component';
import { LoginComponent } from './un-registered/login/login.component';
import { SigninComponent } from './un-registered/signin/signin.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AdminComponent } from './admin/admin.component';
import { AdminNavbarComponent } from './admin/admin-navbar/admin-navbar.component';
import { AddMovieComponent } from './admin/add-movie/add-movie.component';
import { RevokeSubscriptionComponent } from './admin/revoke-subscription/revoke-subscription.component';
import { AdminFeatureMovieComponent } from './admin/admin-feature-movie/admin-feature-movie.component';
import { AdminUpcomingMovieComponent } from './admin/admin-upcoming-movie/admin-upcoming-movie.component';
import { AdminNewReleasesComponent } from './admin/admin-new-releases/admin-new-releases.component';
import { MovieDetailComponent } from './registered/movie-detail/movie-detail.component';
import { AdminMovieDetailComponent } from './admin/admin-movie-detail/admin-movie-detail.component';
import { SanitizeHtmlDirective } from './sanitize-html.directive';

@NgModule({
  declarations: [
    AppComponent,
    RegisteredComponent,
    UnRegisteredComponent,
    RegisteredNavbarComponent,
    UnRegisteredNavbarComponent,
    GetFeaturedComponent,
    GetNewReleasedComponent,
    GetUpcomingComponent,
    GetMyMoviesComponent,
    LoginComponent,
    SigninComponent,
    AdminComponent,
    AdminNavbarComponent,
    AddMovieComponent,
    RevokeSubscriptionComponent,
    AdminFeatureMovieComponent,
    AdminUpcomingMovieComponent,
    AdminNewReleasesComponent,
    MovieDetailComponent,
    AdminMovieDetailComponent,
    SanitizeHtmlDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ComponentsModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
