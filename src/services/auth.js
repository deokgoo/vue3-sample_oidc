import Oidc, { UserManager } from 'oidc-client';

const AUTH_SERVER = 'https://demo.identityserver.io';
const CLIENT_SERVER = 'http://localhost:8080';

class AuthService {
  static userManager;

  constructor() {
    AuthService.instance();
  }

  static instance() {
    if (!AuthService.userManager) {
      AuthService.userManager = new UserManager({
        userStore: new Oidc.WebStorageStateStore(),
        authority: AUTH_SERVER,
        client_id: 'interactive.confidential',
        client_secret: 'secret',
        redirect_uri: `${CLIENT_SERVER}/callback`,
        response_type: 'code',
        scope: 'openid profile email offline_access',
        post_logout_redirect_uri: `${CLIENT_SERVER}`,
        silent_redirect_uri: `${CLIENT_SERVER}/silent-renew`,
      });
    }
    return AuthService.userManager;
  }
}

export default AuthService;
