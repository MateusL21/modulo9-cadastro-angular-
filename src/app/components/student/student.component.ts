import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Category } from '../../Interfaces/Category';
import { Student } from '../../Interfaces/Student';


@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrl: './student.component.css'
})
export class StudentComponent implements OnInit {

  @Input()
  categories : Category [] =[]

  @Input()
  student ?: Student;

  @Output()
  saveEmitter = new EventEmitter();

  constructor() {}

  ngOnInit(): void {
      
  }

  save(){
    this.saveEmitter.emit();
  }

}
