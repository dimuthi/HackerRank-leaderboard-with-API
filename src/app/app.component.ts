import { Component } from '@angular/core';
import { ApiService } from '../app/api-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'HackerrankProject';
  results = [];
  

  constructor(private apiService: ApiService) {
    this.apiService.getConfig().subscribe((res: any) => {
      console.log("RES: ", res);
      this.results = res.body.data;
    });
  }

}
