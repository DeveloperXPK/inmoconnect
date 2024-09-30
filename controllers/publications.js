function publish(req, res) {
  /*
const publication = new Publication(req.body);
publication.save((err, publicationStored) => {
  if (err) res.status(500).send({ message: `Error al salvar en la base de datos: ${err}` });
  res.status(200).send({ publication: publicationStored });
});
*/
  res.status(200).send("<h1>Welcome to the publication page!</h1>");
}

module.exports = {
  publish
}