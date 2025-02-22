import { SnapType } from '../models/snap-type.type';
import { FaceSnap } from './../models/face-snap';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FaceSnapsService {
  private faceSnaps: FaceSnap[] = [
    new FaceSnap(
      'Beyoncé Renaissance World Tour',
      'The best concert of my life !',
      new Date(),
      150,
      'https://pictures.laprovence.com/cdn-cgi/image/width=1080,format=auto,quality=80,trim.left=0,trim.top=79,trim.height=675,trim.width=1200/media/2023/05/27/20230526_RWT_Paris_Poole_MP1_3412_V1_TP.jpg'
    ),
    new FaceSnap(
      'DisneyLand Paris',
      'I met Mickey !',
      new Date(),
      5,
      'https://a.travel-assets.com/findyours-php/viewfinder/images/res70/495000/495696-disneylandr-paris.jpg'
    ).withLocation('Paris'),
    new FaceSnap(
      'At the waterpool',
      'I learned swim crawl !',
      new Date(),
      90,
      'https://www.mairie-ozoir-la-ferriere.fr/wp-content/uploads/2022/01/Piscine-25-scaled.jpg'
    )
  ];

  public getFaceSnaps(): FaceSnap[] {
    return this.faceSnaps;
  }

  public snapFaceSnapById(faceSnapId: string, snapType: SnapType): void {
    const foundFaceSnap = this.faceSnaps.find(faceSnap => faceSnap.id === faceSnapId);
    if (!foundFaceSnap) {
      throw new Error('FaceSnap not found !');
    }
    foundFaceSnap.snap(snapType);
  }
}
