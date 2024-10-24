export interface INewPost {
  title: string;
  description: string;
}

export interface IPost {
  datetime: string;
  description: string;
  title: string;
  id: string;
}

export interface IPostAPI {
  [id: string]: IPost;
}

export interface DataTime {
  data: string;
  time: string;
}


