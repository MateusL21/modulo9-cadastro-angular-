import { Injectable } from '@angular/core';
import { Student } from '../Interfaces/Student';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentsServiceService {


  constructor(private http: HttpClient) { }

  getStudents() : Observable<Student[]>{
    return this.http.get<Student[]>("http://localhost:8080/students")
    
  }

  save(student:Student){
    return this.http.post<Student>("http://localhost:8080/students", student)
  }
}
