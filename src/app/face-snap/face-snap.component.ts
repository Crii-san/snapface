import { Component, Input, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap';
import { DatePipe, NgClass, NgStyle, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { FaceSnapsService } from '../services/face-snaps.service';

@Component({
  selector: 'app-face-snap',
  standalone: true,
  imports: [
    NgStyle,
    NgClass,
    TitleCasePipe,
    DatePipe
  ],
  templateUrl: './face-snap.component.html',
  styleUrl: './face-snap.component.scss'
})
export class FaceSnapComponent {
  @Input() faceSnap!: FaceSnap;

  public clickState: boolean = false;
  public text: string = 'Oh Snap!';

  constructor(private _faceSnapsService: FaceSnapsService){}

  public onAddSnap() {
    if (this.clickState === false) {
      this._faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'snap');
      this.text = 'Oops, un Snap!';
    } else {
      this._faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'unsnap');
      this.text = 'Oh Snap!';
    }
    this.clickState = !this.clickState;
  }
}
