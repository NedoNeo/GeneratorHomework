export class Team {
    constructor() {
    }

    add(charecter) {
        this[charecter.name] = charecter;
    }

    *[Symbol.iterator]() {
        for(let i =0; i < Object.keys(this).length; i++) {
            yield this[Object.keys(this)[i]];
        }
    }
}