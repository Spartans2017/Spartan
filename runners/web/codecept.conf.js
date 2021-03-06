exports.config = {
    tests: './tests/web/*welcomeBonus_test.js',
    timeout: 30000,
    output: './output',
    helpers: {
        WebDriverIO: {
            url: 'http://localhost',
            restart: true,
            browser: 'chrome',
            windowSize: 'maximize',
            waitForTimeout: 30000,
            coloredLogs: true
        },
        MyHelper: {
            require: './helpers/custom_methods/custom_helper.js'
        }
    },
    include: {
        I: './helpers/steps_file.js',
        personalDetailsPage: './helpers/web/pages/PersonalDetails.js',
        homePage: './helpers/web/pages/Home.js',
        registrationPage: './helpers/web/pages/Registration.js',
        termsConditionsPage: './helpers/web/pages/TermsConditions.js',
        LoginFormFragment: './helpers/web/fragments/LoginForm.js',
        promoPopupFragment: './helpers/web/fragments/promoPopup.js'
    },
    bootstrap: false,
    mocha: {
        reporterOptions: {
            reportDir: './output',
            enableCharts: true,
            reportTitle: 'Spartan Reporter'
        }
    },
    name: 'Spartan'
};