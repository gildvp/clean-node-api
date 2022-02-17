export class ServerError extends Error {
  constructor () {
    super('Error interno do Servidor! Tente novamente mais tarde.')
    this.name = 'ServerError'
  }
}
