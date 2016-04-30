var generators = require("yeoman-generator");

module.exports = generators.Base.extend({
    
    constructor: function() {        
        generators.Base.apply(this, arguments);        
    },
    
    initializing: function() {
        this.appname = this.appname.replace(/\s+/g, "-");
        this.log("Scaffolding '" + this.appname + "'...");
    },
    
    prompting: function() {
        var done = this.async();
        this.prompt([{
            type: "input",
            name: "projectName",
            message: "Project Name",
            default: this.appname
        },{
            type: "input",
            name: "author",
            message: "Author",
            default: "",
            store: true
        }, {
            type: "confirm",
            name: "installNpm",
            message: "Automatically install npm packages",
            default: true
        }], function(answers) {
            
            this.appname = answers.projectName;
            this.author = answers.author;
            this.installNpm = answers.installNpm;  
            done();         
            
        });        
    },
    
    writing: {
        copy: function() {
                                
            this.log("Copying project files and templates...");
            
            this.fs.copy(
                this.templatePath("**/*"),
                this.destinationRoot()            
            );  
                        
            this.fs.copyTpl(
                this.templatePath("package.json"),
                this.destinationPath("package.json"),
                { 
                    appname: this.appname,
                    author: this.author                     
                }
            );
                          
        }     
    },
    install: function() {
        if(installNpm) this.npmInstall();
    },
    end: function() {
        
        var msg = "Scaffolding complete!";
        
        if(!this.installNpm) {
            msg + "  Run 'npm install' to install required dependencies.";
        }
        
        msg + "  Run 'npm start' to start development server and continuous build process.  Enjoy!";        
        
    }    
        
});

