
interface HTMLElement {
    hasClass(c: string): boolean;
}

HTMLElement.prototype['hasClass'] = function (c) {
    return this.className.split(' ').indexOf(c) > -1;
};

function enumKeys(enumObject): any[] {
    const keys = Object.keys(enumObject);
    // if (keys.length) {
    //     return keys;
    // }
    console.log(keys);
    return keys.filter(k => !isNaN(enumObject[k as any]));
}
function enumValues(enumObject): any[] {
    const values = Object.values(enumObject);
    // if (values.length) {
    //     return values;
    // }
    return Object.keys(enumObject)
        .filter(k => isNaN(enumObject[k as any]));
}

function addClass(element: any, className: string): void {
    element.classList.add(className);
}

function removeClass(element: any, className: string): void {
    element.classList.remove(className);
}

export {
    addClass,
    removeClass
};
