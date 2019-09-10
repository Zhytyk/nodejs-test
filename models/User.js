function User(name, surname) {
    this.name = name;
    this.surname = surname;
}

User.prototype.getFullName = function () {
    return this.name + ' ' + this.surname;
}

module.exports = User;