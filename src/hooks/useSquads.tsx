import React, { useContext, useEffect, useState } from "react";
import { collection, addDoc } from 'firebase/firestore';
import { useCollectionData } from 'react-firebase-hooks/firestore';

import { FootballSquad } from '../entities/FootballSquad';
import { League } from '../entities/League';
import { User } from "../pages/Users/User";
import { firestore } from "../firebase/firebase";

type SquadContextState = [
  League[],
  (league: League) => Promise<League>
];
const defaultValue: SquadContextState = [
  [],
  (league) => Promise.resolve(league)
];
const SquadContext = React.createContext<SquadContextState>(defaultValue);

export default function useSquads() {
  return useContext(SquadContext);
}

export const SquadProvider: React.FC<{ children: React.ReactElement | React.ReactElement[] }> = ({ children }) => {
  const [leagues, setLeagues] = useState<League[]>([]);
  const leaguesRef: any = collection(firestore, 'leagues');
  const [leaguesData] = useCollectionData<League>(leaguesRef);

  useEffect(() => {
    setLeagues(leaguesData ? leaguesData : []);
  }, [leaguesData]);

  const addLeague = async (league: League): Promise<League> => {
    await addDoc(leaguesRef, league);
    return league;
  }

  return (
    <SquadContext.Provider value={[leagues, addLeague]}>
      { children }
    </SquadContext.Provider>
  );
}