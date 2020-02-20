import axios from "axios";
import aws from "aws-sdk";
import config from "../config.json";
import NProgress from "nprogress";
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
if (process.client) {
  reviewClient.interceptors.request.use(config => {
    NProgress.start();
    return config;
  });

  reviewClient.interceptors.response.use(response => {
    NProgress.done();
    return response;
  });
}

export default {
  getReviews() {
    return reviewClient.get("/carley-martin-overland-park-10/reviews");
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
        .promise();

      return response;
    } catch (err) {
      console.log(err);
    }
  }
};
