export interface RegisterUser {
  email: string;
  password: string;
}

export interface User {
  uid: string;
  email: string;
  name: string;
  photoUrl: string;
}
