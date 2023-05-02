import { FootballSquad } from "./FootballSquad";

export interface League {
  name: string;
  teams: FootballSquad[];
  logo: string;
}
