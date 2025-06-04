export default function callbackSample() {
  const url = 'https://api.github.com/users/dlatth';

  const fetchProfile = () => {
    return fetch(url)
      .then((res) => {
        res
          .json()
          .then((json) => {
            console.log('Asynchronous Callback Sample 1:', json);
            return json;
          })
          .catch((error) => {
            console.error(error);
            return null;
          });
      })
      .catch((error) => {
        console.error(error);
        return null;
      });
  };

  const profile = fetchProfile();
  console.log('Asynchronous Callback Sample 2:', profile);
}
