var packages = require('../package.json');

class Info {
   static getInfo() {
        return { "name": packages.name, "version": packages.version };
    }

    static getName(){
        return packages.name.toString();
    }

    static getVersion(){
        return packages.version.toString();
    }

    static getExpressVersion(){
        return packages.dependencies.express.toString().replace("^", "");
    }

    static getJadeVersion(){
        return packages.dependencies.jade.toString().replace("^", "");
    }

    static getDependencies(){
        return packages.dependencies;
    }

    static getAuthor(){
        return packages.author;
    }
}

module.exports = Info