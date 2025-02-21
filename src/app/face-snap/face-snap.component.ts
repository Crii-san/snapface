import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-face-snap',
  standalone: true,
  imports: [],
  templateUrl: './face-snap.component.html',
  styleUrl: './face-snap.component.scss'
})
export class FaceSnapComponent implements OnInit {
  public title!: string;
  public description!: string;
  public createdAt!: Date;
  public snaps!: number;
  public imageUrl!: string;

  ngOnInit() {
    this.title = 'Beyoncé Renaissance World Tour';
    this.description = 'The best concert of my life !';
    this.createdAt = new Date();
    this.snaps = 5;
    this.imageUrl = 'https://pictures.laprovence.com/cdn-cgi/image/width=1080,format=auto,quality=80,trim.left=0,trim.top=79,trim.height=675,trim.width=1200/media/2023/05/27/20230526_RWT_Paris_Poole_MP1_3412_V1_TP.jpg'
  }
}
