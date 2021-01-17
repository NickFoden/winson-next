module.exports = {
  webpack: (config, { isServer }) => {
    if (isServer) {
      require("./src/utils/generateSiteMap.js");
    }

    return config;
  },
};
