// used to encrypt password in database
var bcrypt = require("bcryptjs");

// create new professor in table
module.exports = function(sequelize, DataTypes) {
    var Prof = sequelize.define("Prof", {
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
	tenure: {
	    type: DataTypes.BOOLEAN,
	    allowNull: false
	},
	field: {
	    type: DataTypes.STRING,
	    allowNull: false
	}
    }, {      
	classMethods: {
            associate: function(model) {
		Student.hasOne(model.Form, {
		    onDelete: "cascade"
		});
            }
	}, 
	// validates password
	instanceMethods: {
	    validPassword: function(password) {
		return bcrypt.compareSync(password, this.password);
	    }
	},
	// encrypts password before it is saved to db
	hooks: {
	    beforeCreate: function(user, options, cb) {
		user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
		cb(null, options);
	    }
	}
    });			     
    return Student;
};
