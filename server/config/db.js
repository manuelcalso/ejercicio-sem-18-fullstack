import mongoose from "mongoose";

const connectDB = async () => {
  try {
    //LOCAL BASE_URL_DB_LOCAL
    //PROD BASE_URL_DB_PRODUCTION
    await mongoose.connect(process.env.BASE_URL_DB_LOCAL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("base de datos conectada");
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

export default connectDB;
