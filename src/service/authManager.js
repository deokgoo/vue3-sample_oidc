import Oidc from 'oidc-client';
import 'babel-polyfill';

const { VUE_APP_AUTH_SERVER, VUE_APP_SERVER } = process.env;

console.log(VUE_APP_AUTH_SERVER);

const userManager = new Oidc.UserManager({
  userStore: new Oidc.WebStorageStateStore(),
  authority: VUE_APP_AUTH_SERVER,
  client_id: 'interactive.public',
  response_type: 'code',
  scope: 'openid profile email api offline_access',
  // reirectUri
  redirect_uri: `${VUE_APP_SERVER}/callback.html`,
  post_logout_redirect_uri: `${VUE_APP_SERVER}/logout.html`,
  silent_redirect_uri: `${VUE_APP_SERVER}/static/silent-renew.html`,
  // options
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
