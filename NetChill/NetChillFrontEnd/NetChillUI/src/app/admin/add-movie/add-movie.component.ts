import { Component, Input, OnInit } from '@angular/core';
import { Movie } from "src/app/Models/movie.interface";
import { SharedService } from 'src/app/Services/shared.service';
import { FormGroup, FormControl, Validators, FormBuilder } from "@angular/forms";

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.scss']
})
export class AddMovieComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private service:SharedService) { }
  posterFile:string="";
  contentFile:string="";

  movieForm: FormGroup = this.formBuilder.group({
    Name: this.formBuilder.control('',[Validators.required]),
    Category: this.formBuilder.control('',[Validators.required]),
    YearOfRelease: this.formBuilder.control('',[Validators.required]),
    Availability: this.formBuilder.control('',[Validators.required]),
    Description: this.formBuilder.control('',[Validators.required]),
    IsFeatured: this.formBuilder.control(''),
    PosterURL: this.formBuilder.control(this.posterFile,[Validators.required]),
    ContentURL: this.formBuilder.control(this.contentFile,[Validators.required])
  })

  ngOnInit(): void {
  }

  hasError(controlName:string, errorType:string){
    const control = this.movieForm.get(controlName);
    if(control && control.touched){
      return control.getError(errorType);
    }
    return false
  }

  message:string="";
  errorCheck:boolean=false;
  onSubmit(){
    this.service.addMovie(this.movieForm.value).subscribe((response)=>{
      console.log('repsonse ',response);
      this.message="Movie Added Successfully";
      this.errorCheck=true;
    },(error)=>{
      this.message="Error in Adding Movie";
      this.errorCheck=true;
      console.log('error',error);
    })
  }

  uploadPoster(event:any){
    var file = event.target.files[0];
    const formData:FormData=new FormData();
    formData.append('uploadedPoster',file,file.name);
    this.service.uploadPoster(formData).subscribe((response)=>{
      this.posterFile=this.service.PosterUrl+response.toString();
      this.movieForm.removeControl("PosterURL")
      this.movieForm.addControl("PosterURL",new FormControl(this.posterFile,[Validators.required]))
    })
  }

  uploadMovie(event:any){
    var file = event.target.files[0];
    const formData:FormData=new FormData();
    formData.append('uploadedContent',file,file.name);
    this.service.uploadMovie(formData).subscribe((response)=>{
      this.contentFile=this.service.MovieUrl+response.toString();
      this.movieForm.removeControl("ContentURL")
      this.movieForm.addControl("ContentURL",new FormControl(this.contentFile,[Validators.required]))
    })
  }

}
