import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-dashbard',
  templateUrl: './dashbard.component.html',
  styleUrls: ['./dashbard.component.css']
})
export class DashbardComponent implements OnInit {

  public users:any = [];
  constructor(private api : ApiService, private auth: AuthService) { }

  ngOnInit(){
    this.api.getUsers()
    .subscribe(res=>{
      this.users = res;
    })
  }

  logout(){
    this.auth.signOut();
    
  }


}
