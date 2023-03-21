import axios from 'axios';

const BACKEND_URL =
  'https://bankahlytask-default-rtdb.europe-west1.firebasedatabase.app';
// export async function storeUserData(data){
//   const respone = axios.post(BACKEND_URL + '/Users.json', data);

// }

// export async function storeUserData(userId){

// }

export async function storeBenefData(data, userId) {
  // Note: all nodes in firebase have format .json,
  //so here when I added /UsersData.json i am telling firebase that i want to access Users.Data node
  data['userId'] = userId;
  const respone = axios.post(BACKEND_URL + '/Benefeciaries.json', data);
  const id = respone.data.name;

  return id;
}

export async function fetchBenefData(userId) {
  const response = await axios.get(BACKEND_URL + '/Benefeciaries.json');

  const data = [];

  for (const key in response.data) {
    if (userId === response.data[key].userId) {
      const userObject = {
        id: key,
        firstName: response.data[key].firstName,
        lastName: response.data[key].lastName,
        accountNumber: response.data[key].accountNumber,
        bankBranch: response.data[key].bankBranch,
        email: response.data[key].email,
        phoneNumber: response.data[key].phoneNumber,
      };
      data.push(userObject);
    }
  }
  return data;
}

export function updateData(id, data) {
  return axios.put(BACKEND_URL + `/UsersData/${id}.json`, data);
}

export function deleteData(id, data) {
  return axios.delete(BACKEND_URL + `/UsersData/${id}.json`, data);
}
