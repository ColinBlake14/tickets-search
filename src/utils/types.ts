type QandAT = {
  q: string, 
  a: string
}

type QandADataArrT = Array<QandAT>;

type FactT = {fact: string};

type FactsT = Array<FactT>;

interface MovieI {
  title: string,
  posterUrl: string,
  releaseYear: number,
  description: string,
  genre: string,
  id: string,
  rating: number,
  director: string,
  reviewIds: Array<string>,
}

interface MovieCutI {
  title: string,
  posterUrl: string,
  genre: string,
  id: string,
}

interface GetMoviesI {
  status: string,
  endpointName: string,
  requestId: string,
  startedTimeStamp: number,
  fulfilledTimeStamp: number,
  data: Array<MovieI>
}

interface CommentI {
  id: string,
  name: string,
  text: string,
  rating: number
}

interface CartElemI extends MovieCutI {
  count: number;
}

