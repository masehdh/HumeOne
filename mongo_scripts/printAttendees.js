// While in mongo shell, use load("./scripts/printAttendees.js"). You will be prompted for db password

let conn = new Mongo("mongo:27017");

let db = conn.getDB("admin");

db.auth("humeone", passwordPrompt())

db = conn.getDB("humeone_db");

cursor = db.attendees.find();

// To check new results: db.attendees.find({createdAt: {$gt: ISODate("2021-08-14T03:29:23.489Z")}}).pretty()
// You need to replace the argument in the ISO date

print("[")
while (cursor.hasNext()) {
   printjson(cursor.next());
   print(",")
}
print("]")