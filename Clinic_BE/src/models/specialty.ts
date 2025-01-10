"use strict";
import { Model, DataTypes, Optional, Sequelize } from "sequelize";

// Define the attributes of the Specialty model
interface SpecialtyAttributes {
  id: number;
  name: string;
  description: string;
  image: string;
}

// Define the creation attributes (id is optional as it is auto-generated)
interface SpecialtyCreationAttributes
  extends Optional<SpecialtyAttributes, "id"> {}

module.exports = (sequelize: Sequelize) => {
  class Specialty
    extends Model<SpecialtyAttributes, SpecialtyCreationAttributes>
    implements SpecialtyAttributes
  {
    public id!: number;
    public name!: string;
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
  Specialty.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING,
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
      modelName: "Specialty",
    }
  );

  return Specialty;
};
