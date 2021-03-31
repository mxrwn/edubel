const url = 'http://localhost:8000';

const RegisterUser = async (user) =>{
    const result = await fetch(`${url}/users/register`, {
      method : 'POST',
      headers : {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body : JSON.stringify(user)
    })
    const data = result.json();
    return data;
}

const LoginUser = async (user) =>{
  const result = await fetch(`${url}/users/login`, {
    method : 'POST',
    headers : {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body : JSON.stringify(user)
  })
  const data = result.json();
  return data;
}

const DecodeToken = async (token) =>{
  const result = await fetch(`${url}/users/decodeToken`, {
    method : 'POST',
    headers : {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body : JSON.stringify(token)
  })
  const data = result.json();
  return data;
}
export {
  RegisterUser,
  LoginUser,
  DecodeToken
}