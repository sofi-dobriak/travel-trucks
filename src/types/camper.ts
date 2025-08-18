export interface CamperImage {
  thumb: string;
  original: string;
}

export interface CamperReview {
  reviewer_name: string;
  reviewer_rating: number;
  comment: string;
}

export interface Camper {
  id: string;
  name: string;
  price: string;
  rating: number;
  location: string;
  description: string;
  gallery: CamperImage[];
  reviews: CamperReview[];
  form: string;
  length: string;
  width: string;
  height: string;
  tank: string;
  consumption: string;
  transmission: string;
  engine: string;
  AC: boolean;
  bathroom: boolean;
  kitchen: boolean;
  TV: boolean;
  radio: boolean;
  refrigerator: boolean;
  microwave: boolean;
  gas: boolean;
  water: boolean;
}

export interface CampersPagination {
  page: string;
  limit: string;
}
