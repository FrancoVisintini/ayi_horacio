
db.createCollection("usuarios_validacion",{
    validator: {
      $jsonSchema : {
        required : ["nombre","edad"],
        properties : {
          nombre : {
            "bsonType" : "string",
          },
          edad : {
            "bsonType" : "int"
          }
        }
      }
    }
})