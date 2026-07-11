---
title: "[INSTRUMENT] Futures Trade Recap - [DATE]"
date: 2000-01-01
draft: true
---

# How to Add Trading Charts to Your Trade Recaps

## Quick Guide

To add candlestick charts and trading graphics to your trade recap posts, you have a few options:

### Option 1: Page Bundle (Recommended)

Create a folder for each trade recap post and place images inside:

```
content/trading-recap/
├── nq-trade-nov-29-2025/
│   ├── index.md                    (your trade recap post)
│   ├── entry-setup-chart.png       (your chart images)
│   ├── confluence-chart.png
│   ├── trade-outcome-chart.png
│   └── complete-trade-overview.png
```

Then in your `index.md`, reference images like:
```markdown
{{< figure src="entry-setup-chart.png" alt="Chart description" caption="Chart caption" >}}
```

### Option 2: Assets Folder

Place charts in `assets/img/trading-charts/` and reference them:
```markdown
{{< figure src="img/trading-charts/entry-setup-chart.png" alt="Chart description" caption="Chart caption" >}}
```

### Option 3: Static Folder

Place charts in `static/img/trading-charts/` and reference them:
```markdown
{{< figure src="/img/trading-charts/entry-setup-chart.png" alt="Chart description" caption="Chart caption" >}}
```

## Chart Recommendations

### Suggested Charts to Include:

1. **Entry Setup Chart** - Shows the setup before entry
   - Support/resistance levels
   - Trend lines
   - Entry point marked
   - Key indicators visible (RSI, MACD, moving averages)

2. **Confluence Chart** - Shows multiple factors aligning
   - All confluence factors visible
   - Multiple timeframe analysis
   - Volume analysis

3. **Trade Outcome Chart** - Shows the complete trade
   - Entry point clearly marked
   - Stop loss level
   - Take profit level
   - Price movement path

4. **Complete Trade Overview** - Full chart with all annotations
   - All levels marked
   - Entry/exit points
   - Support/resistance zones
   - Trend lines
   - Notes and annotations

## Creating Charts

You can create charts from:
- **TradingView** - Take screenshots and annotate
- **NinjaTrader** - Export chart images
- **ThinkOrSwim** - Screenshot with annotations
- **Any trading platform** - Export/screenshot charts

### Tips:
- Use high resolution (at least 1920x1080)
- Add clear annotations and labels
- Mark entry/exit points clearly
- Show key levels and indicators
- Save as PNG format for best quality

## Image Naming Convention

Use descriptive names:
- `entry-setup-chart.png`
- `confluence-chart.png`
- `trade-outcome-chart.png`
- `complete-trade-overview.png`

Or include the date/instrument:
- `nq-entry-setup-nov-29.png`
- `nq-confluence-nov-29.png`

## Example Usage

```markdown
{{< figure 
    src="entry-setup-chart.png" 
    alt="NQ Futures Entry Setup showing support at 19,200" 
    caption="4H chart showing the entry setup with bullish divergence and support bounce" 
>}}
```

The `figure` shortcode automatically:
- Optimizes images for web
- Creates responsive images
- Adds zoom functionality
- Displays captions nicely

