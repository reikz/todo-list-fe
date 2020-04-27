/**
 * Creates a unique number using the current timestamp and the Math function
 * @returns {number}
 */
export function createUniqueIdentifier(): number { return (Math.random() + 1) * +new Date(); }
