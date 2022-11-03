/* eslint no-undef: */
function showNotification(message)
{
    $.toast({
        heading: 'Heads up!',
        text: message,
        position: 'top-right',
        loaderBg: '#3b98b5',
        icon: 'info',
        hideAfter: 3000,
        stack: 1
    });
}

function initTradingViewChart() {
    new TradingView.MediumWidget(
    {
    "symbols": [
        [
            "ETH",
            "BINANCE:ETHUSDT|12M"
        ]
    ],
    "chartOnly": false,
    "width": "100%",
    "height": "100%",
    "locale": "vi_VN",
    "colorTheme": "light",
    "autosize": true,
    "showVolume": false,
    "hideDateRanges": false,
    "scalePosition": "right",
    "scaleMode": "Normal",
    "fontFamily": "-apple-system, BlinkMacSystemFont, Trebuchet MS, Roboto, Ubuntu, sans-serif",
    "fontSize": "10",
    "noTimeScale": false,
    "valuesTracking": "1",
    "chartType": "line",
    "container_id": "tradingview_3c2dc"
    }
  );
}