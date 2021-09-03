import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from 'src/app/Models/user.interface';
import { Movie } from 'src/app/Models/movie.interface';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
readonly APIUrl = 'http://localhost:53467/api';
readonly PosterUrl = 'http://localhost:53467/Photos/';
readonly MovieUrl = 'http://localhost:53467/Movies/';

  constructor(private http: HttpClient) { }

  getFeaturedMovies():Observable<Movie[]>{
    return this.http.get<Movie[]>(this.APIUrl+'/Movie/GetFeaturedMovies')
  }

  getNewReleasedMovies():Observable<Movie[]>{
    return this.http.get<Movie[]>(this.APIUrl+'/Movie/GetNewReleasedMovies')
  }

  getUpcomingMovies():Observable<Movie[]>{
    return this.http.get<Movie[]>(this.APIUrl+'/Movie/GetUpcomingMovies')
  }

  getDetails(val:Number):Observable<Movie>{
    return this.http.get<Movie>(this.APIUrl+'/Movie/GetMovie/id?id='+val)
  }

  getAllMovies():Observable<Movie[]>{
    return this.http.get<Movie[]>(this.APIUrl+'/Movie/GetAllMovies')
  }

  getAllUsers():Observable<User[]>{
    return this.http.get<User[]>(this.APIUrl+'/Movie/GetAllUsers')
  }

  addMovie(val:Movie){
    return this.http.post(this.APIUrl+'/Movie/AddMovie',val)
  }

  revokeSubscription(val:Number):Observable<Boolean>{
    return this.http.get<Boolean>(this.APIUrl+'/Movie/RevokeSubscription/id?id='+val)
  }

  signup(val:User){
    return this.http.post(this.APIUrl+'/Account/Signup',val)
  }

  login(val:User){
    return this.http.post(this.APIUrl+"/Account/Login",val)
  }

  logout(){
    return this.http.get(this.APIUrl+"/Account/Loggedout")
  }

  myMovies(val:Number):Observable<Movie[]>{
    return this.http.get<Movie[]>(this.APIUrl + '/Movie/MyMovies/id?id='+val)
  }

  addToList(val1:Number, val2:Number):Observable<Boolean>{
    return this.http.get<Boolean>(this.APIUrl+"/Movie/AddToList/id/usid?usid="+val1+"&id="+val2)
  }

  uploadPoster(val:any){
    return this.http.post(this.APIUrl+'/Movie/AddPoster',val)
  }

  uploadMovie(val:any){
    return this.http.post(this.APIUrl+'/Movie/AddContent',val)
  }
}
