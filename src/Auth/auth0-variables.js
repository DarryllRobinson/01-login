// Development
/*
export const AUTH_CONFIG = {
  domain: 'fcmcms.eu.auth0.com',
  clientId: 'K3OQ3jHTVXcGu8mTgA4ayA92Pl7LUs3Z',
  callbackUrl: 'http://localhost:3000/callback'
}
*/
// Production

export const AUTH_CONFIG = {
  domain: 'fcmcms.eu.auth0.com',
  clientId: 'W9w3YzgENsp1zkT40TAUr7VxYVcyj6iN',
  callbackUrl: process.env.NODE_ENV === 'development' ? 'http://localhost:3000/callback' : 'https://www.stillproud.com/callback',
}
