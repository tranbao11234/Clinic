"use strict";
import { Model, DataTypes, Optional, Sequelize } from "sequelize";

// Define the attributes of the Clinic model
interface ClinicAttributes {
  id: number;
  name: string;
  address: string;
  description: string;
  image: string;
}

// Define the creation attributes (id is optional as it is auto-generated)
interface ClinicCreationAttributes extends Optional<ClinicAttributes, "id"> {}

module.exports = (sequelize: Sequelize) => {
  class Clinic
    extends Model<ClinicAttributes, ClinicCreationAttributes>
    implements ClinicAttributes
  {
    public id!: number;
    public name!: string;
    public address!: string;
    public description!: string;
    public image!: string;

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
  Clinic.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING,
      },
      address: {
        type: DataTypes.TEXT,
      },
      description: {
        type: DataTypes.TEXT,
      },
      image: {
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      modelName: "Clinic",
    }
  );

  return Clinic;
};
