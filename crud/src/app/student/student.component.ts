import { Component, OnInit } from '@angular/core';
import { StudentService } from './student.service';
import { Student } from '../model/ui-model/student.model';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {
  students : Student[]
  fillterString = ""
  constructor(private stService : StudentService){}
  ngOnInit(){
    this.stService.getAllStudent().subscribe(responSt => {
      this.students = responSt
      console.log(this.students)
    })
  }
}
