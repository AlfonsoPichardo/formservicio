// Este texto se ejecuta en el servidor.
/** Se importa el objeto functions de la librería "firebase-functions". */
const functions = require('firebase-functions');

/* Se exporta la función sobre https llamada "saludo". */
exports.recom = functions.https.onRequest(
  /** Código para la función saludo.
   * @param {{query:Object}} request solicitud que recibe el servidor.
   * Corresponde a la librería Express.
   * @param {{send:(texto:string)=>void}} response respuesta que devuelve el
   * servidor. Corresponde a la librería Express. */
  (request, response) => {
    try {
      // verifica que el parámetro nombre1 recibido del navegador esté correcto.
      if (!request.query.est) {
        // Entra aquí si el nombre1 es null, undefined o ""
        throw new Error("Falta El Estado:");
      } else if (!request.query.desc) {
        // Entra aquí si el nombre2 es null, undefined o ""
        throw new Error("Falta La Descripcion: ");
      }
      /* Solo se llega a esta parte si nombre1 y nombre 2 tienen un texto.
       * Devuelve un saludo. */
      response.send(
        `El Estado: ${request.query.est} Es: ${request.query.desc}`);
    } catch (e) {
      // Devuelve un texto de error.
      response.send(e.message);
    }
  });