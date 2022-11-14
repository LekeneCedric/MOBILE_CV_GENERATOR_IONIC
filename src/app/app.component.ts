import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { DataService } from './data.service';

@Component({
  
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private router:Router,private auth:AuthService,private data:DataService) {}
 
    async ngOnInit(){
    }
  async logout(){
    await this.auth.logout();
    this.router.navigateByUrl('/',{replaceUrl:true})
  }
}
