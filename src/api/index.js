import axios from 'axios'

const BASE_URL = 'https://api.nanobox.bio' // позже будет в .env


///////GET
export async function getTokenForGoogleAndFacebookAuth(token) {
  return await getAsync(`/api/v1/token-get?token=${token}`)
}

export async function getListOrders() {
  return await getAsync('/api/v1/order')
}

export async function getListTopProducts() {
  return await getAsync('/api/v1/product/top')
}

export async function getListAllProducts() {
  return await getAsync('/api/v1/product')
}

export async function getListRecommendProducts() {
  return await getAsync('/api/v1/nanobox')
}

export async function getCountries() {
  return await getAsync('/api/v1/country')
}

export async function getCities(countryId) {
  return await getAsync('/api/v1/city', countryId)
}

export async function getDetailsProduct(id) {
  return await getAsync(`/api/v1/product/${id}`)
}

export async function getListArticles(page) {
  return await getAsync(`/api/v1/article?page=${page}`)
}

export async function getArticleMainPage() {
  return await getAsync('/api/v1/article/main-page')
}

export async function getArticleById(id) {
  return await getAsync(`/api/v1/article/${id}`)
}

export async function getReviews(page) {
  return await getAsync(page ? `/api/v1/response?page=${page}` : '/api/v1/response')
}

export async function getDoctorsList() {
  return await getAsync('/api/v1/doctor')
}

export async function getGoogleRedirect() {
  return await getAsync('/api/v1/auth/google')
}

export async function getFacebookRedirect() {
  return await getAsync('/api/v1/auth/facebook')
}

export async function getFAQ() {
  return await getAsync('/api/v1/faq')
}

export async function getDetailsNanobox(id) {
  return await getAsync(`/api/v1/nanobox/${id}`)
}

export async function getAddresses() {
  return await getAsync('/api/v1/user-address')
}

export async function getCertificates() {
  return await getAsync('/api/v1/certificate')
}

export async function getCarousel() {
  return await getAsync('/api/v1/carousel')
}

//////POST

export async function sendFeedbackForm(form) {
  return await postAsync('/api/v1/feed-back', form)
}

export async function register(user) {
  return await postAsync('/api/v1/auth/register', user)
}

export async function login(user) {
  return await postAsync('/api/v1/auth/login', user)
}

export async function logout() {
  return await postAsync('/api/v1/auth/logout', null)
}

export async function sendEmail(email) {
  return await postAsync('/api/v1/password/email', email)
}

export async function passwordRecoveryAccessStatus(key) {
  return await postAsync('/api/v1/password/check-access', { user: key })
}

export async function toMakeAppointmentWithADoctor(appointment) {
  return await postAsync('/api/v1/doctor-visit', appointment)
}

export async function addAddress(address) {
  return await postAsync('/api/v1/user-address', address)
}

export async function makeNewOrder(order) {
  return await postAsync('/api/v1/order', order)
}

//////////PUT

export async function changeUserData(user) {
  return await putOrPatchAsync('/api/v1/cabinet', user)
}

export async function updateAddress(id, address) {
  return await putOrPatchAsync(`/api/v1/user-address/${id}`, address)
}

/////////DELETE

export async function deleteAddress(id) {
  return await deleteAsync(`/api/v1/user-address/${id}`)
}

/////////PATCH

export async function updatePassword(password) {
  return await putOrPatchAsync('/api/v1/password/change', password, true, 'patch')
}

//////////////

export async function deleteAsync(url, checkError = true) {
  const config = {
    headers: {
      "Authorization": localStorage.getItem('token') ? `Bearer ${localStorage.getItem('token')}` : '',
      "Content-Type": "application/json",
      "Accept": "application/json",
    }
  }

  try {
    let response = await axios.delete(BASE_URL + url, config)

    if (response.status === 200) {
      return response.data
    }
    if (response.status === 204 || response.status === 201) {
      return true
    }
  } catch (error) {
    if (checkError && error.response) {
      return error.response
    }
    console.error(error)
  }
}
export async function putOrPatchAsync(url, data, checkError = true, method = 'put') {
  const config = {
    headers: {
      "Authorization": localStorage.getItem('token') ? `Bearer ${localStorage.getItem('token')}` : '',
      "Content-Type": "application/json",
      "Accept": "application/json",
    }
  }

  try {
    let response;
    switch (method) {
      case 'put':
        response = await axios.put(BASE_URL + url, data, config)
        break;
      case 'patch':
        response = await axios.patch(BASE_URL + url, data, config)
    }

    if (response.status === 200) {
      return response.data
    }
    if (response.status === 204 || response.status === 201) {
      return true
    }
  } catch (error) {
    if (checkError && error.response) {
      return error.response
    }
    console.error(error)
  }
}

export async function postAsync(url, data, checkError = true) {

  const config = {
    headers: {
      "Authorization": localStorage.getItem('token') ? `Bearer ${localStorage.getItem('token')}` : '',
      "Content-Type": "application/json",
      "Accept": "application/json",
    }
  }

  try {
    let response = await axios.post(BASE_URL + url, data, config)

    if (response.status === 200 || response.status === 201) {
      return response.data
    }
    if (response.status === 204) {
      return true
    }
  } catch (error) {
    if (checkError && error.response) {
      return error.response
    }
    console.error(error)
  }

  return undefined
}


export async function getAsync(url) {
  const config = {
    headers: {
      "Authorization": localStorage.getItem('token') ? `Bearer ${localStorage.getItem('token')}` : '',
      "Content-Type": "application/json",
      "Accept": "application/json",
    }
  }

  try {
    let response = await axios.get(BASE_URL + url, config)
    if (response.status === 200) {
      return response.data
    }
    if (response.status === 302) {
      return response.headers
    }
  } catch (error) {
    if (error?.response?.status === 401) {
      localStorage.removeItem('token')
      return error?.response
    }
    console.error(error)
  }
}
