import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {

  education:any = [
    {
      fecha: '',
      titulo: '',
      
    },
    {},
    {},
    {}
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
