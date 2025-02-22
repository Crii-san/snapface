import { SnapType } from './snap-type.type';
export class FaceSnap {
  public id: string;
  public title: string;
  public description: string;
  public createdDate: Date;
  public snaps: number;
  public imageUrl: string;
  public location?: string;

  constructor(title: string, description: string, createdDate: Date, snaps: number, imageUrl: string) {
    this.title = title;
    this.description = description;
    this.createdDate = createdDate;
    this.snaps = snaps;
    this.imageUrl = imageUrl;
    this.id = crypto.randomUUID().substring(0, 8);
  }

  public addSnap(): void {
    this.snaps++;
  }

  public removeSnap(): void {
    this.snaps--;
  }

  public setLocation(location: string) : void {
    this.location = location;
  }

  public withLocation(location: string): FaceSnap {
    this.setLocation(location);
    return this;
  }

  public snap(snapType: SnapType) {
    if (snapType === 'snap') {
      this.addSnap();
    } else {
      this.removeSnap();
    }
  }
}

