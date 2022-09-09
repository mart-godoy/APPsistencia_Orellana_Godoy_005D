import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-correoalumno',
  templateUrl: './correoalumno.page.html',
  styleUrls: ['./correoalumno.page.scss'],
})
export class CorreoalumnoPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  usuarioAlumno={
    email:'',
    password:''
  }

  onSubmit(){
    console.log('Submit');
    console.log(this.usuarioAlumno);
  }

}
