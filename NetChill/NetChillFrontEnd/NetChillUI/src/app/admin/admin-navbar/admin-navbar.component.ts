import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/Services/shared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-navbar',
  templateUrl: './admin-navbar.component.html',
  styleUrls: ['./admin-navbar.component.scss']
})
export class AdminNavbarComponent implements OnInit {

  constructor(private service:SharedService, private router: Router) { }

  adminMenu : String[] = [
    "Home", "Featured", "New Releases", "Upcoming", "Upload Content", "Revoke Subscription"
  ];
  ngOnInit(): void {
  }

  logout(){
    this.service.logout().subscribe((response)=>{
      console.log('repsonse ',response);
      this.router.navigate(['/'])
    })
  }
}
