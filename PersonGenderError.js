class PersonGenderError extends Error {
    constructor(message) {
        super(message);
        this.name = "PersonGenderError";
    }
}

module.exports = PersonGenderError;