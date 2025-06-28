const express = require('express');
const router = express.Router();

router.post('/data', (req, res) => {
  const { data = '' } = req.body || {};
  res.json({ message: `✅ /data endpoint working`, received: data });
});

router.post('/fizzbuzz', (req, res) => {
  const { data = '' } = req.body || {};
  res.json({ message: `✅ /fizzbuzz endpoint working`, received: data });
});

router.post('/zap', (req, res) => {
  const { data = '' } = req.body || {};
  res.json({ message: `✅ /zap endpoint working`, received: data });
});

router.post('/alpha', (req, res) => {
  const { data = '' } = req.body || {};
  res.json({ message: `✅ /alpha endpoint working`, received: data });
});

router.post('/glitch', (req, res) => {
  const { data = '' } = req.body || {};
  res.json({ message: `✅ /glitch endpoint working`, received: data });
});

router.get('/time', (req, res) => {
  res.json({ time: new Date().toISOString() });
});

module.exports = router;
