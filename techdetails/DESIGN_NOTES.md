# Astronauts Website - Design Notes

## 設計理念

### 視覺風格
- 基於 Brandon Johnson Planetary Scientist 模板，保留 95% 原始結構與效果
- 配色：銀色鼻錐 + 黑色箭身（參考火箭實體照片 IMG_2111.jpg）
- 風格：簡潔、科技感、太空主題
- 字體：大標題用英文、說明文字用中文
- Icon：線條風格、無填色

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

## 網站結構

### Section 1: HERO (首頁)
- 毫秒級倒數計時器（每 10ms 更新）
- 目標日期: 2026/07/01 09:00 (台北時間)
- 格式: `187d : 15h : 42m : 31.456s`
- 標題: ASTRONAUTS

### Section 2: MISSION (任務)
- TARGET: 3,000 METERS
- 說明太空人隊是 14 人團隊，參加 TASA 主辦的 2026 台灣盃火箭競賽

### Section 3: ROCKET SPECS (火箭規格)
- 火箭名稱: R-1
- 引擎: Pioneer-10K 公版固態火箭引擎
- 材料: 碳纖維複合材料箭體，馮卡門曲線鼻錐
- 關鍵數據:
  - Apogee: 3,036 m
  - Velocity: 310 m/s (Mach 0.92)
  - Length: 270 cm
  - Total Impulse: 9,311.6 N·s

### Section 4: TEAM (團隊)
- 14 MEMBERS
- 顯示英文名字 + 職位
- 領導層: 力哥 (Advisor), Wayne (Leader), Justine (Vice Leader)
- C-Level: Frank (CTO), Enoch (CBO), Danny (CFO)
- 成員: Morrie, Keng, Jimmy, Ben, Leo, Peter, Jobs, David

### Section 5: TIMELINE (時程)
- 2025.11 - 報名完成 ✓
- 2025.12 - 繳交報名費 NT$200,000 ✓
- 2025.12.20 - 培訓課程
- 2026.02.06 - 第一次設計審查
- 2026.05.17 - 第二次設計審查
- 2026.07-08 - 決賽發射 · 屏東旭海

### Section 6: CONTACT (聯絡)
- 支持/贊助資訊
- Email: frank@okase.com

### Section 7: FOOTER
- 社群連結: Threads, Instagram, YouTube (線條風格 icon)
- ASTRONAUTS TEAM / 太空人隊
- 2026 Taiwan Cup Rocket Competition / 3K Social Division
- Organized by TASA & Pingtung County

---

## 技術細節

### 框架特點 (保留原模板)
- **Waypoints.js** - 滾動到特定位置觸發動畫
- **視差效果** - 不同層以不同速度移動
- **CSS Transitions** - 平滑動畫
- **Section-based** - 每個區塊獨立動畫
- **jQuery** - DOM 操作

### 倒數計時器
```javascript
const launchDate = new Date('2026-07-01T09:00:00+08:00').getTime();
setInterval(update, 10); // 每 10ms 更新一次
```

---

## 設計參考流程

### 工作流程
1. 用戶截圖喜歡的網站（SpaceX、NASA、Blue Origin 等）放到 `web/references/`
2. Claude 分析截圖的設計語言（配色、排版、動效）
3. 提取喜歡的元素套用到太空人隊網站

### 參考資料夾
`/Users/frankchen/astronauts12/web/references/`

### 已有參考截圖
1. **SpaceX OUR MISSIONS 頁面** (`Screenshot 2025-11-13 at 8.52.01 PM.png`)
   - 純黑背景 + 白字
   - 左圖右文排版
   - 規格表格式：標籤左對齊、數值右對齊
   - Tab 切換功能
   - 簡潔 CTA 按鈕
   - 極簡科技感風格

### 可參考的設計元素
- 倒數計時器風格
- 首頁 Hero 大圖排版
- 數據/統計呈現方式
- 時間軸設計
- 火箭規格展示
- 團隊成員排版
- 整體科技感氛圍

### 搭配工具
- **Puppeteer MCP** - 網頁截圖預覽
- **Playwright MCP** - 瀏覽器自動化測試
- **Figma MCP** - 設計稿轉代碼（如有 Figma 設計稿）
- **GitHub MCP** - PR/Issue 管理

---

## 待處理項目

### 需要更換的圖片
- [ ] `/img/bg-hero.jpg` - 首頁背景（目前 404）
- [ ] `/img/bg-hydrocode.jpg` - 火箭規格區塊背景（404）
- [ ] 其他太空主題背景圖（用戶說要自己生成）

### 需要填入的資料
- [ ] Threads 帳號連結
- [ ] Instagram 帳號連結
- [ ] YouTube 頻道連結
- [ ] favicon.ico

### 可選優化
- [ ] 火箭 SVG 側視圖（標註各部位）
- [ ] 募資進度條（如需要）
- [ ] 手機版測試與優化

---

## OpenRocket 模擬數據

```
Apogee:           3,036 m
Max Velocity:     310 m/s (Mach 0.921)
Max Acceleration: 82.2 m/s² (8.4G)
Flight Time:      352 s
Length:           270 cm
Diameter:         15.4 cm
Dry Mass:         11,047 g
Wet Mass:         26,347 g
Stability:        1.73 cal
CG:               179 cm
CP:               206 cm
```

---

## 團隊資料 (from Google Sheets)

| English Name | Chinese Name | Role | Organization |
|--------------|--------------|------|--------------|
| 力哥 | 李一勵 | Advisor | 太空人股份有限公司 |
| Wayne | 陳韋安 | Leader | 快點行銷有限公司 |
| Justine | 呂季潔 | Vice Leader | Lootex |
| Frank | 陳宏福 | CTO | 太空人股份有限公司 |
| Enoch | 何以諾 | CBO | Right Click |
| Danny | 孫苡凱 | CFO | 快點行銷有限公司 |
| Morrie | 黃禹諦 | - | 太空人股份有限公司 |
| Keng | 安康 | - | 太空人股份有限公司 |
| Jimmy | 林志昇 | - | 但以誠科技股份有限公司 |
| Ben | 吳保民 | - | 時見數位科技股份有限公司 |
| Leo | 孫家榮 | - | 火箭人工作室 |
| Peter | 吳世傑 | - | 信利興業股份有限公司 |
| Jobs | 盧伯彥 | - | 太空人股份有限公司 |
| David | 魏宇霆 | - | 傲嬌軟體/台灣黑客松 |

---

*Last Updated: 2025-12-26*
