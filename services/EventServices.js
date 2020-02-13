import axios from "axios";
import aws from "aws-sdk";
import config from "../config.json";

const reviewClient = axios.create({
  baseURL: "/api",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization:
      "Bearer htQ8amSVXNdGeoDj8RIle3LPvDsPpC7a61-2bXEnOyB79wzSpXMV0Jom15IWBiXAN4SqjHUWClJNe6s5aHzsbFj_ZagxQPlKAjGsOofmYfHoxvqXX_IX6sq0DgYpXnYx"
  }
});

export default {
  getReviews() {
    return reviewClient.get("/carley-martin-overland-park-10/reviews");

    console.log(err);
  },
  async getImages() {
    try {
      aws.config.setPromisesDependency();
      aws.config.update({
        accessKeyId: config.AWS_Access_Key_ID,
        secretAccessKey: config.AWS_Secret_Access_Key,
        region: "us-west-2"
      });
      const s3 = new aws.S3();
      const response = await s3
        .listObjectsV2({
          Bucket: config.Bucket
        })
        .promise((err, data) => {
          console.log("hanging under the promise");
          if (data) {
            console.log("images retrieved");
            next();
          }
          if (err) {
            console.log("hanging under the if err");
            console.log(err);
            next(err);
          }
        })
        .catch(err => {
          console.log("hanging under the catch");
          console.log(err);
        });

      return response;
    } catch (err) {
      console.log(err);
    }
  }
};
