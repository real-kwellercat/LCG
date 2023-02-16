module.exports = function (eleventyConfig) {
    return {
      dir: {
        input: "src",
        output: "public",
      },
    };

  // Folders to copy to output folder
  eleventyConfig.addPassthroughCopy("./src/css/");
  eleventyConfig.addWatchTarget("./src/css/");
};