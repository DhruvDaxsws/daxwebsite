'use server';
import { initializeApp, getApps, getApp, AppOptions } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';

function getFirebaseAdmin() {
  let app;
  if (getApps().length > 0) {
    app = getApp();
  } else {
    // This will use the GOOGLE_APPLICATION_CREDENTIALS environment variable
    // for authentication, which is the standard practice in a server environment.
    app = initializeApp();
  }

  const firestore = getFirestore(app);
  
  return {
    firebaseApp: app,
    firestore: firestore,
  };
}

export { getFirebaseAdmin };
