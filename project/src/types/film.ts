export type Film = {
    id: number,
    name: string,
    posterImage: string,
    previewImage: string,
    backgroundImage: string,
    backgroundColor: string,
    videoLink: string,
    previewVideoLink: string,
    description: string,
    rating: number,
    scoresCount: number,
    director: string,
    starring: string[],
    runTime: number,
    genre: string,
    released: number,
    isFavorite: boolean,
};

export type FilmStatus= {
  filmId: number;
  status: Favorite;
}

type Favorite = 1 | 0;
