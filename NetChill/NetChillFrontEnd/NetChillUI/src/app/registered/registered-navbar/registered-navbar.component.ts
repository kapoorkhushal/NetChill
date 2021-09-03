import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/Services/shared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registered-navbar',
  templateUrl: './registered-navbar.component.html',
  styleUrls: ['./registered-navbar.component.scss']
})
export class RegisteredNavbarComponent implements OnInit {

  constructor(private service:SharedService, private router: Router) { }

  userMenu : String[] = [
    "Home", "Featured", "New Releases", "Upcoming", "My Movies"
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
