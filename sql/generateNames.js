const { faker } = require('@faker-js/faker');

module.exports = {
  generateName(req, ctx, ee, next) {
    ctx.vars['name'] = faker.person.fullName();
    return next();
  },
};
