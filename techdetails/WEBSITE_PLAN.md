# Astronauts Team Website - Development Plan

## Design Direction

### Visual Identity
- **配色**: 銀色鼻錐 + 黑色箭身 (參考 IMG_2111.jpg)
- **風格**: 簡潔、科技感、太空主題
- **字體**: 大標題英文、說明文字中文
- **Icon**: 線條風格、無填色

### Key Data Points (from OpenRocket)
```
Apogee:          3,036 m
Max Velocity:    310 m/s (Mach 0.92)
Max Acceleration: 82.2 m/s² (8.4G)
Flight Time:     352 seconds
Length:          270 cm
Diameter:        15.4 cm
Dry Mass:        11,047 g
Wet Mass:        26,347 g
Stability:       1.73 cal
CG:              179 cm
CP:              206 cm
```

---

## Website Structure

### Section 1: HERO (首頁)
```
┌─────────────────────────────────────┐
│                                     │
│         [COUNTDOWN TIMER]           │
│     178d 22h 12m 42.156s            │
│                                     │
│         ASTRONAUTS                  │
│    Taiwan Cup Rocket Competition    │
│           3K Division               │
│                                     │
│         [Scroll Indicator]          │
└─────────────────────────────────────┘
```
- 毫秒級倒數計時器
- 目標日期: 2026/07/01 (決賽)
- 背景: 深色太空/火箭升空

### Section 2: MISSION (任務)
```
┌─────────────────────────────────────┐
│  TARGET: 3,000M                     │
│  ─────────────────────────────────  │
│                                     │
│  我們的目標是將火箭送上3公里高空     │
│                                     │
│  [3,036m]  [Mach 0.92]  [352s]     │
│   apogee    velocity    flight     │
│                                     │
└─────────────────────────────────────┘
```
- 三個關鍵數據卡片
- 簡短任務說明

### Section 3: ROCKET (火箭)
```
┌─────────────────────────────────────┐
│             R-1                     │
│  ─────────────────────────────────  │
│                                     │
│   [火箭側視圖 SVG/動畫]             │
│   鼻錐 → 航電艙 → 回收艙 → 引擎艙   │
│                                     │
│   270cm │ 15.4cm │ 26.3kg          │
│   length  diameter  mass           │
│                                     │
│   [View Details →]                  │
└─────────────────────────────────────┘
```
- 火箭結構展示
- 互動式參數顯示
- 點擊展開詳細規格

### Section 4: TEAM (團隊)
```
┌─────────────────────────────────────┐
│           TEAM                      │
│  ─────────────────────────────────  │
│                                     │
│   14 位來自各領域的專業人士          │
│                                     │
│   [Grid of names with roles]        │
│                                     │
└─────────────────────────────────────┘
```
- 14人團隊名單
- 可選擇顯示角色分工

### Section 5: TIMELINE (時程)
```
┌─────────────────────────────────────┐
│         TIMELINE                    │
│  ─────────────────────────────────  │
│                                     │
│  ● NOV 2025  報名完成               │
│  ● DEC 2025  繳費 & 培訓            │
│  ○ FEB 2026  第一次審查             │
│  ○ MAY 2026  第二次審查             │
│  ○ JUL 2026  LAUNCH                │
│                                     │
└─────────────────────────────────────┘
```
- 垂直時間軸
- 已完成項目打勾

### Section 6: SUPPORT (支持我們)
```
┌─────────────────────────────────────┐
│          SUPPORT                    │
│  ─────────────────────────────────  │
│                                     │
│   支持太空人隊完成火箭夢想           │
│                                     │
│   NT$ 250,000 / NT$ 450,000        │
│   [=========------] 44%            │
│                                     │
│   [Contact Us]                      │
│                                     │
└─────────────────────────────────────┘
```
- 募資進度條
- 聯絡按鈕

### Section 7: FOOTER
```
┌─────────────────────────────────────┐
│   [Thread] [IG] [YouTube]          │
│                                     │
│   frank@okase.com                   │
│                                     │
│   © 2024 Astronauts Team           │
└─────────────────────────────────────┘
```

---

## Technical Implementation

### Countdown Timer
```javascript
// 毫秒級倒數
const launchDate = new Date('2026-07-01T09:00:00+08:00');
setInterval(() => {
  const now = new Date();
  const diff = launchDate - now;
  // 計算 days, hours, minutes, seconds, milliseconds
}, 10); // 每 10ms 更新
```

### Required Assets
- [ ] 背景圖 (深色太空主題)
- [ ] 火箭 SVG (側視圖，標註各部位)
- [ ] Social icons (Thread, IG, YouTube)
- [ ] 進度條動畫

### Parallax Effects (保留原框架)
- Waypoints.js - 滾動觸發
- 視差滾動效果
- 漸入動畫

### Mobile Optimization
- 響應式設計
- 觸控友善
- 倒數計時器縮小版

---

## 工作清單

### Phase 1: 核心頁面 (今天)
- [x] 建立規劃文件
- [ ] 重寫 index.html 結構
- [ ] 製作倒數計時器 (毫秒級)
- [ ] 製作 social icons SVG
- [ ] 更新 CSS 樣式

### Phase 2: 內容填充
- [ ] 火箭參數區塊
- [ ] 團隊名單
- [ ] 時間軸
- [ ] 募資進度

### Phase 3: 優化
- [ ] 手機版測試
- [ ] 動畫效果微調
- [ ] 圖片優化

### 待你提供
- [ ] Thread/IG/YouTube 帳號連結
- [ ] 新的背景圖 (你說要去生成)
- [ ] 團隊成員角色分工 (可選)

---

## Notes

### 框架特點 (原網站)
1. **Waypoints.js** - 滾動到特定位置觸發動畫
2. **視差效果** - 不同層以不同速度移動
3. **CSS Transitions** - 平滑動畫
4. **Section-based** - 每個區塊獨立動畫

### 配色方案
```
Primary:    #000000 (黑)
Secondary:  #C0C0C0 (銀)
Accent:     #FF6600 (火焰橘)
Background: #0a0a0a (深黑)
Text:       #ffffff (白)
Muted:      #666666 (灰)
```

---

*Last Updated: 2024-12-26*
