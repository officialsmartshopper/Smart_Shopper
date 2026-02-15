import { useEffect } from 'react';

// 監控元件渲染效能
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

      // 使用 Vite 的 import.meta.env 替代 process.env
      if (import.meta.env.DEV) {
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
    // 動態載入 web-vitals 套件（v4 API）
    import('web-vitals').then((webVitals) => {
      // web-vitals v4 使用 onCLS, onINP 等命名
      if (webVitals.onCLS) {
        webVitals.onCLS(console.log);  // Cumulative Layout Shift
        webVitals.onINP(console.log);  // Interaction to Next Paint
        webVitals.onFCP(console.log);  // First Contentful Paint
        webVitals.onLCP(console.log);  // Largest Contentful Paint
        webVitals.onTTFB(console.log); // Time to First Byte
      }
    }).catch(() => {
      // 如果 web-vitals 載入失敗，靜默處理
      console.log('Web Vitals monitoring unavailable');
    });
  }, []);
}
