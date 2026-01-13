export type Profile = {
  _id: string;
  name: string;
  born: Date;
  location: string;
  description: string;
  image: string;
};

export type ProfileApi = {
  _id: string;
  name: string;
  born: Date;
  location: string;
  description: Array<Description>;
  image: string;
};

export type Description = {
  value: string;
  _key: string;
  _type: string;
};
