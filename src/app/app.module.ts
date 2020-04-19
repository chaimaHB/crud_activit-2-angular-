import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { environment } from '../environments/environment';
import { RouterModule, Routes } from '@angular/router';
import { AddStudentComponent } from './add-student/add-student.component';
import { StudentService } from './shared/services/student.service';
import { ListStudentsComponent } from './list-students/list-students.component';
const routes: Routes = [
  { path: 'add-student', component: AddStudentComponent },
  { path: 'all-student', component: ListStudentsComponent },
];
@NgModule({
  declarations: [
    AppComponent,
    AddStudentComponent,
    ListStudentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserModule, RouterModule.forRoot(routes),
    AngularFireModule.initializeApp(environment.firebase),

    AngularFirestoreModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [StudentService,],
  bootstrap: [AppComponent]
})
export class AppModule { }
