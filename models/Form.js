module.exports = function(sequelize, DataTypes) {
 var Form = sequelize.define("Form", {
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
	year: {
	    type: DataTypes.STRING,
	    allowNull: false 
	},
	field: {
	    type: DataTypes.STRING,
	    allowNull: false
	}
    }, {      
	classMethods: {
            associate: function(model) {
		Form.hasOne(model.Student, {
		});
            }
	}
    });			     
    return Form;
};
