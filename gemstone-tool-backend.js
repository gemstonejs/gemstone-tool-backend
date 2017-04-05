/*
**  GemstoneJS -- Gemstone JavaScript Technology Stack
**  Copyright (c) 2016-2017 Gemstone Project <http://gemstonejs.com>
**  Licensed under Apache License 2.0 <https://spdx.org/licenses/Apache-2.0>
*/

/*  external requirements  */
const chalk               = require("chalk")
const pkg                 = require("./package.json")

/*  export the Gemstone Tool plugin API  */
module.exports = function () {
    this.register({
        name: "backend-build",
        desc: "Build Gemstone Backend Application",
        opts: [
            {   name: "cwd", type: "string", def: ".",
                desc: "Change working directory to given path" },
            {   name: "debug", type: "boolean", def: false,
                desc: "Enable debugging mode" },
            {   name: "verbose", type: "boolean", def: false,
                desc: "Enable verbose output mode" },
            {   name: "watch", type: "boolean", def: false,
                desc: "Enable filesystem watching mode" },
            {   name: "beep", type: "boolean", def: false,
                desc: "Beep terminal after build" },
            {   name: "env", type: "string", def: "development",
                desc: "Build for target enviromment (\"production\" or \"development\")" },
            {   name: "tag", type: "string", def: "",
                desc: "Build for tagged enviromment (\"\")" }
        ],
        args: [
        ],
        func: async function (opts /*, ...args */) {
            /*  sanity check options  */
            if (!opts.env.match(/^(?:production|development)$/))
                throw new Error(`invalid environment "${opts.env}"`)

            /*  display header  */
            let header = `${chalk.bold("** Gemstone Backend Build Tool " + pkg.version)}\n` +
                "** Copyright (c) 2016-2017 Gemstone Project <http://gemstonejs.com>\n" +
                "** Licensed under Apache License 2.0 <https://spdx.org/licenses/Apache-2.0>\n" +
                "\n"
            process.stderr.write(header)

            /*  change working directory  */
            if (opts.cwd !== ".")
                process.chdir(opts.cwd)

            /*  FIXME  */

            return ""
        }
    })
}

