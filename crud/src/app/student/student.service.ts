import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Student } from '../model/api-model/student.model';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http : HttpClient) { }
  baseUrl = "https://localhost:44356"
  getAllStudent() : Observable <Student[]>{
    return this.http.get<Student[]>(this.baseUrl + '/Student')
  }
}
