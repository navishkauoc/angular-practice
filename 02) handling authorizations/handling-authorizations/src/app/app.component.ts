import { Component, OnInit } from '@angular/core';
import { NgxPermissionsService } from 'ngx-permissions';
import { LoadPermissionsService } from './service/load-permissions.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'handling-authorizations';

  constructor(
    private loadPermissionsService: LoadPermissionsService,
    private ngxPermissionsService: NgxPermissionsService) {
  }

  ngOnInit(): void {
    // this.ngxPermissionsService.loadPermissions(['DEVELOPER']);

    // Load permissions using main component
    this.loadPermissionsService.loadPermissions().then((data) => {
      this.ngxPermissionsService.loadPermissions(data);
    })
  }

}
