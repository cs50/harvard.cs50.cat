define(function(require, exports, module) {

    // APIs consumed
    main.consumes = ["layout", "Plugin", "ui"];

    // APIs provided
    main.provides = ["harvard.cs50.cat"];

    // Plugin
    return main;

    /**
     * Implements plugin.
     */
    function main(options, imports, register) {

        // Instantiate plugin
        const plugin = new imports.Plugin("CS50", main.consumes);

        // Button for menu
        let button = null;

        // When plugin is loaded
        plugin.on("load", () => {

            // Create button
            button = new imports.ui.button({
                "skin": "c9-menu-btn",
                "visible": true
            });

            // Load CSS for button
            button.setAttribute("class", "cs50-cat");
            imports.ui.insertCss(require("text!./style.css"), options.staticPrefix, plugin);

            // Insert button into menu
            imports.ui.insertByIndex(imports.layout.findParent({
                name: "preferences"
            }), button, 1000, plugin);
        });

        // When plugin is unloaded
        plugin.on("unload", () => {
            button = null;
        });

        // Register plugin
        register(null, {
            "harvard.cs50.cat": plugin
        });
    }
});
