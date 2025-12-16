'use server';
import { initializeApp, getApps, getApp, AppOptions } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import { getStorage } from 'firebase-admin/storage';
import { firebaseConfig } from './config';

function getFirebaseAdmin() {
  if (getApps().length > 0) {
    const app = getApp();
    return {
      firebaseApp: app,
      firestore: getFirestore(app),
      storage: getStorage(app),
    };
  }

  // When running on Google Cloud, credentials are automatically discovered.
  // The storageBucket must be provided to use Firebase Storage on the server.
  const appOptions: AppOptions = {
    storageBucket: firebaseConfig.storageBucket,
  };

  const app = initializeApp(appOptions);

  return {
    firebaseApp: app,
    firestore: getFirestore(app),
    storage: getStorage(app),
  };
}

export { getFirebaseAdmin };
