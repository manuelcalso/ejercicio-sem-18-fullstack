import mongoose from "mongoose";

const connectDB = async () => {
  try {
    //LOCAL localhoste:27017
    //PROD
    await mongoose.connect(
      "mongodb+srv://juancallerossol:noQjH02Bxu9elLuB@pizzeriadb.uqyyig4.mongodb.net/pizzeria-db",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log("base de datos conectada");
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

export default connectDB;
