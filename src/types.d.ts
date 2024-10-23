export interface INewPost {
  title: string;
  description: string;
  message: string;
}

export interface IPost {
  datetime: string;
  description: string;
  message: string;
  title: string;
}

export interface IPostAPI {
  [id: string]: IPost;
}