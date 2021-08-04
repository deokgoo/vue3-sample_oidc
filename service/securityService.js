import userManager from './authManager';

export const signIn = () => {
  userManager.signinRedirect();
};

export const signOut = () => {
  userManager.signoutRedirect();
};

export const renewToken = () => new Promise((resolve, reject) => {
  (async () => {
    try {
      const user = await userManager.signinSilent();
      if (user === null) {
        await signIn();
      } else {
        resolve(user);
      }
    } catch (err) {
      reject(err);
    }
  })();
});

export const getUser = () => new Promise((resolve, reject) => {
  (async () => {
    try {
      const user = await userManager.getUser();
      if (user === null) {
        await signIn();
        resolve(null);
      } else {
        resolve(user);
      }
    } catch (err) {
      reject(err);
    }
  })();
});
