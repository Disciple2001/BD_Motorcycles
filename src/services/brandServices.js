import sql from '../db.js'

export async function getBrands() {
    const brands = await sql`
    select
      name
    from brand
  `
    // users = Result [{ name: "Walter", age: 80 }, { name: 'Murray', age: 68 }, ...]
    return brands
}


export async function insertUser({ name, age }) {
    const users = await sql`
    insert into users
      (name, age)
    values
      (${ name }, ${ age })
    returning name, age
  `
    // users = Result [{ name: "Murray", age: 68 }]
    return users
}