"use strict";
import { Model, DataTypes, Optional, Sequelize } from "sequelize";

// Define the attributes of the AllCode model
interface AllCodeAttributes {
  id: number;
  key: string;
  type: string;
  valueEn: string;
  valueVi: string;
}

// Define the creation attributes (id is optional as it is auto-generated)
interface AllCodeCreationAttributes extends Optional<AllCodeAttributes, "id"> {}

module.exports = (sequelize: Sequelize) => {
  class AllCode
    extends Model<AllCodeAttributes, AllCodeCreationAttributes>
    implements AllCodeAttributes
  {
    public id!: number;
    public key!: string;
    public type!: string;
    public valueEn!: string;
    public valueVi!: string;

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
  AllCode.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      key: {
        type: DataTypes.STRING,
      },
      type: {
        type: DataTypes.STRING,
      },
      valueEn: {
        type: DataTypes.STRING,
      },
      valueVi: {
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      modelName: "AllCode",
    }
  );

  return AllCode;
};
