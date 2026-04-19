export const homePath = '/home'

export const authenticationRoutes = {
    authenticationPage: '/authenticate',
    loginPage: '/authenticate/login',
    registerPage: '/authenticate/register'
}

export const appointmentRoutes = {
    searchLocationsPage: '/search/locations',
    locationPage: (locationId) => `/location/${locationId}`,
    makeAppointmentPage: (locationId) => `/location/${locationId}/appointment`
}