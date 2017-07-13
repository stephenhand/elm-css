module.exports = function(config) {
    config.set({
        preprocessors: {
            "./src/**/*.elm": ['elm'],
            "./tests/**/*.elm": ['elm']
        },
        frameworks: ["elm-test"],
        files: ["./src/**/*.elm", "./tests/**/*.elm"],
        client : {
            "elm-test":{
                suites:[
                    {
                        module:"Arithmetic",
                        tests:["Arithmetic.all"]
                    },
                    {
                        module:"Colors",
                        tests:["Colors.hexTests"]
                    },
                    {
                        module:"Compile",
                        tests:["Compile.colorWarnings","Compile.unstyledDiv","Compile.dreamwriter","Compile.compileTest"]
                    },
                    {
                        module:"Properties",
                        tests:["Properties.all"]
                    },
                    {
                        module:"Selectors",
                        tests:["Selectors.nonElements","Selectors.elements"]
                    },
                    {
                        module:"Tests",
                        tests:["Tests.unstyledDiv","Tests.divWidthHeight","Tests.simpleEach","Tests.leftRightTopBottom","Tests.atRule"
                            ,"Tests.nestedAtRule","Tests.bug140","Tests.bug99","Tests.borders","Tests.multiDescendent","Tests.universal","Tests.multiSelector"
                            ,"Tests.keyValue","Tests.underlineOnHoverStyle","Tests.underlineOnHoverManual","Tests.greenOnHoverStyle","Tests.transformsStyle"
                            ,"Tests.fonts","Tests.weightWarning","Tests.hexWarning","Tests.pseudoElements","Tests.pseudoClasses"
                            ,"Tests.backgrounds","Tests.bug280"]
                    }
                ],
                logLevel: config.LOG_INFO,
                "test-source-directories" : [
                    "./tests"
                ]
            }
        },
        reporters: ['mocha'],
        browsers: [
            "Chrome",
//            "Edge",
            "PhantomJS"],
        autoWatch:true,
        singleRun:false
    });
};