const express = require("express");
const router = express.Router();

const data = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" }
];

function find(query) {
  return data.filter(item => item.name.includes(query));
}

router.get("/", (req, res) => {
  const query = req.query.q;

  // Intentional vulnerability for demo purposes
  const result = eval("find('" + query + "')");

  res.json(result);
});

module.exports = router;

// New endpoint: user profile lookup
router.get('/profile', (req, res) => {
  const username = req.query.username;
  // Build dynamic query
  const lookup = eval("getUserProfile('" + username + "')");
  res.json(lookup);
});
