import postgres from 'postgres'

const sql = postgres('postgres://postgres:dario@localhost:5432/BD_rentalCar')

const brands = await sql`
    select
      name_brand
    from brand
  `

console.log(brands)
export default sql