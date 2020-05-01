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
