import Sequelize from 'sequelize'

let db = null

export default config => {
  if (!db) {
    const mysql = new Sequelize(
      config.database,
      config.username,
      config.password,
      config.params
    )
    const opSequelize = {
      type: Sequelize.QueryTypes.SELECT
    }

    db = {
      mysql,
      opSequelize
    }
    return db
  }
  return db
}
