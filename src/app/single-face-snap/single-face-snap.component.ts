import { Component, OnInit } from '@angular/core';
import { FaceSnapsService } from '../services/face-snaps.service';
import { FaceSnap } from '../models/face-snap';
import { DatePipe, NgClass, NgStyle, TitleCasePipe } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-single-face-snap',
  standalone: true,
  imports: [
    NgStyle,
    NgClass,
    TitleCasePipe,
    DatePipe,
    RouterLink
  ],
  templateUrl: './single-face-snap.component.html',
  styleUrl: './single-face-snap.component.scss'
})
export class SingleFaceSnapComponent implements OnInit {
  public faceSnap!: FaceSnap;
  public clickState: boolean = false;
  public text: string = 'Oh Snap!';

  constructor(
    private _faceSnapsService: FaceSnapsService,
    private _route: ActivatedRoute){}

  ngOnInit(): void {
    const faceSnapId = this._route.snapshot.params['id'];
    this.faceSnap = this._faceSnapsService.getFaceSnapsById(faceSnapId);
  }

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
