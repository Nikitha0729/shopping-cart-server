import { faker } from "@faker-js/faker";
import { MongoClient, ObjectId } from "mongodb";

const uri =
  "mongodb+srv://vinitha:6nEye3eS1xaCOyvI@cluster0.28ve347.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri);

async function generateAndInsertFakeData() {
  try {
    await client.connect();
    console.log("Connected to MongoDB");

    const db = client.db("vinitha");
    const collection = db.collection("cart");

    const records = [];
    const numRecords = 15;

    for (let i = 0; i < numRecords; i++) {
      const record = {
        _id: new ObjectId(),
        name: faker.commerce.productName(),
        description: faker.commerce.productDescription(),
        price: faker.commerce.price(),
        quantity: faker.number.int({ min: 1, max: 10 }),
        image: faker.image.urlLoremFlickr({ category: "food" }),
        productId: faker.string.uuid(),
        userId: faker.string.uuid(),
      };

      records.push(record);
    }

    await collection.insertMany(records);
    console.log(`Inserted ${numRecords} records into the collection`);
  } catch (err) {
    console.error("Error:", err);
  } finally {
    await client.close();
    console.log("Disconnected from MongoDB");
  }
}

generateAndInsertFakeData();
