// @ts-check

/**
 * turns shortName property of args into longName and deletes args.shortName
 * @param {any} args 
 * @param {string} shortName 
 * @param {string} longName 
 * 
 * @returns {boolean} if there was a change
 */
function alias(args, shortName, longName) {
    if (args[shortName] !== undefined) {
        args[longName] = args[shortName];
        delete args[shortName];

        return true
    }

    return false;
}

module.exports = alias;