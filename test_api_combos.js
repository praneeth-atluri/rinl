const fetch = require('node-fetch'); // or global fetch
async function testKey(key) {
  const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${key}`;
  try {
    const res = await globalThis.fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ contents: [{ parts: [{ text: "hi" }] }] })
    });
    console.log(`Key ${key} -> Code: ${res.status}`);
  } catch (err) { }
}

async function run() {
  await testKey("AIzaSyA4IPz3NfIYXucmWZNjao235sdCOianYKg");
  await testKey("AIzaSyA4lPz3NfIYXucmWZNjao235sdCOianYKg"); 
  await testKey("AIzaSyA4IPz3NfIYXucmWZNjao235sdC0ianYKg");
  await testKey("AIzaSyA4lPz3NfIYXucmWZNjao235sdC0ianYKg");
}
run();
