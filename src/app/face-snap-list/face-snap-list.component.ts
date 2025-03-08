import { FaceSnapsService } from '../services/face-snaps.service';
import { FaceSnap } from './../models/face-snap';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FaceSnapComponent } from '../face-snap/face-snap.component';
import { interval, Subject, take, takeUntil, tap } from 'rxjs';

@Component({
  selector: 'app-face-snap-list',
  standalone: true,
  imports: [FaceSnapComponent],
  templateUrl: './face-snap-list.component.html',
  styleUrl: './face-snap-list.component.scss'
})
export class FaceSnapListComponent implements OnInit, OnDestroy {
  public faceSnaps!: FaceSnap[];
  private _destroy$!: Subject<boolean>;

  constructor(private _faceSnapsService: FaceSnapsService) {};

  ngOnInit(): void {
    this._destroy$ = new Subject<boolean>();
    this.faceSnaps = this._faceSnapsService.getFaceSnaps();

    interval(1000).pipe(
      tap(console.log),
      takeUntil(this._destroy$)
    ).subscribe();
  }

  ngOnDestroy(): void {
    this._destroy$.next(true);
  }
}
