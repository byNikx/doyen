function EnumKeys(enumObject): any[] {
    const keys = Object.keys(enumObject);
    // if (keys.length) {
    //     return keys;
    // }
    console.log(keys);
    return keys.filter(k => !isNaN(enumObject[k as any]));
}
function EnumValues(enumObject): any[] {
    const values = Object.values(enumObject);
    // if (values.length) {
    //     return values;
    // }
    return Object.keys(enumObject)
        .filter(k => isNaN(enumObject[k as any]));
}

export {
    EnumKeys,
    EnumValues
};
