export type Offer = {
  id: number;
  picture: string;
  premium: boolean;
  price: number;
  title: string;
  type: string;
  rating: number;
  location: {
    latitude: number;
    longitude: number;
    zoom: number;
  };
}
