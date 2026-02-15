// Amazon 聯盟配置
export const affiliateConfig = {
  // 美國 Amazon
  amazonUS: {
    trackingId: 'officialsmart-20',  // 替換成你的美國 Tracking ID
    baseUrl: 'https://www.amazon.com',
    countryCode: 'US',
  },
  // 英國 Amazon
  amazonUK: {
    trackingId: 'officialsmart-21',  // 替換成你的英國 Tracking ID
    baseUrl: 'https://www.amazon.co.uk',
    countryCode: 'UK',
  },
  // 其他聯盟計畫
  ebay: {
    campaignId: 'your-ebay-campaign-id',
    baseUrl: 'https://www.ebay.co.uk',
  },
  // 可以添加更多聯盟計畫
  currys: {
    affiliateId: 'your-currys-id',
    baseUrl: 'https://www.currys.co.uk',
  },
};

// 建立 Amazon 產品連結（使用 ASIN）
export function buildAmazonLink(asin: string, country: 'US' | 'UK' = 'UK'): string {
  const config = country === 'US' ? affiliateConfig.amazonUS : affiliateConfig.amazonUK;
  return `${config.baseUrl}/dp/${asin}?tag=${config.trackingId}`;
}

// 建立 Amazon 搜尋連結
export function buildAmazonSearchLink(keywords: string, country: 'US' | 'UK' = 'UK'): string {
  const config = country === 'US' ? affiliateConfig.amazonUS : affiliateConfig.amazonUK;
  const encodedKeywords = encodeURIComponent(keywords);
  return `${config.baseUrl}/s?k=${encodedKeywords}&tag=${config.trackingId}`;
}

// 將現有 URL 轉換為聯盟連結
export function addAffiliateTag(url: string, country: 'US' | 'UK' = 'UK'): string {
  try {
    const urlObj = new URL(url);
    const config = country === 'US' ? affiliateConfig.amazonUS : affiliateConfig.amazonUK;
    
    // 檢查是否為 Amazon 網址
    if (urlObj.hostname.includes('amazon')) {
      // 移除現有的 tag 參數（如果有）
      urlObj.searchParams.delete('tag');
      // 添加新的 tracking ID
      urlObj.searchParams.set('tag', config.trackingId);
      return urlObj.toString();
    }
    
    return url;
  } catch (error) {
    console.error('Invalid URL:', error);
    return url;
  }
}

// 追蹤點擊事件（可選）
export function trackAffiliateClick(
  merchantName: string, 
  productId: string, 
  productName: string
): void {
  // 發送到分析工具（Google Analytics、Mixpanel 等）
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'affiliate_click', {
      merchant: merchantName,
      product_id: productId,
      product_name: productName,
    });
  }
  
  // 記錄到控制台（開發用）
  console.log('Affiliate Click:', {
    merchant: merchantName,
    product: productName,
    timestamp: new Date().toISOString(),
  });
}
