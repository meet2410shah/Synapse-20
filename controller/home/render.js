module.exports = (req, res) => {
  res.set("Cache-Control", "no-cache, no-store, must-revalidate");
  res.render(`index`);
};
