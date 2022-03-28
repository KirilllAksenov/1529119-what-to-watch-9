export type Comment = {
  comment: string;
  date: string;
  id: number;
  rating: number;
  user: {
    id: number;
    name: string;
  }
};

export type Comments = Comment[];

export type CommentData = {
  comment: string;
  rating: number;
  filmId: number;
};
