import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FaceSnap } from '../models/face-snap';
import { map, Observable } from 'rxjs';
import { CommonModule, DatePipe, UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-new-face-snap',
  standalone: true,
  imports: [ReactiveFormsModule, UpperCasePipe, DatePipe, CommonModule],
  templateUrl: './new-face-snap.component.html',
  styleUrl: './new-face-snap.component.scss'
})
export class NewFaceSnapComponent implements OnInit {
  
  public snapForm!: FormGroup;
  public faceSnapPreview$!: Observable<FaceSnap>;
  
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {

    this.snapForm = this.formBuilder.group({
      title: [null], 
      description: [null],
      imageUrl: [null],
      location: [null]
    });

    this.faceSnapPreview$ = this.snapForm.valueChanges.pipe(
      map(formValue => ({
        ...formValue,
        createdDate: new Date(),
        snaps: 0,
        id: 0
      }))
    )
  }

  public onSubmitForm() : void {
    console.log(this.snapForm.value);
  }
}
