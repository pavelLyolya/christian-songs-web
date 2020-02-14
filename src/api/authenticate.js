export default async function authenticate(username, password) {
  const data = await fetch( '/admin', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ username, password }),
  });

  if (data.status !== 200) {
    alert('Incorrect credentials!');
    return [ false, null ];
  }

  const authData = await data.json();
  return [ true, authData.jwtToken ];
}
