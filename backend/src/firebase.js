import firebaseAdmin from 'firebase-admin';


const admin = firebaseAdmin.initializeApp ({
        credential: firebase.credential.cert({
        projectId: process.env.GCP_PROJECT_ID,
        clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
        privateKey: process.env.FIREBASE_PRIVATE_KEY,
}),
        databaseURL: process.env.FIREBASE_DATABASE_URL
},
    'server',
)

const CreateUserToken = async (args, ctx) => {

  const idToken = args.idToken.toString()
  const csrfToken = args.csrfToken.toString()

  if (csrfToken !== ctx.request.cookies.csrfToken) {
    return { error: 'Unauthorised request', token: null }
}


// This functions guards against ID token theft cause the internet says so???
// Only process if user has logged in within the last 5 minutes, rejects and require reauth??
    const decodedIdToken = await firebaseAdmin.auth().verifyIdToken(idToken)
  if (!(new Date().getTime() / 1000 - decodedIdToken.auth_time < 5 * 60))
    return { error: { message: 'Recent sign in required!' }, token: null }


const expiresIn = 60 * 60 * 24 * 5 * 1000

const token = await admin
.auth()
.createSessionCookie(idToken, { expiresIn })
.catch(error => {
  return {
    error: { message: 'User Session Token Creation Error', stack: error },
    token: null,
  }
})
if (token) return { error: false, token }
else return { error: 'User Session Token Creation Error', token: null }
}


const verifyUserToken = async token => {
    const claims = await admin
        .auth()
        .verifySessionCookie(token, true)
        .catch(error => {
            return {
                error: {
                    message: 'User Session Token Verification Error',
                     stack: error,
                },
                claims: null,
            }
        })
    
    if (claims) return { error: false, claims }
        else
            return {
                error: { message: 'User Session Token Verification Error' },
                 claims: null,
            }
}

const setUserClaims = (uid, data) => admin.auth().setCustomUserClaims(uid, data)

const getUser = uid => admin.auth().getUser(uid)

const verifyIdToken = idToken => admin.auth().verifyIdToken(idToken)

const getUID = async idToken => {
  const decodedToken = await admin.auth().verifyIdToken(idToken)
  return decodedToken.uid
}


