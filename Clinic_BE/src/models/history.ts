"use strict";
import { Model, DataTypes, Optional, Sequelize } from "sequelize";

// Define the attributes of the History model
interface HistoryAttributes {
  id: number;
  patientId: number;
  doctorId: number;
  description: string;
  files: string;
}

// Define the creation attributes (id is optional as it is auto-generated)
interface HistoryCreationAttributes extends Optional<HistoryAttributes, "id"> {}

module.exports = (sequelize: Sequelize) => {
  class History
    extends Model<HistoryAttributes, HistoryCreationAttributes>
    implements HistoryAttributes
  {
    public id!: number;
    public patientId!: number;
    public doctorId!: number;
    public description!: string;
    public files!: string;

    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models: any): void {
      // define association here
    }
  }

  // Define the model attributes, including the id field
  History.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      patientId: {
        type: DataTypes.INTEGER,
      },
      doctorId: {
        type: DataTypes.INTEGER,
      },
      description: {
        type: DataTypes.TEXT,
      },
      files: {
        type: DataTypes.TEXT,
      },
    },
    {
      sequelize,
      modelName: "History",
    }
  );

  return History;
};
