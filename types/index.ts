export type Movie = {
  Poster: string;
  Title: string;
  Type: string;
  Year: string;
  imdbID: string;
}

export type Rating = {
  Source: string;
  Value: string;
}

export type MovieDetails = {
Actors: string;
Awards: string;
BoxOffice: string;
Country: string;
DVD: string;
Director: string;
Genre: string;
Language: string;
Metascore: string;
Plot: string;
Poster: string;
Production: string;
Rated: string;
Ratings: Rating[],
Released: string;
Response: string;
Runtime: string;
Title: string;
Type: string;
Website: string;
Writer: string;
Year: string;
imdbID: string;
imdbRating: string;
imdbVotes: string;
}

export type MovieCollection = Movie[]

export type ApiResult = {
  Response: 'True' | 'False',
  Search?: MovieCollection,
  totalResults?: string,
  Error?: string,
}
