module.exports = function(sequelize, DataTypes) {
 var Form = sequelize.define("Form", {
	id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
	},
	gpa: {
	    type: DataTypes.INTEGER,
	    allowNull: false,
	    validate: {
		len: [4]
	    }
	},
	research_interest: {
	    type: DataTypes.STRING,
	    allowNull: false,
	    validate: {
		len: [5]
	    }
	},
	live:  {
	    type: DataTypes.STRING,
	    allowNull: false,
	    validate: {
		len:[3]
	    }
	},
	move: {
	    type: DataTypes.STRING,
	    allowNull: false
	},
	achieve: {
	    type: DataTypes.STRING,
	    allowNull: false
	},
	stay_here: {
	    type: DataTypes.STRING,
	    allowNull: false 
	},
	career: {
	    type: DataTypes.STRING,
	    allowNull: false
	},
	time_week: {
	    type: DataTypes.INTEGER,
	    allowNull: false
	},
	resume: {
	    type: DataTypes.BLOB('long'),
	    allowNull: false
	},
	cover_letter: {
	    type: DataTypes.BLOB('long'),
	    allowNull: false
	}, 
	uuid: {
	    type: DataTypes.INTEGER
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
