"use client"
import React, { useEffect, useRef } from 'react';

// Define a type for the TradingView widget configuration
interface TradingViewWidgetConfig {
  width: string;
  height: string;
  symbolsGroups: {
    name: string;
    originalName: string;
    symbols: {
      name: string;
      displayName: string;
    }[];
  }[];
  showSymbolLogo: boolean;
  isTransparent: boolean;
  colorTheme: string;
  locale: string;
  backgroundColor: string;
}

const TradingViewWidget: React.FC = () => {
  const widgetContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (widgetContainerRef.current && !widgetContainerRef.current.querySelector('script')) {
      const script = document.createElement('script');
      script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-market-quotes.js';
      script.async = true;

      // Define the TradingView widget configuration
      const config: TradingViewWidgetConfig = {
        width: '100%',
        height: '100%',
        symbolsGroups: [
          {
            name: 'Indices',
            originalName: 'Indices',
            symbols: [
              { name: 'FOREXCOM:SPXUSD', displayName: 'S&P 500 Index' },
              { name: 'FOREXCOM:NSXUSD', displayName: 'US 100 Cash CFD' },
              { name: 'FOREXCOM:DJI', displayName: 'Dow Jones Industrial Average Index' },
              { name: 'INDEX:NKY', displayName: 'Nikkei 225' },
              { name: 'INDEX:DEU40', displayName: 'DAX Index' },
              { name: 'FOREXCOM:UKXGBP', displayName: 'FTSE 100 Index' }
            ]
          },
          {
            name: 'Futures',
            originalName: 'Futures',
            symbols: [
              { name: 'CME_MINI:ES1!', displayName: 'S&P 500' },
              { name: 'CME:6E1!', displayName: 'Euro' },
              { name: 'COMEX:GC1!', displayName: 'Gold' },
              { name: 'NYMEX:CL1!', displayName: 'WTI Crude Oil' },
              { name: 'NYMEX:NG1!', displayName: 'Gas' },
              { name: 'CBOT:ZC1!', displayName: 'Corn' }
            ]
          },
          {
            name: 'Bonds',
            originalName: 'Bonds',
            symbols: [
              { name: 'CBOT:ZB1!', displayName: 'T-Bond' },
              { name: 'CBOT:UB1!', displayName: 'Ultra T-Bond' },
              { name: 'EUREX:FGBL1!', displayName: 'Euro Bund' },
              { name: 'EUREX:FBTP1!', displayName: 'Euro BTP' },
              { name: 'EUREX:FGBM1!', displayName: 'Euro BOBL' }
            ]
          },
          {
            name: 'Forex',
            originalName: 'Forex',
            symbols: [
              { name: 'FX:EURUSD', displayName: 'EUR to USD' },
              { name: 'FX:GBPUSD', displayName: 'GBP to USD' },
              { name: 'FX:USDJPY', displayName: 'USD to JPY' },
              { name: 'FX:USDCHF', displayName: 'USD to CHF' },
              { name: 'FX:AUDUSD', displayName: 'AUD to USD' },
              { name: 'FX:USDCAD', displayName: 'USD to CAD' }
            ]
          }
        ],
        showSymbolLogo: true,
        isTransparent: false,
        colorTheme: 'dark',
        locale: 'en',
        backgroundColor: 'dark'
      };

      // Add the configuration to the script
      script.innerHTML = JSON.stringify(config);

      // Append the script to the container
      if (widgetContainerRef.current) {
        widgetContainerRef.current.appendChild(script);
      }
    }

    // Cleanup function to remove the script when the component unmounts
    return () => {
      if (widgetContainerRef.current) {
        const scripts = widgetContainerRef.current.querySelectorAll('script');
        scripts.forEach(script => script.remove());
      }
    };
  }, []);

  return (
    <div className='flex px-[24px] sm:px-[40px] justify-center'>

    <div className='w-full h-[400px] overflow-hidden mt-[20px] sm:h-[500px]  '>
    <div className="tradingview-widget-container" ref={widgetContainerRef}>
      <div className="tradingview-widget-container__widget"></div>
      <div className="tradingview-widget-copyright">
        {/* <a href="https://www.tradingview.com/" rel="noopener noreferrer" target="_blank">
          <span className="blue-text">Track all markets on TradingView</span>
        </a> */}
      </div>
    </div>

    </div>
    </div>
  );
};

export default TradingViewWidget;
