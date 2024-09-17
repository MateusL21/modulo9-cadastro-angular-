import { Component, OnInit } from '@angular/core';
import { Category } from '../../Interfaces/Category';
import { Student } from '../../Interfaces/Student';
import { CategoryService } from '../../services/category.service';
import { StudentsServiceService } from '../../services/students-service.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrl: './students.component.css'
})
export class StudentsComponent implements OnInit {

  categories : Category [] =[];

  student  : Student = {} as Student;  
  students : Student[] = [];

  constructor(private categoryService: CategoryService, private studentService: StudentsServiceService) { }

  ngOnInit(): void {
    this.loadStudents();
    this.loadCategories();
  }

  loadStudents(){
    this.studentService.getStudents().subscribe({
      next: data => {this.students = data}
    });
  }
  loadCategories(){
    this.categoryService.getCategories().subscribe(
      {
      next:  data => {this.categories = data}
      }
    );
  }

  saveStudent(){
    this.studentService.save(this.student).subscribe({
      next: data => {
        this.students.push(data);
        this.student = {} as Student;
      }
    }
      
    );
    

  }

}
