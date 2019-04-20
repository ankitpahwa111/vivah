const Sequelize = require('sequelize');
// const db = new Sequelize(process.env.DATABASE_URL,{
//     dialect: 'postgres'
// })
let db;
if (process.env.DATABASE_URL) {
    db = new Sequelize(process.env.DATABASE_URL)
} else {
    db = new Sequelize({
        database: 'realworlddb',
        username: 'realworlduser',
        password: 'realworldpass',
        dialect: 'mysql'
    })
}
const couples = db.define('couples', {
    couplePhoto: {
        type: Sequelize.STRING,
        unique: true,
        validate: {
            isUrl: true
        }
    }
})
const males = db.define('males', {

    name: {
        type: Sequelize.STRING(50),
        allowNull: false

    },
    age: {
        type: Sequelize.INTEGER,


    },

    region: {
        type: Sequelize.STRING(50),
        allowNull: false

    },
    job: {
        type: Sequelize.STRING(100),
        allowNull: false

    },
    astro: {
        type: Sequelize.STRING(50),
        allowNull: true

    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            isEmail: true
        }
    },
    username: {
        type: Sequelize.STRING,
        primaryKey: true
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    }

})
const females = db.define('females', {

    name: {
        type: Sequelize.STRING(50),
        allowNull: false

    },
    age: {
        type: Sequelize.INTEGER,
        allowNull: false

    },

    region: {
        type: Sequelize.STRING(50),
        allowNull: false

    },
    job: {
        type: Sequelize.STRING(100),
        allowNull: false

    },
    astro: {
        type: Sequelize.STRING(50),
        allowNull: true

    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            isEmail: true
        }
    },
    username: {
        type: Sequelize.STRING,
        primaryKey: true
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    }

})
const religion = db.define('religion', {
    name: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false
    }
})
const photos = db.define('photos', {
    url: {
        type: Sequelize.STRING,
        validate: {
            isUrl: true
        },
        allowNull: false
    }
})
//seed religions
const seedReligions = async () =>{
    await religion.create({
        name : "Hindu"
    })
    await religion.create({
        name : "Muslim"
    })
    await religion.create({
        name : "Christian"
    })
    await religion.create({
        name : "Sikh"
    })
}
seedReligions();


couples.hasOne(males);
couples.hasOne(females);
males.hasMany(photos);
photos.belongsTo(males);
females.hasMany(photos);
photos.belongsTo(females);
religion.hasMany(males);
religion.hasMany(females);
males.belongsTo(religion);
females.belongsTo(religion);
males.belongsToMany(females, { through: 'favourites' });
females.belongsToMany(males, { through: 'favourites' });
//console.log(males.prototype.getFemales);
module.exports = {
    db,
    males, females, couples, religion, photos
}