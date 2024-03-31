const admin = require('firebase-admin');

// Initialize Firebase Admin SDK with your service account
const serviceAccount = require('../service_account.json');
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();

// Your provided course data
const coursesData = [
    {
        titles: {
            description: 'Serverless Angular with Firebase Course',
            longDescription: 'Serveless Angular with Firestore, Firebase Storage & Hosting, Firebase Cloud Functions & AngularFire'
        },
        iconUrl: 'https://s3-us-west-1.amazonaws.com/angular-university/course-images/serverless-angular-small.png',
        lessonsCount: 10,
        categories: ['BEGINNER'],
        seqNo: 0,
        url: 'serverless-angular'
    },
    {
        titles: {
            description: 'Angular Core Deep Dive',
            longDescription: 'A detailed walk-through of the most important part of Angular - the Core and Common modules'
        },
        iconUrl: 'https://s3-us-west-1.amazonaws.com/angular-university/course-images/angular-core-in-depth-small.png',
        lessonsCount: 10,
        categories: ['BEGINNER'],
        seqNo: 2,
        url: 'angular-core-course'
    }
];

const collectionName = 'courses'; // Firestore collection name

async function populateDB() {
  console.log(`Populating the '${collectionName}' collection with courses data...`);

  const batch = db.batch();

  coursesData.forEach(course => {
    const docRef = db.collection(collectionName).doc(); // Let Firestore generate the document ID
    batch.set(docRef, course);
  });

  await batch.commit();

  console.log(`Successfully added ${coursesData.length} documents to the '${collectionName}' collection.`);
}

populateDB().catch(console.error);
