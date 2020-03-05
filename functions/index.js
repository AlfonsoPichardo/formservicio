// Este texto se ejecuta en el servidor.
/** Se importa el objeto functions de la librería "firebase-functions". */
const functions = require('firebase-functions');

/* Se exporta la función sobre https llamada "saludo". */
exports.recomendar = functions.https.onRequest(
  /** Código para la función saludo.
   * @param {{query:Object}} request solicitud que recibe el servidor.
   * Corresponde a la librería Express.
   * @param {{send:(texto:string)=>void}} response respuesta que devuelve el
   * servidor. Corresponde a la librería Express. */
  (request, response) => {
    try {
      // verifica que el parámetro nombre1 recibido del navegador esté correcto.
      if (!request.query.estado) {
        // Entra aquí si el nombre1 es null, undefined o ""
        throw new Error("Falta el estado");
      } else if (!request.query.descr) {
        // Entra aquí si el nombre2 es null, undefined o ""
        throw new Error("Falta la descripcion");
      }
      /* Solo se llega a esta parte si nombre1 y nombre 2 tienen un texto.
       * Devuelve un saludo. */
      response.send(
        `El estado: ${request.query.estado} es:  ${request.query.descr}`);
    } catch (e) {
      // Devuelve un texto de error.
      response.send(e.message);
    }
});