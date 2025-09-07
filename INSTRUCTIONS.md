# NDI Vape Tools E-Liquid Calculator - Instructions

This tool helps you calculate the exact amounts of ingredients needed to make your own e-liquid. It's designed for precision and ease of use, with support for multiple flavors (including names) and nicotine units (% or mg/ml).

## Setup

1. Download or clone the repository from GitHub.
2. Ensure the files (`index.html`, `styles.css`, and `script.js`) are in the same folder.
3. Open `index.html` in a modern web browser (e.g., Chrome, Firefox). No internet or installation required (it works offline).

## How to Use the Calculator

### 1. Input Fields

- **Total Volume (ml)**: Enter the total amount of e-liquid you want to make (e.g., 30 ml, 60 ml, 100 ml).

- **Units**: Select your preferred nicotine measurement:
  - **%** (default): For percentage concentration (e.g., 18% base).
  - **mg/ml**: For absolute concentration (e.g., 100 mg/ml base).
  - The labels and placeholders for nicotine fields will update automatically when you switch.

- **Nicotine Base**: Enter the concentration of your nicotine base (must be higher than or equal to desired nicotine).
  - Example: 18% or 100 mg/ml.

- **Desired Nicotine**: Enter the nicotine concentration you want in your final e-liquid.
  - Example: 3% or 3 mg/ml.

- **Aroma/Flavor(s)**: Enter the percentage of flavor concentrate(s) you want to add.
  - For each flavor: Optionally enter a name (e.g., "Vanilla") and the percentage (e.g., 10%).
  - Click "Add Another Flavor" to include multiple flavors.
  - The total of all flavors will be calculated automatically (must not exceed 100%).

- **PG/VG Ratio**: Use the slider to set your desired ratio of Propylene Glycol (PG) to Vegetable Glycerin (VG).
  - Slide left for more PG (e.g., 70% PG / 30% VG).
  - Slide right for more VG (e.g., 30% PG / 70% VG).
  - Center position is 50/50 (default). The display updates in real-time.

### 2. Theme Toggle

- In the header (top-right), use the switch to toggle between light mode (default) and dark mode for better visibility in low-light environments.
- Your preference is saved in your browser's local storage.

### 3. Calculation

Click the **"Calculate"** button to compute the required amounts. The tool validates inputs (e.g., desired nicotine ≤ base, total flavors ≤ 100%) and shows alerts for errors.

### 4. Results

The calculator will display the exact amounts needed for:

- **Nicotine Base**: Amount of your nicotine base to add (in ml).
- **Total Aroma/Flavor**: Combined amount of all flavor concentrates (in ml).
- **Individual Flavors**: Breakdown for each flavor (e.g., "Vanilla: 10.00 ml", "Caramel: 5.00 ml")—only shown if multiple flavors are added with percentages.
- **PG/VG Base**: Total amount of base liquid (what's left after nicotine and flavors, in ml).
- **Pure PG in Base**: Amount of pure PG in your base (in ml).
- **Pure VG in Base**: Amount of pure VG in your base (in ml).
- **Total Volume**: Confirms the total volume of your e-liquid (in ml).

All volumes are rounded to 2 decimal places for precision.

### 5. Example Calculation

If you want to make 100 ml of e-liquid with:
- 3 mg/ml nicotine using a 100 mg/ml nicotine base
- Two flavors: 10% "Vanilla" and 5% "Caramel" (15% total)
- 50/50 PG/VG ratio

Input these values:
- Total Volume: 100
- Units: mg/ml
- Nicotine Base: 100
- Desired Nicotine: 3
- First Flavor: Name = "Vanilla", Percentage = 10
- Add another flavor: Name = "Caramel", Percentage = 5
- PG/VG Ratio: 50 (center position)

The calculator will show:
- Nicotine Base: 3.00 ml
- Total Aroma/Flavor: 15.00 ml
- Vanilla: 10.00 ml
- Caramel: 5.00 ml
- PG/VG Base: 82.00 ml
- Pure PG in Base: 41.00 ml
- Pure VG in Base: 41.00 ml
- Total Volume: 100.00 ml

(If using % units instead: Nicotine Base = 100, Desired = 3 → same 3.00 ml result, as the ratio math is identical.)

## Tips

1. Always verify your calculations before mixing (double-check inputs and results).
2. Store your homemade e-liquid properly (cool, dark place).
3. Shake well before use and let it steep for best flavor if needed (e.g., 1-2 weeks for complex mixes / reffer to the flavor's label).
4. Keep all ingredients away from children and pets.
5. When using multiple flavors, start with lower percentages (e.g., 5-15% total) and adjust to taste in future batches.
6. Flavor names are optional but helpful for tracking. Leave blank to default for "Flavor 1", "Flavor 2" etc.
7. The tool works offline and is mobile-friendly; test on your device for best results.

## Safety Notes

- Handle nicotine with care (use gloves, avoid skin contact—it can be toxic if mishandled).
- Work in a well-ventilated area.
- Do not ingest e-liquid or any ingredients.
- Dispose of any spills properly and clean equipment thoroughly.
- Consult local regulations for DIY e-liquid mixing.
- This tool is for informational purposes only - use at your own risk.

## Useful resources

For flavors inspiration, mixing ideas, and community:
- [E-Liquid Recipes](https://e-liquid-recipes.com/) 
- [All the FlavorS](https://alltheflavors.com/)

**Enjoy creating your custom e-liquid (and happy vaping, obviously :))**
