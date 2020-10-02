const tailwindcss = require("tailwindcss");
const purgecss = require("@fullhuman/postcss-purgecss")({
  // Specify the paths to all of the template files in your project
  content: ["./src/**/*.html", "./src/*.jsx", "./src/**/*.jsx"],
  // Include any special characters you're using in this regular
  defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
});
module.exports = {
  style: {
    postcss: {
      mode: "extends" /* (default value) */ || "file",
      plugins: [
        tailwindcss("./tailwind.js"),
        ...(process.env.NODE_ENV === "production" ? [purgecss] : []),
      ],
    },
  },
};
