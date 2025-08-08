const visualResults = [
  "🌫 Slightly toxic... just like your ex.",
  "💨 Pure air! But your screen smells weird now.",
  "😵‍💫 Warning: too much hot air detected.",
  "🎉 Congratulations! You broke the air.",
  "👃 We smell lies. Try again.",
  "🚫 Invalid breath. Use lungs next time."
];

const audioResults = [
  "Welcome to Microsoft Excel.",
  "Error 404: Brain not found.",
  "Initializing potato detection system.",
  "Bluetooth toaster connected successfully.",
  "Warning: Unicorns approaching.",
  "Scanning... You are 99% banana."
];

document.getElementById("analyzeBtn").addEventListener("click", () => {
  const visual = visualResults[Math.floor(Math.random() * visualResults.length)];
  const audio = audioResults[Math.floor(Math.random() * audioResults.length)];

  document.getElementById("result").textContent = visual;

  const utter = new SpeechSynthesisUtterance(audio);
  utter.pitch = 1.5;
  utter.rate = 1;
  utter.voice = speechSynthesis.getVoices().find(v => v.lang.includes("en")) || null;
  speechSynthesis.speak(utter);
});