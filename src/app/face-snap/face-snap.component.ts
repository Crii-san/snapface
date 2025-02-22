import { Component, Input, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap';
import { NgClass, NgStyle } from '@angular/common';

@Component({
  selector: 'app-face-snap',
  standalone: true,
  imports: [
    NgStyle,
    NgClass
  ],
  templateUrl: './face-snap.component.html',
  styleUrl: './face-snap.component.scss'
})
export class FaceSnapComponent {
  @Input() faceSnap!: FaceSnap;

  public clickState: boolean = false;
  public text: string = 'Oh Snap!';

  public onAddSnap() {
    if (this.clickState === false) {
      this.faceSnap.addSnap();
      this.text = 'Oops, un Snap!';
    } else {
      this.faceSnap.removeSnap();
      this.text = 'Oh Snap!';
    }
    this.clickState = !this.clickState;
  }
}
