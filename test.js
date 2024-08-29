const {getConnection} = require('./database')

async function getBrands(){
    try{
        const conn = getConnection()
        const brands = await conn`
        select
        name_brand
        from public.brand
        `
        return brands
    }catch(err){
        console.log(err)
    }
}

getBrands().then((value)=>{
    console.log(value)
})