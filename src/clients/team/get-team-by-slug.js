import { LOL_ESPORTS_API_URL, PUBLIC_API_KEY } from '../../settings';

export const getTeamBySlug = async ({ slug } = {}) => {
  const { data } = await fetch(`${LOL_ESPORTS_API_URL}&id=${slug}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'X-Api-Key': PUBLIC_API_KEY,
    },
  });
  return data;
};
