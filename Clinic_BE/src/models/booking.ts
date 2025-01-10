"use strict";
import { Model, DataTypes, Optional, Sequelize } from "sequelize";

// Define the attributes of the Booking model
interface BookingAttributes {
  id: number;
  statusId: string;
  doctorId: number;
  patientId: number;
  date: Date;
  timeType: string;
}

// Define the creation attributes (id is optional as it is auto-generated)
interface BookingCreationAttributes extends Optional<BookingAttributes, "id"> {}

module.exports = (sequelize: Sequelize) => {
  class Booking
    extends Model<BookingAttributes, BookingCreationAttributes>
    implements BookingAttributes
  {
    public id!: number;
    public statusId!: string;
    public doctorId!: number;
    public patientId!: number;
    public date!: Date;
    public timeType!: string;

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
  Booking.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      statusId: {
        type: DataTypes.STRING,
      },
      doctorId: {
        type: DataTypes.INTEGER,
      },
      patientId: {
        type: DataTypes.INTEGER,
      },
      date: {
        type: DataTypes.DATE,
      },
      timeType: {
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      modelName: "Booking",
    }
  );

  return Booking;
};
