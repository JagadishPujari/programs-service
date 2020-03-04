const programService = require('../service/programService');
const requestMiddleware = require('../middlewares/request.middleware')

const BASE_URL = '/program/v1'

module.exports = function (app) {
  app.route(BASE_URL + '/read/:program_id')
    .get(requestMiddleware.gzipCompression(),requestMiddleware.createAndValidateRequestBody,
    programService.getProgramAPI)

  app.route(BASE_URL + '/create')
    .post(requestMiddleware.gzipCompression(), requestMiddleware.createAndValidateRequestBody,
    programService.createProgramAPI)

  app.route(BASE_URL + '/update')
    .post(requestMiddleware.gzipCompression(), requestMiddleware.createAndValidateRequestBody,
    programService.updateProgramAPI)

  app.route(BASE_URL + '/list')
    .post(requestMiddleware.gzipCompression(), requestMiddleware.createAndValidateRequestBody,
    programService.programListAPI)

  app.route(BASE_URL + '/update/participant')
    .post(requestMiddleware.gzipCompression(), requestMiddleware.createAndValidateRequestBody,
    programService.programUpdateParticipantAPI)
}
