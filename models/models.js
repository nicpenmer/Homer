//module.exports = function (sequelize, DataTypes) {
//    const cities = sequelize.define('cities', {
//        City: DataTypes.STRING,
//        AvRent:DataTypes.STRING,
//        PubCost:DataTypes.STRING,
//        AvSal:DataTypes.STRING,
//        Growth:DataTypes.STRING,
//        AvLunch:DataTypes.STRING,
//    });
//    return cities;
//};

module.exports= function(sequelize,DataTypes){
const users = sequelize.define('users', {
    first_name: DataTypes.STRING,        
    last_name: DataTypes.STRING,
    user_name:DataTypes.STRING,   
    password:DataTypes.STRING,       
});
return users
};

//const quiz = db.define("quizAnswers", {
//    Answer1: {
//        type: Sequelize.STRING
//    },
//    Answer2: {
//        type: Sequelize.STRING
//    },
//    Answer3: {
//        type: Sequelize.STRING
//    },
//    Answer4: {
//        type: Sequelize.STRING
//    },
//    Answer5: {
//        type: Sequelize.STRING
//    },
//    Answer6: {
//        type: Sequelize.STRING
//    },
//    Answer7: {
//        type: Sequelize.STRING
//    },
//    Answer8: {
//        type: Sequelize.STRING
//    },
//    Answer9: {
//        type: Sequelize.STRING
//    },
//    Answer10: {
//        type: Sequelize.STRING
//    },
//    user_name: {
//        type: Sequelize.STRING
//    }
//});
//
//
//
//
//