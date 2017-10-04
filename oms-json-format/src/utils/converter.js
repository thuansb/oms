
/**
 * convert input data -> output data
 * @param {*} inputJson 
 */
const formatTheInput = (inputJson) => {
    // flatten the object
    const flatten = [];
    Object.keys(inputJson).forEach(key => {
        inputJson[key].forEach(item => {
            flatten.push(item);
        })
    });

    return findChildren(null, flatten);
}

/**
 * Recursive function to find children, return array of children
 * @param {number} id 
 * @param {array} inputs 
 */
const findChildren = (id, inputs) => {
    const result = [];
    inputs.forEach(item => {
        if (item.parent_id === id) {
            item.children = findChildren(item.id, inputs);
            result.push(item);
        }
    });
    return result;
}

export default formatTheInput;