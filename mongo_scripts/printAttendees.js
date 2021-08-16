// While in mongo shell, use load("./scripts/printAttendees.js"). You will be prompted for db password

let conn = new Mongo("mongo:27017");

let db = conn.getDB("admin");

db.auth("humeone", passwordPrompt())

db = conn.getDB("humeone_db");

cursor = db.attendees.find();
print("[")
while (cursor.hasNext()) {
   printjson(cursor.next());
   print(",")
}
print("]")