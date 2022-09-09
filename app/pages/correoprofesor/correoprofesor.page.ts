import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-correoprofesor',
  templateUrl: './correoprofesor.page.html',
  styleUrls: ['./correoprofesor.page.scss'],
})
export class CorreoprofesorPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  usuarioProfesor={
    email:'',
    password:''
  }

  onSubmit(){
    console.log('Submit');
    console.log(this.usuarioProfesor);
  }

}
