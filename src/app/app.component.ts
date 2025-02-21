import { Component, OnInit } from '@angular/core';
import { FaceSnapComponent } from './face-snap/face-snap.component';
import { FaceSnap } from './models/face-snap';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FaceSnapComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  public concert!: FaceSnap;
  public parc!: FaceSnap;
  public piscine!: FaceSnap;

  ngOnInit() {
    this.concert = new FaceSnap(
      'Beyoncé Renaissance World Tour',
      'The best concert of my life !',
      new Date(),
      21,
      'https://pictures.laprovence.com/cdn-cgi/image/width=1080,format=auto,quality=80,trim.left=0,trim.top=79,trim.height=675,trim.width=1200/media/2023/05/27/20230526_RWT_Paris_Poole_MP1_3412_V1_TP.jpg'
    );

    this.parc = new FaceSnap(
      'DisneyLand Paris',
      'I met Mickey !',
      new Date(),
      5,
      'https://a.travel-assets.com/findyours-php/viewfinder/images/res70/495000/495696-disneylandr-paris.jpg'
    );

    this.piscine = new FaceSnap(
      'At the waterpool',
      'I learned swim crawl !',
      new Date(),
      11,
      'https://www.mairie-ozoir-la-ferriere.fr/wp-content/uploads/2022/01/Piscine-25-scaled.jpg'
    );
  }
}
