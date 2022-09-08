require('isomorphic-fetch');

// docs on how to use client credential flows:
// https://docs.microsoft.com/en-us/graph/sdks/choose-authentication-providers?tabs=Javascript#client-credentials-provider
const {
    Client
} = require("@microsoft/microsoft-graph-client");
const {
    TokenCredentialAuthenticationProvider
} = require("@microsoft/microsoft-graph-client/authProviders/azureTokenCredentials");
const {
    ClientSecretCredential
} = require("@azure/identity");

tenantId = "asfd";
clientId = "fasdf";
clientSecret = "asdfdf";

const credential = new ClientSecretCredential(tenantId, clientId, clientSecret);
const authProvider = new TokenCredentialAuthenticationProvider(credential, {
    scopes: ['https://graph.microsoft.com/.default']
});

const client = Client.initWithMiddleware({
    debugLogging: true,
    authProvider
    // Use the authProvider object to create the class.
});

async function get_group_users() {
    // let users = await client.api('/users').get();
    let users = await client.api('/users').get();
    let emails = users.value.map(user => user.mail);
    emails = emails.filter(email => email != null);
    console.log(emails);
    return emails;
}

module.exports = {
    get_group_users: get_group_users
}
