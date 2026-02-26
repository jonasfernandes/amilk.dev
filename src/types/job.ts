export type Job = {
  _id: string;
  company: string;
  title: string;
  location: string;
  from: Date;
  to: Date;
  description: string;
  image: string;
};

export type JobApi = {
  _id: string;
  company: string;
  title: string;
  location: string;
  from: string;
  to: string;
  description: Array<Description>;
  image: string;
};

export type Description = {
  value: string;
  _key: string;
  _type: string;
};
