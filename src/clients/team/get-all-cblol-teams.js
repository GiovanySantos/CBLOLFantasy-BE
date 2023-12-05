import { LOL_ESPORTS_API_URL, PUBLIC_API_KEY } from '../../settings';

export const getAllCBLOLTeams = async () => {
  const cblolId = 110413046183015975;
  const { data } = await fetch(
    `${LOL_ESPORTS_API_URL}&tournamentId=${cblolId}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'X-Api-Key': PUBLIC_API_KEY,
      },
    }
  );
  return data;
};
