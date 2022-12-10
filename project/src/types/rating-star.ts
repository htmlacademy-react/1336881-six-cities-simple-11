export enum Grade {
  star1 = 'terribly',
  star2 = 'badly',
  star3 = 'not bad',
  star4 = 'good',
  star5 = 'perfect',
}

export type Stars = {
  title: Grade;
  id: number;
  currentRating: number;
  onChange: (evt:React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void;
}
