var packages = require('../package.json');
var packagesAngular = require('../../personal/package.json');

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
        return this.getDependencies().express.toString().replace("^", "");
    }

    static getJadeVersion(){
        return this.getDependencies().jade.toString().replace("^", "");
    }

    static getMariaDbVersion(){
        return this.getDependencies().mariadb.toString().replace("^", "");
    }

    static getDependencies(){
        var arr = [];
        arr.push(packages.dependencies);
        arr.push(packages.devDependencies);
        
        arr.push(packagesAngular.dependencies);
        arr.push(packagesAngular.devDependencies);
        return (arr);
    }

    static getAuthor(){
        return packages.author;
    }

}

module.exports = Info