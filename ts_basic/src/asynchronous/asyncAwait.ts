export default async function asyncAwaitSample() {
  const url = 'https://api.github.com/users/dlatth';

  type Profile = {
    login: string;
    id: number;
  };

  type FetchProfile = () => Promise<Profile | null>;

  const fetchProfile: FetchProfile = async () => {
    const response = await fetch(url)
      .then((response) => response)
      .catch((error) => {
        console.error(error);
        return null;
      });

    if (!response) {
      return null;
    }

    const json = await response
      .json()
      .then((json: Profile) => {
        console.log('Asynchronous Promise Sample 1:', json);
        return json;
      })
      .catch((error) => {
        console.error(error);
        return null;
      });

    if (!json) {
      return null;
    }

    return json;
  };

  fetchProfile().then((profile: Profile | null) => {
    if (profile) {
      console.log('Asynchronous Promise Sample 2:', profile);
    }
  });

  const profile = await fetchProfile();
  if (profile) {
    console.log('Asynchronous Promise Sample 3:', profile);
  }
}
