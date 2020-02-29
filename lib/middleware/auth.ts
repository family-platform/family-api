import {Action} from "routing-controllers";

const jwt = require('koa-jwt');
const jwks = require('jwks-rsa');

const authorizer = jwt({
    secret: jwks.expressJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 5,
        jwksUri: 'https://familyplatform.auth0.com/.well-known/jwks.json'
    }),
    audience: 'https://familyapp.site',
    issuer: 'https://familyplatform.auth0.com/',
    algorithms: ['RS256']
});

export const auth = async (action: Action, roles: string[]) => {
    try {
        await new Promise((resolve, reject) => {
            try {
                authorizer(action.context, () => {
                })
                    .then(resolve)
                    .catch(error => {
                        reject(error);
                    })
            } catch (error) {
                reject(error);
            }
        });
    } catch (error) {
        return false;
    }

    return true;
}
