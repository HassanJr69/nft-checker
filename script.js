async function checkNFTs() {
  const address = document.getElementById('wallet').value;
  const results = document.getElementById('results');
  results.innerHTML = "Checking...";

  const url = `https://replit.com/@0xMarshall/tokentrace-backend/nfts/${address}`; // Use your real backend URL

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.tokens && data.tokens.length > 0) {
      results.innerHTML = `<h3>Found ${data.tokens.length} NFT(s):</h3><ul>`;
      data.tokens.forEach(token => {
        results.innerHTML += `<li>Token ID: ${token.tokenId} — URI: ${token.tokenURI}</li>`;
      });
      results.innerHTML += `</ul>`;
    } else {
      results.innerHTML = "No NFTs found.";
    }
  } catch (err) {
    results.innerHTML = "Error fetching NFTs. Check console.";
    console.error(err);
  }
}
