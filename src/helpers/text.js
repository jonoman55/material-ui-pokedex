// Material-ui offers the capitalize function in it's @material-ui/core library
// Capitalizes first letter
export const capitalize = (str) => {
    if (typeof str === 'string') {
        return str.replace(/^\w/, c => c.toUpperCase());
    } else {
        return '';
    }
};

// Capitalizes hyphenated pokemon names
export function formatGen(str) {
    return capitalize(str.split('-')[0]);
};

// Removes any gen entries that equate to NaN
export function sanitizeGenNum(x) {
    if (isNaN(x)) {
        return 0;
    }
    return x;
};

// TODO: need to figure out how to remove soft hyphens .replace(/\&shy;/g, '')
// Remove \r \n \f from string (some spaces may appear due to soft hyphen)
export function formatDesc(desc) {
    if (desc !== undefined) {
        desc = desc.replace(/[\r\n\f]/g, ' ');
        desc = desc.replace(/\u00AD/g, '');
        return desc;
    }
    return desc;
};

// Check if the string is in English
export function isEnglish(str) {
    return (/^[a-z0-9]*$/i.test(str));
};

// Not used currently but it splits the pokemon's name containing hyphens
export function formatName(str) {
    if (str.includes('-')) {
        return str.split('-')[0]; // return first name from array
    }
    return str;
};

// Appends necessary 0's to the pokemon's id for the img url
export function formatId(id) {
    let result = id.toString();
    if (result.length === 1) {
        result = `00${id}`;
    } else if (result.length === 2) {
        result = `0${id}`;
    }
    return result;
};

// Capitalizes first letter
export const toFirstCharUppercase = name => {
    return name.charAt(0).toUpperCase() + name.slice(1)
};

// Appends necessary 0's to the pokemon's id for the img url
export const padId = (id) => ('00' + (id)).slice(-3);