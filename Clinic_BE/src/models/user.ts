"use strict";
import { Model, DataTypes, Optional, Sequelize } from "sequelize";

// Define the attributes of the User model
interface UserAttributes {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  address: string;
  gender: boolean;
  phoneNumber: string;
  image: string;
  positionId: string;
  roleId: string;
}

// Define the creation attributes (id is optional as it is auto-generated)
interface UserCreationAttributes extends Optional<UserAttributes, "id"> {}

module.exports = (sequelize: Sequelize) => {
  class User
    extends Model<UserAttributes, UserCreationAttributes>
    implements UserAttributes
  {
    public id!: number;
    public firstName!: string;
    public lastName!: string;
    public email!: string;
    public password!: string;
    public address!: string;
    public gender!: boolean;
    public phoneNumber!: string;
    public positionId!: string;
    public image!: string;
    public roleId!: string;

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
  User.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      firstName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      address: {
        type: DataTypes.STRING,
      },
      gender: {
        type: DataTypes.BOOLEAN,
      },
      phoneNumber: {
        type: DataTypes.STRING,
      },
      image: {
        type: DataTypes.STRING,
      },
      positionId: {
        type: DataTypes.STRING,
      },
      roleId: {
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      modelName: "User",
      tableName: "users", // Add table name explicitly if needed
      timestamps: true, // Optionally set to false if no timestamps are needed
    }
  );

  return User;
};
