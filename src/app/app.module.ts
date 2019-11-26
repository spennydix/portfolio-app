import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import {NgsRevealModule} from 'ngx-scrollreveal';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { WorkComponent } from './work/work.component';
import { ProjectComponent } from './project/project.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { MockComponent } from './mock/mock.component';
import { ErrorComponent } from './error/error.component';
import { MockDetailsComponent } from './mock-details/mock-details.component';

import { SafePipe } from './safe.pipe';




const appRoutes: Routes = [
  { path: 'work', component: WorkComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'project-details', component: ProjectDetailsComponent },
  { path: '', redirectTo: '/work', pathMatch: 'full' },
  { path: '**', component: ErrorComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    WorkComponent,
    ProjectComponent,
    ProjectDetailsComponent,
    ContactComponent,
    AboutComponent,
    ErrorComponent,
    SafePipe,
    MockComponent,
    MockDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgsRevealModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    ),
    HttpClientModule
    // other imports here
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
