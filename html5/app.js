Ext.Loader.setConfig({
    disableCaching: false
});

Ext.application({
    name      : 'Music',
    appFolder : 'app',

    requires : [
        'Ext.MessageBox',
        'Ext.util.JSONP'
//        'Ext.device.Geolocation'
    ],

    controllers : [
        'Main',
        'Article'
//        'Favorites',
//        'Search',
//        'Stations'
    ],

    icon: {
        72: 'resources/images/icon-72.png',
        144: 'resources/images/icon-144.png'
    },

    tabletStartupScreen: 'resources/images/splash.jpg',
    launch: function() {
        // Destroy the #appLoadingIndicator element
        Ext.fly('appLoadingIndicator').destroy();
        // Initialize the main view
        window[this.getName()].app = this;
    },

    onUpdated: function() {
        Ext.Msg.confirm(
            "Application Update",
            "This application has just successfully been updated to the latest version. Reload now?",
            function() {
                window.location.reload();
            }
        );
    }
});

