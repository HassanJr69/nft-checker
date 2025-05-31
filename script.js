async function checkNFTs() {
  const address = document.getElementById('wallet').value;
  const results = document.getElementById('results');
  results.innerHTML = "Checking...";

  const const url = `https://replit.com/@0xMarshall/tokentrace-backend/nfts/${address}`;`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.ownedNfts && data.ownedNfts.length > 0) {
      results.innerHTML = `<h3>Found ${data.ownedNfts.length} NFT(s):</h3><ul>`;
      data.ownedNfts.forEach(nft => {
        results.innerHTML += `<li>${nft.contract.address} — Token ID: ${nft.id.tokenId}</li>`;
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
