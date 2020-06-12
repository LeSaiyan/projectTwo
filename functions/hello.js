exports.handler = function (event, context, callback) {
  callback(null, {
    statusCode: 200,
    body: JSON.stringify("Hello !"),
  })
}

//event -> declenche la fonction
// callback -> gerer resultat et erreur
// context -> info sur execution de notre environnement + allouer en fonction des ressources
