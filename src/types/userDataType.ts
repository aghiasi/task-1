export interface Init {
  loading: boolean;
  userData: User;
  error: "";
}
export interface User {
  name: string;
  fname: string;
  username: string;
  picture: string;
  age: number;
  gender: string;
  email: string;
  location: Location;
}
interface Location {
  city: string;
  country: string;
  state: string;
  street: Street;
}
interface Street {
  name: string;
  number: number;
}
