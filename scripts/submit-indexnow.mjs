/**
 * IndexNow URL Submission Script
 * Submits all main site URLs to IndexNow endpoints (api.indexnow.org, bing.com)
 */

const HOST = "grassreferralcode.com";
const KEY = "4c2b9f8e1d5a73604e8b2a19f3d65e71";
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;

const URL_LIST = [
  `https://${HOST}/`,
  `https://${HOST}/grass-vs-honeygain`,
  `https://${HOST}/how-to-install-grass`,
  `https://${HOST}/grass-airdrop-season-2`,
];

const ENDPOINTS = [
  "https://api.indexnow.org/indexnow",
  "https://www.bing.com/indexnow",
];

async function submitIndexNow() {
  console.log(`[IndexNow] Starting submission for host: ${HOST}`);
  console.log(`[IndexNow] Key location: ${KEY_LOCATION}`);
  console.log(`[IndexNow] URLs to submit (${URL_LIST.length}):`);
  URL_LIST.forEach((url) => console.log(`  - ${url}`));

  const payload = {
    host: HOST,
    key: KEY,
    keyLocation: KEY_LOCATION,
    urlList: URL_LIST,
  };

  let successCount = 0;

  for (const endpoint of ENDPOINTS) {
    try {
      console.log(`\n[IndexNow] Sending request to ${endpoint}...`);
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json; charset=utf-8",
        },
        body: JSON.stringify(payload),
      });

      if (response.ok || response.status === 202) {
        console.log(`[IndexNow] SUCCESS (${response.status}) from ${endpoint}`);
        successCount++;
      } else {
        const text = await response.text().catch(() => "");
        console.error(
          `[IndexNow] ERROR (${response.status}) from ${endpoint}: ${text}`
        );
      }
    } catch (err) {
      console.error(`[IndexNow] FAILED to reach ${endpoint}:`, err.message);
    }
  }

  if (successCount > 0) {
    console.log(
      `\n[IndexNow] Completed successfully! Submitted to ${successCount}/${ENDPOINTS.length} endpoints.`
    );
  } else {
    console.error(`\n[IndexNow] All endpoint submissions failed.`);
    process.exitCode = 1;
  }
}

submitIndexNow();
