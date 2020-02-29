import axios from 'axios';

class Auth0 {

    static async signUp(signUpRequest) {
        const {
            email,
            password,
            name
        } = signUpRequest

        return await axios.post('https://familyplatform.auth0.com/dbconnections/signup', {
            client_id: 'Ab2NqxSq8TWURXD2NYsUqhPWNX3QWBS4',
            email,
            password,
            connection: 'Username-Password-Authentication',
            name,
            user_metadata: {}
        }, {
            headers: {
                'content-type': 'application/json'
            }
        })
    }


}
