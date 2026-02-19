type FetchJsonOptions = {
  timeoutMs?: number;
};

export async function fetchJsonOrThrow(
  url: string,
  opts: FetchJsonOptions = {},
) {
  const { timeoutMs = 12000 } = opts;

  // AbortController works in Expo fetch
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), timeoutMs);

  try {
    const res = await fetch(url, { signal: controller.signal });

    // rate limit
    if (res.status === 429) {
      const err: any = new Error("Rate limit reached. Please wait 60s.");
      err.status = 429;
      throw err;
    }

    // non-2xx
    if (!res.ok) {
      const err: any = new Error(`Upstream API error (${res.status})`);
      err.status = 502;
      throw err;
    }

    // content-type check (best effort; some APIs omit it occasionally)
    const contentType = res.headers.get("content-type") || "";
    if (contentType && !contentType.includes("application/json")) {
      const err: any = new Error("Upstream API returned non-JSON response.");
      err.status = 502;
      throw err;
    }

    return await res.json();
  } catch (e: any) {
    // Abort error
    if (e?.name === "AbortError") {
      const err: any = new Error("Request timed out. Try again.");
      err.status = 408;
      throw err;
    }
    throw e;
  } finally {
    clearTimeout(timeout);
  }
}
