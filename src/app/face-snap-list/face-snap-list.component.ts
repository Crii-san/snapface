import { FaceSnapsService } from '../services/face-snaps.service';
import { FaceSnap } from './../models/face-snap';
import { Component, OnInit } from '@angular/core';
import { FaceSnapComponent } from '../face-snap/face-snap.component';

@Component({
  selector: 'app-face-snap-list',
  standalone: true,
  imports: [FaceSnapComponent],
  templateUrl: './face-snap-list.component.html',
  styleUrl: './face-snap-list.component.scss'
})
export class FaceSnapListComponent implements OnInit {
  public faceSnaps!: FaceSnap[];

  constructor(private _faceSnapsService: FaceSnapsService) {};

  ngOnInit(): void {
    this.faceSnaps = this._faceSnapsService.getFaceSnaps();
  }
}
