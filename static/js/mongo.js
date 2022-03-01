// import 'dotenv/config'
// require('dotenv').config()
const{MongoClient} = require('mongodb');
async function main () {
    const uri = "mongodb+srv://bakera:Ew1KJbtbhWk5juZO@cluster0.ndlmg.mongodb.net/myFirstDatabase"
    const client = new MongoClient(uri);
    try {
        await client.connect();

        await findMetadata(client, "621d0f7ae6a951b392a3d6ea");
    } catch (e) {
        console.log(e);
    } finally {
        await client.close();
    }


}
main().catch(console.error);


async function findMetadata(client, response) {
    const result = await client.db("humanTrafficking").collection("metadata").findOne({dates:response});
    if (result) {
        console.log(`Found dates:'${response}'`);
        console.log(result);
    } else {
        console.log(`No dates '${response}'`);
    }
}

async function listDatabases(client) {
    const databasesList = await client.db().admin().listDatabases();
    console.log("Databases:");
    databasesList.databases.forEach(db => {
        console.log(`-${db.name}`);
    })
}