module.exports = function(config) {
    config.set({

        frameworks: ["jasmine", "karma-typescript"],

        files: [
            { pattern: "src/**/*.ts" }
        ],

        preprocessors: {
            "**/*.ts": ["karma-typescript"]
        },

        reporters: ["dots", "karma-typescript"],

        browsers: ["ChromeHeadless"],

        singleRun: true,
        karmaTypescriptConfig: {
            include: [
                "./node_modules/brolog/**/*"
                ]
        },
        logLevel: config.LOG_DEBUG
    });
};
