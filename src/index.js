
import db from './db/conexion'
import config from './db/config'

const run = async () => {
  try {
    const con = db(config)
    const strQuery = `select nombre from clientes`
    const result = await con.mysql.query(strQuery, con.opSequelize)
    console.log(result)
  } catch (err) {
    console.error(`Error 501: ${err}`)
  }
}
run()
