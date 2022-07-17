import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxPermissionsModule, NgxPermissionsService } from 'ngx-permissions';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { HttpClientModule } from '@angular/common/http';
import { LoadPermissionsService } from './service/load-permissions.service';

export function permissionsFactory(
  loadPermissionsService: LoadPermissionsService,
  ngxPermissionsService: NgxPermissionsService) {
  return () => {
    return loadPermissionsService.loadPermissions().then((data) => {
      ngxPermissionsService.loadPermissions(data)
      return true
    })
  }
}
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    NgxPermissionsModule.forRoot(),
    HttpClientModule
  ],
  providers: [{
    provide: APP_INITIALIZER,
    useFactory: permissionsFactory,
    deps: [LoadPermissionsService, NgxPermissionsModule],
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
