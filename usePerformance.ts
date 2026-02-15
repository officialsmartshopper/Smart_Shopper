import { useEffect } from 'react';

// 監控頁面效能
export function usePerformance(componentName: string) {
  useEffect(() => {
    // 檢查瀏覽器是否支援 Performance API
    if (typeof window === 'undefined' || !window.performance) {
      return;
    }

    const startTime = performance.now();

    return () => {
      const endTime = performance.now();
      const renderTime = endTime - startTime;

      // 只在開發環境記錄
      if (process.env.NODE_ENV === 'development') {
        console.log(`[Performance] ${componentName} rendered in ${renderTime.toFixed(2)}ms`);
      }

      // 如果渲染時間超過 100ms，發出警告
      if (renderTime > 100) {
        console.warn(`[Performance Warning] ${componentName} took ${renderTime.toFixed(2)}ms to render`);
      }
    };
  }, [componentName]);
}

// 監控 Web Vitals（核心網頁指標）
export function useWebVitals() {
  useEffect(() => {
    // 動態載入 web-vitals 套件
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      // Cumulative Layout Shift（累積版面配置位移）
      getCLS(console.log);
      
      // First Input Delay（首次輸入延遲）
      getFID(console.log);
      
      // First Contentful Paint（首次內容繪製）
      getFCP(console.log);
      
      // Largest Contentful Paint（最大內容繪製）
      getLCP(console.log);
      
      // Time to First Byte（首位元組時間）
      getTTFB(console.log);
    });
  }, []);
}
