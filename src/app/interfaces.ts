export interface Servers{
  region: string;
  count: number;
  countries: Country[];
}



export interface Country {
  name: string;
  imageName: string;
  serversCount: number;
  serverFeatures: string[];
}


export interface Article{
  image: string;
  title: string;
  timeToRead: string;
  authorName: string;
  authorAvatar: string;
  articleDate: string;
}


