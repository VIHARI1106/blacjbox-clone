const axios = require('axios');

const BASE_URL = 'http://localhost:3000/blackbox';

const endpoints = ['data', 'fizzbuzz', 'zap', 'alpha', 'glitch'];
const inputs = [
  { data: 'hello' },
  { data: '15' },
  { data: '12345' },
  { data: 'A man, a plan, a canal: Panama!' },
  { data: 'zapZAPzap' }
];

async function testEndpoints() {
  for (const endpoint of endpoints) {
    for (const input of inputs) {
      try {
        const res = await axios.post(`${BASE_URL}/${endpoint}`, input);
        console.log(`✅ POST /${endpoint}`, input);
        console.log('Response:', res.data);
      } catch (err) {
        console.error(`❌ POST /${endpoint} failed:`, err.response?.data || err.message);
      }
    }
  }

  try {
    const res = await axios.get(`${BASE_URL}/time`);
    console.log(`🕒 GET /time`);
    console.log('Response:', res.data);
  } catch (err) {
    console.error(`❌ GET /time failed:`, err.response?.data || err.message);
  }
}

testEndpoints();
