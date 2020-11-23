import { Component, OnInit } from '@angular/core';
import { BackendServiceService } from 'src/app/services/backend-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private backendServiceService: BackendServiceService) { }

  ngOnInit(): void {
    this.backendServiceService.getAll('url').toPromise().then((res: any) => {

      console.log(res)

    });

  }

}
