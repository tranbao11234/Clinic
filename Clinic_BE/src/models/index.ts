"use strict";

import fs from "fs";
import path from "path";
import { Sequelize, DataTypes, Options } from "sequelize";
import process from "process";

const basename = path.basename(__filename);
const env = process.env.NODE_ENV || "development";
const config = require(__dirname + "/../config/config.json")[env];
const db: { [key: string]: any } = {};

let sequelize: Sequelize;

if (config.use_env_variable) {
  sequelize = new Sequelize(
    process.env[config.use_env_variable] as string,
    config as Options
  );
} else {
  sequelize = new Sequelize(
    config.database as string,
    config.username as string,
    config.password as string,
    config as Options
  );
}

fs.readdirSync(__dirname)
  .filter((file: string) => {
    return (
      file.indexOf(".") !== 0 &&
      file !== basename &&
      file.slice(-3) === ".js" &&
      file.indexOf(".test.js") === -1
    );
  })
  .forEach((file: string) => {
    const model = require(path.join(__dirname, file))(sequelize, DataTypes);
    db[model.name] = model;
  });

Object.keys(db).forEach((modelName: string) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;
