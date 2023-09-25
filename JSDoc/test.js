/**
 * @fileoverview Just an example of a cool script
 * to demo the use of
 * {@link http://sourceforge.net/projects/jsdoc JSDoc}
 *
 * @author Stoyan Stefanov <a href="mailto:stoyan@phpied.com">stoyan@phpied.com</a>
 * @version 0.1 beta
 */


/**
 * Constructs a new Cool object.
 *
 * @class This is the coolest class ever.
 * @constructor
 */
function Cool(){}

/**
 * An example property of the Cool class
 * @private
 * @type int
 */
Cool.prototype.field1 = null;

/**
 * A second example property of the Cool class.
 * Note the var type of this property.
 * @type Cool
 */
Cool.prototype.field2 = null;

Cool.prototype.getSomething = SomeFinctionNameHere;
Cool.prototype.setSomething = SomeOtherFinction;

/**
 * Returns a value based on the parameter passed.
 * This is the place to get really verbose about the method. I can talk
 * About its history, how was it conceived, how did it grew up from
 * a tiny small little method to the mature and stable colossus it is today.
 * @param {string} getWhat Identifier (name) of thing to be returned
 * @return {mixed} The thing requested
 * @throws TheThingNotFound If the thing requested cannot be found
 */
function SomeFinctionNameHere(getWhat)
{
    // implement me, please!
    // ...
    // ...
    // ... and make sure there's XMLHTTPRequest here, will you?
}

/**
 * Set a value corresponding to the name passed
 * @param {string} name Name of the thing
 * @param {mixed} value The value of the thing
 * @private
 * @thows TheBabyWithTheDirtyWaterException
 * @see #getSomething
 */

function SomeOtherFinction(name, value)
{
    // implement me, please!
    // ... and ... you know, XMLHTTPRequest, OK?
}


/**
 * Constructs a new NotSoCool object.
 *
 * @class This is a not-so-cool a class.
 * @constructor
 * @extends Cool
 */
function NotSoCool(){}