import { ExternalLink } from 'lucide-react';
import { trackAffiliateClick } from '@/config/affiliates';

interface AffiliateLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  merchantName?: string;
  productId?: string;
  productName?: string;
  showIcon?: boolean;
  target?: string;
}

export function AffiliateLink({
  href,
  children,
  className = '',
  merchantName = 'Unknown',
  productId = '',
  productName = '',
  showIcon = false,
  target = '_blank',
}: AffiliateLinkProps) {
  
  const handleClick = () => {
    // 追蹤點擊
    if (productId && productName) {
      trackAffiliateClick(merchantName, productId, productName);
    }
  };

  return (
    <a
      href={href}
      target={target}
      rel="noopener noreferrer sponsored"
      className={className}
      onClick={handleClick}
    >
      {children}
      {showIcon && <ExternalLink className="w-3 h-3 ml-1 inline" />}
    </a>
  );
}

// 產品購買按鈕元件
interface BuyNowButtonProps {
  href: string;
  merchantName: string;
  productId: string;
  productName: string;
  price?: number;
  className?: string;
}

export function BuyNowButton({
  href,
  merchantName,
  productId,
  productName,
  price,
  className = '',
}: BuyNowButtonProps) {
  return (
    <AffiliateLink
      href={href}
      merchantName={merchantName}
      productId={productId}
      productName={productName}
      className={`inline-flex items-center justify-center px-4 py-2 bg-[#0066FF] text-white rounded-lg hover:bg-[#0052CC] transition-colors font-medium ${className}`}
    >
      Buy Now {price && `£${price}`}
    </AffiliateLink>
  );
}
