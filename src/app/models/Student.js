import Sequelize, { Model } from 'sequelize';

class Student extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        email: Sequelize.STRING,
        age: Sequelize.INTEGER,
        weight: Sequelize.DECIMAL(3, 3),
        height: Sequelize.DECIMAL(1, 2),
      },
      {
        sequelize,
      }
    );
    return this;
  }
}

export default Student;
