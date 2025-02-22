export class FaceSnap {
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
}

