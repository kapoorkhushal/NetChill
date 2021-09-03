import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/Services/shared.service';
import { User } from "src/app/Models/user.interface";

@Component({
  selector: 'app-revoke-subscription',
  templateUrl: './revoke-subscription.component.html',
  styleUrls: ['./revoke-subscription.component.scss']
})
export class RevokeSubscriptionComponent implements OnInit {

  constructor(private service:SharedService) { }
  UserList:User[]=[];
  headers: String[] = ["Full Name", "Email", "Subscription Date"];

  ngOnInit(): void {
    this.refreshList();
  }
  refreshList(){
    this.service.getAllUsers().subscribe(data=>{
      this.UserList=data;
      console.log(this.UserList);
    });
  }

  message:string="";
  status:boolean=false;
  revoke(val:Number){
    this.service.revokeSubscription(val).subscribe((response)=>{
      console.log('respone',response);
      if(response){
        this.status=true;
        this.message="Subscription Revoked Successful"
      }
    })

  }

}
