function extractRegion(locale) {
  return locale.split(".")[0].split("_")[1];
}

console.log(extractRegion("en_US.UTF-8"));
