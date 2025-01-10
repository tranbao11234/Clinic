"use strict";
import { Model, DataTypes, Optional, Sequelize } from "sequelize";

// Define the attributes of the Shedule model
interface ScheduleAttributes {
  id: number;
  currentNumber: number;
  maxNumber: number;
  date: Date;
  timeType: string;
  doctorId: number;
}

// Define the creation attributes (id is optional as it is auto-generated)
interface ScheduleCreationAttributes
  extends Optional<ScheduleAttributes, "id"> {}

module.exports = (sequelize: Sequelize) => {
  class Shedule
    extends Model<ScheduleAttributes, ScheduleCreationAttributes>
    implements ScheduleAttributes
  {
    public id!: number;
    public currentNumber!: number;
    public maxNumber!: number;
    public date!: Date;
    public timeType!: string;
    public doctorId!: number;

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
  Shedule.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      currentNumber: {
        type: DataTypes.INTEGER,
      },
      maxNumber: {
        type: DataTypes.INTEGER,
      },
      date: {
        type: DataTypes.DATE,
      },
      timeType: {
        type: DataTypes.STRING,
      },
      doctorId: {
        type: DataTypes.INTEGER,
      },
    },
    {
      sequelize,
      modelName: "Shedule",
    }
  );

  return Shedule;
};
