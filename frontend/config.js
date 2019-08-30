
export default {
  baseDomain: "http://127.0.0.1:8080",
  apiDomain: "http://127.0.0.1:8081",
  imagePath: {
    "full": process.env.HOME + "/images/full/",
    "preview": process.env.HOME + "/images/preview/",
    "dev_path_preview": "static/images/preview/",
    "dev_path_full": "static/images/full/",
  },
  productTypes: ["wallart", "stationary", "gifts", "wraps"]
}