const db = require('./firebaseAdminInit');
const mock = require('./courses');

// const collectionName = 'courses'; // Firestore collection name

// async function populateDB() {
//   console.log(`Populating the '${collectionName}' collection with courses data...`);

//   const batch = db.batch();

//   mock.coursesData.forEach(course => {
//     const docRef = db.collection(collectionName).doc(); // Let Firestore generate the document ID
//     batch.set(docRef, course);
//   });

//   await batch.commit();

//   console.log(`Successfully added ${mock.coursesData.length} documents to the '${collectionName}' collection.`);
// }

// populateDB().catch(console.error);


async function populateDB(
    parentCollectionName,
    parentData,
    nestedCollectionName = null,
    nestedData = null,
    linkField = null
) {
    console.log(`Populating ${parentCollectionName} data...`);

    // Using forEach to iterate over the parent data
    parentData.forEach(async (item) => {
        const parentRef = db.collection(parentCollectionName).doc(); // Create a new document reference for a parent item
        await parentRef.set(item); // Add parent item data

        // Check if nested collection data and linking field are provided
        if (nestedCollectionName && nestedData && linkField) {
            console.log(`Populating nested ${nestedCollectionName} data...`);

            const nestedItemsToAdd = nestedData.filter(
                (nestedItem) => nestedItem[linkField] === item.seqNo
            );
            
            nestedItemsToAdd.forEach(async (nestedItem) => {
                await parentRef
                    .collection(nestedCollectionName)
                    .add(nestedItem); // Add nested item data to the sub-collection
            });
        }
    });

    console.log(
        `Successfully populated ${parentCollectionName} and ${nestedCollectionName} data (if provided).`
    );
}

// Example usage
populateDB(
    'courses',
    mock.coursesData,
    'lessons',
    mock.lessonsData,
    'courseId'
).catch(console.error);
