export default function (eleventyConfig) {
  eleventyConfig.setInputDirectory("src")
  eleventyConfig.setOutputDirectory("dist")
  eleventyConfig.addPassthroughCopy("src/images")
  eleventyConfig.addPassthroughCopy("src/css")

  eleventyConfig.addFilter("dateRefactor", (date) => {
    if (date === null || date === undefined) {
      return "No recent data"
    }

    return new Date(date).toLocaleDateString("en-US", {
      month: "long",
      year: "numeric",
    })
  })

  eleventyConfig.addFilter("valueRefactor", (value) => {
    if (value === null || value === undefined) {
      return "N/A"
    }

    return Number(value).toFixed(1)
  })

  eleventyConfig.addFilter("statusChecker", (value) => {
    if (value === null || value === undefined) return "empty"
    if (value < 20) return "low"
    if (value < 40) return "medium"
    if (value < 80) return "high"
    return "dangerous"
  })
}

export const config = {
  markdownTemplateEngine: "njk",
  htmlTemplateEngine: "njk",
}
