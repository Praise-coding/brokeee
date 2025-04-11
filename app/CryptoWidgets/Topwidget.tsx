"use client";

import React, { useEffect, useRef } from 'react';

// Define the type for the TradingView widget configuration
interface TradingViewWidgetConfig {
  symbols: { proName: string; title: string }[];
  showSymbolLogo: boolean;
  isTransparent: boolean;
  displayMode: string;
  colorTheme: string;
  locale: string;
}

const TradingViewWidget: React.FC = () => {
  const widgetContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const widgetContainerReff = widgetContainerRef.current
    // Only run if the widgetContainerRef is available
    if (widgetContainerReff && !widgetContainerReff.querySelector('script')) {
      const script = document.createElement('script');
      script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js';
      script.async = true;

      // Define the TradingView widget configuration
      const config: TradingViewWidgetConfig = {
        symbols: [
          { proName: 'FOREXCOM:SPXUSD', title: 'S&P 500 Index' },
          { proName: 'FOREXCOM:NSXUSD', title: 'US 100 Cash CFD' },
          { proName: 'FX_IDC:EURUSD', title: 'EUR to USD' },
          { proName: 'BITSTAMP:BTCUSD', title: 'Bitcoin' },
          { proName: 'BITSTAMP:ETHUSD', title: 'Ethereum' }
        ],
        showSymbolLogo: true,
        isTransparent: false,
        displayMode: 'adaptive',
        colorTheme: 'dark',
        locale: 'en'
      };

      script.innerHTML = JSON.stringify(config);

      widgetContainerReff.appendChild(script);
    }

    // Cleanup function to remove the script when the component unmounts
    return () => {
      if (widgetContainerReff) {
        const scripts = widgetContainerReff.querySelectorAll('script');
        scripts.forEach(script => script.remove());
      }
    };
  }, []);

  return (
    <div className='bg-[black] relative z-[500]'>
      <div className="tradingview-widget-container">
        <div className="tradingview-widget-container__widget" ref={widgetContainerRef}></div>
        <div className="tradingview-widget-copyright">
          <a href="https://www.tradingview.com/" rel="noopener noreferrer" target="_blank">
            {/* Optional: Add text or content here */}
          </a>
        </div>
      </div>
    </div>
  );
};

export default TradingViewWidget;
