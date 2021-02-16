const config = {
    env: process.env.NODE_ENV || 'development',
    port: process.env.PORT || 3000,
    jwtSecret: process.env.JWT_SECRET || "toor0209",
    mongoUri:'mongodb+srv://admin:toor0209@cluster0.puehc.mongodb.net/user?retryWrites=true&w=majority'
  }
  
  export default config