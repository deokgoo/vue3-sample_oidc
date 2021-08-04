import Oidc from 'oidc-client';
import 'babel-polyfill';

const userManager = new Oidc.UserManager({
  userStore: new Oidc.WebStorageStateStore(),
  authority: 'https://localhost:44321',
  client_id: 'vuejsclient',
  redirect_uri: window.location.origin + '/static/callback.html',
  response_type: 'id_token token',
  scope: 'openid profile address roles identityserver4api country subscriptionlevel offline_access',
  post_logout_redirect_uri: window.location.origin + '/index.html',
  silent_redirect_uri: window.location.origin + '/static/silent-renew.html',
  accessTokenExpiringNotificationTime: 10,
  automaticSilentRenew: true,
  filterProtocolClaims: true,
  loadUserInfo: true,
});

Oidc.Log.logger = console;
Oidc.Log.level = Oidc.Log.INFO;

userManager.events.addUserLoaded((user) => {
  console.log('New User Loaded：', user);
  console.log('Acess_token: ', user.access_token);
});

userManager.events.addAccessTokenExpiring((args) => {
  console.log('AccessToken Expiring：', args);
});

userManager.events.addAccessTokenExpired((args) => {
  console.log('AccessToken Expired：', args);
  alert('Session expired. Going out!');
  (async () => {
    try {
      const resp = await userManager.signoutRedirect();
      console.log('signed out', resp);
    } catch (err) {
      console.log(err);
    }
  })();
});

userManager.events.addSilentRenewError((args) => {
  console.error('Silent Renew Error：', args);
});

userManager.events.addUserSignedOut(() => {
  (async () => {
    try {
      const resp = await userManager.signoutRedirect();
      console.log('signed out', resp);
    } catch (err) {
      console.log(err);
    }
  })();
});

export default userManager;
