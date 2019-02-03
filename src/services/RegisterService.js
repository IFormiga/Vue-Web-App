import Api from '@/services/api'

export default {
    register(credentials) {
        return Api().post('register', credentials)
    }
}

RegisterService.register({
        id: "1",
        firstName: "Test",
        middleName: "Test",
        lastName: "Test",
        birthDate: "Test",
        email: "test@test.com",
        country: "Test",
        state: "Test",
        city: "Test",
        addressLine1: "Test",
        addressLine2: "Test",
        zipCode: "Test",
        accountType: "Test",
})
