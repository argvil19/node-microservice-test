const faker = require('faker')

export default () => {
    const data = []

    for (let i = 0 ; i < 100 ; i++) {
        data.push({
            name: faker.name.findName(),
            email: faker.internet.email(),
            city: faker.address.city()
        })
    }

    return data
}
