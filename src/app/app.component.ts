import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { map, Observable } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor() { }
  myForm!: FormGroup
  verFormulario: boolean = false;

  ngOnInit() {

    this.myForm = new FormGroup({
      origin: new FormGroup({
        'team': new FormControl(null, [Validators.required]),
        'position': new FormControl(null, [Validators.required]),
        'player': new FormControl(null, [Validators.required]),
      }),
      destino: new FormGroup({
        'team': new FormControl(null, [Validators.required]),
        'position': new FormControl(null, [Validators.required]),
        'player': new FormControl(null, [Validators.required]),
      })
    })
  }
  delete(formName: string) {
    this.myForm.get(formName)?.reset()
    this.myForm.get(formName)?.get('position')?.disable()
    this.myForm.get(formName)?.get('player')?.disable()
    this.verFormulario = false
  }

  traspasar() {
    this.destinoForm.setValue(this.originForm.value)
    console.log(this.originForm.get('team')?.value)

  }

  onSubmit() {
    this.verFormulario = true
    console.log(this.myForm.value);

  }

  get originForm() {
    return this.myForm.get('origin') as FormGroup;
  }

  get destinoForm() {
    return this.myForm.get('destino') as FormGroup;
  }
}
