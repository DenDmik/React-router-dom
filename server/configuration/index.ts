export default ()=>({
    port1:process.env.PORT1,
    type:'postgres',
    host:process.env.DATABASE_HOST,
    port:process.env.DATABASE_PORT,
    database:process.env.DATABASE_NAME,
    username:process.env.DATABASE_USERNAME,
    password:process.env.DATABASE_PASSWORD,
    autoLoadEntities:true,
     synchronize:process.env.DATABASE_SYNCHRONIZE,
})