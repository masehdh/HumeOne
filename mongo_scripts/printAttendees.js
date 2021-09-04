// While in mongo shell, use load("./scripts/printAttendees.js")

conn = new Mongo("mongo:27017");
db = conn.getDB("admin");

db.auth("humeone", passwordPrompt());

db = conn.getDB("humeone_db");

query = {};

// To check new results:
// query = {createdAt: {$gt: ISODate("2021-08-14T03:29:23.489Z")}}
// You need to replace the argument in the ISO date

// To see attendees that are registered for events:
// query = {$where: "this.eventIds.length > 0"}
// $where allows you to use basically any javascript, which is flexibile, but it is slower than native query operators

projection = { _id: false, firstName: true, lastName: true, email: true, city: true };

cursor = db.attendees.find(query, projection).pretty();

print("[");

cursor.forEach((doc) => {
   printjson(doc)
   print(",")
});

print("]");