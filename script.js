async function checkNFTs() {
  const address = document.getElementById('wallet').value;
  const results = document.getElementById('results');
  results.innerHTML = "Checking...";

  const url = `https://eth-mainnet.g.alchemy.com/v2/ioNYec_ljc_aDZeoJnd4X/getNFTs/?owner=${address}`;

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
