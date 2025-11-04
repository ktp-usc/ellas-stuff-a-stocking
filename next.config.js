module.exports = {
  output: "export",
  images: { unoptimized: true },
  basePath: process.env.NODE_ENV === "production" ? "/ellas-stuff-a-stocking" : "",
  assetPrefix: process.env.NODE_ENV === "production" ? "/ellas-stuff-a-stocking/" : ""
}