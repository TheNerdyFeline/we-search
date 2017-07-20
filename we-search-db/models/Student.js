// used to encrypt password in database
var bcrypt = require("bcryptjs");

// create new student in table
module.exports = function(sequelize, DataTypes) {
    var Student = sequelize.define("Student", {
	id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
	},
	first_name: {
	    type: DataTypes.STRING,
	    allowNull: false,
	    validate: {
		len: [3]
	    }
	},
	last_name: {
	    type: DataTypes.STRING,
	    allowNull: false,
	    validate: {
		len: [2]
	    }
	},
	email:  {
	    type: DataTypes.STRING,
	    allowNull: false,
	    validate: {
		isEmail: true
	    }
	},
	password: {
	    type: DataTypes.STRING,
	    allowNull: false
	},
	university: {
	    type: DataTypes.STRING,
	    allowNull: false
	},

	university_switch: {
	    type: DataTypes.STRING,
	    allowNull: false
	},
	year: {
	    type: DataTypes.STRING,
	    allowNull: false 
	},
	major: {
	    type: DataTypes.STRING,
	    allowNull: false
	},
	professor: {
	    type: DataTypes.BOOLEAN,
	    defaultValue: false
	}
    },
				   // validates password
				   {
				       hooks: {
					   beforeCreate: function(user, options) {
					       user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
					   }
				       }
				   });
    Student.prototype.validPassword = function(password) {
	return bcrypt.compareSync(password, this.password);
    };     
    return Student;
};
