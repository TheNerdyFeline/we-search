// used to encrypt password in database
var bcrypt = require("bcryptjs");

module.exports = function(sequelize, DataTypes) {
// create new professor in table
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
		duration: {
		    type: DataTypes.STRING,
		    allowNull: false
		},
		field: {
		    type: DataTypes.STRING,
		    allowNull: false   
		},
		professor: {
		    type: DataTypes.BOOLEAN,
		    defaultValue: true
	    }
	},
				    {
					hooks: {
					    beforeCreate: function(user, options) {
						user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
					    }
					}
				    });
    Prof.prototype.validPassword = function(password) {
	return bcrypt.compareSync(password, this.password);
    }
    return Prof;
};			     
