const fetch = require('node-fetch');
async function test() {
  const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=AIzaSyA4IPz3NfIYXucmWZNjao235sdC0ianYKg`;
  try {
    const res = await globalThis.fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ contents: [{ parts: [{ text: "what is vigilance?" }] }] })
    });
    console.log("STATUS:", res.status);
    console.log("BODY:", await res.text());
  } catch (err) {
    console.log("ERR:", err);
  }
}
test();
