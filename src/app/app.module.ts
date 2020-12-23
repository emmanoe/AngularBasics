import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CoursesComponent } from './courses.component';
import { CourseComponent } from './course/course.component';
import { CoursesService } from './courses.service';

@NgModule({
  declarations: [
    AppComponent,
    CourseComponent, //ng g c course
    CoursesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    CoursesService //Singleton
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
