import { Note } from "src/app/models/Note";

export interface User {
  notes: Note[];
  name: string;
  token: string;
  isUserLoggedIn: boolean;
}
