"use strict";
import { Model, DataTypes, Optional, Sequelize } from "sequelize";

// Define the attributes of the DoctorClinicSpecialty model
interface DoctorClinicSpecialtyAttributes {
  id: number;
  doctorId: number;
  clinicId: number;
  specialtyId: number;
}

// Define the creation attributes (id is optional as it is auto-generated)
interface DoctorClinicSpecialtyCreationAttributes
  extends Optional<DoctorClinicSpecialtyAttributes, "id"> {}

module.exports = (sequelize: Sequelize) => {
  class DoctorClinicSpecialty
    extends Model<
      DoctorClinicSpecialtyAttributes,
      DoctorClinicSpecialtyCreationAttributes
    >
    implements DoctorClinicSpecialtyAttributes
  {
    public id!: number;
    public doctorId!: number;
    public clinicId!: number;
    public specialtyId!: number;

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
  DoctorClinicSpecialty.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      doctorId: {
        type: DataTypes.INTEGER,
      },
      clinicId: {
        type: DataTypes.INTEGER,
      },
      specialtyId: {
        type: DataTypes.INTEGER,
      },
    },
    {
      sequelize,
      modelName: "DoctorClinicSpecialty",
    }
  );

  return DoctorClinicSpecialty;
};
