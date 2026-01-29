// Simple fake domain search logic (GoDaddy-style demo)

function searchDomain() {
  const input = document.getElementById('domainInput').value.trim().toLowerCase();
  const resultBox = document.getElementById('searchResult');

  if (!input) {
    resultBox.innerHTML = '<p>Please enter a domain name.</p>';
    return;
  }

  // Fake unavailable domains
  const takenDomains = ['google.com', 'facebook.com', 'amazon.com'];

  if (takenDomains.includes(input)) {
    resultBox.innerHTML = `
      <div class="result unavailable">
        ❌ <strong>${input}</strong> is already taken
      </div>`;
  } else {
    resultBox.innerHTML = `
      <div class="result available">
        ✅ <strong>${input}</strong> is available!
        <a href="checkout.html" class="btn">Buy Now</a>
      </div>`;
  }
}
