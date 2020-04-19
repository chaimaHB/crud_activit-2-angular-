import { Component, OnInit, ViewChild } from '@angular/core';
import { Student } from '../shared/models/student';
import { StudentService } from '../shared/services/student.service';
import { FormGroup, NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
@Component({
    selector: 'app-add-student',
    templateUrl: './add-student.component.html',
    styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {
    public student = new Student();
    @ViewChild('addForm') addForm: NgForm;
    constructor(private studentService: StudentService, private route: ActivatedRoute) {

    }
    ngOnInit(): void {
        this.route.queryParams.subscribe(params => {
            console.log("My Id", params);
            this.getStudent(params.id);
        })
    }
    save() {
        if (!this.student.id) {
            this.studentService.AddStudent({ ... this.student });
        } else {

            this.studentService.updateStudent({ ... this.student });
        }

        this.addForm.reset();
    }
    getStudent(id: string) {
        this.studentService.getStudent(id).subscribe(res => {
            this.student = res.data() as Student;
            this.student.id = res.id;
        });
    }

}