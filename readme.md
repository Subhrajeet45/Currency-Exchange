# Currency Converter

A simple and interactive Currency Converter web application built using HTML, CSS, and JavaScript. This app allows users to convert amounts between different currencies with live exchange rates fetched from [ExchangeRate-API](https://www.exchangerate-api.com/).

## Features

- **Live Exchange Rates:** Fetches real-time currency exchange rates.
- **Wide Currency Support:** Supports dozens of global currencies.
- **Automatic Flag Display:** Shows country flags next to currency selectors.
- **Easy Swap:** Swap "From" and "To" currencies with a single click.
- **Responsive Design:** Works on desktop and mobile devices.
- **Error Handling:** Alerts for invalid input and API errors.

## Demo

![Currency Converter Screenshot](Screenshort.png) <!-- Add your screenshot if available -->

## Getting Started

### Prerequisites

No installation required. Just open the `index.html` file in your browser.

### File Structure

```
├── index.html       # Main HTML file
├── style.css        # Styling for the app
├── codes.js         # Currency code to country code mapping
├── Index.js         # Main JavaScript functionality
```

### Usage

1. **Enter Amount:** Input the value you want to convert.
2. **Select Currencies:** Choose the source and target currencies from the dropdown menus.
3. **View Flags:** Flags will automatically update based on selected currencies.
4. **Get Exchange Rate:** Click "Get Exchange Rate" to see the conversion.
5. **Swap Currencies:** Use the arrow icon to swap the selected currencies.

## How It Works

- **Currency Data:** `codes.js` provides a mapping between currency codes and country codes for flag display.
- **Exchange Rate:** On form submission, the app fetches the latest rates from `https://api.exchangerate-api.com/v4/latest/{FROM}`.
- **UI Update:** Results are displayed instantly, and flags update with currency changes.
- **Error Handling:** Invalid or empty input prompts a user alert.

## Dependencies

- [Font Awesome](https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css) for icons.
- [Flags API](https://flagsapi.com/) for country flags.
- [ExchangeRate-API](https://www.exchangerate-api.com/) for exchange rates.

## Customization

- **Add/Remove Currencies:** Edit the `countryList` object in `codes.js`.
- **Styling:** Modify `style.css` for custom themes.
- **API Endpoint:** Change the API endpoint in `Index.js` if you want to use a different exchange rate service.

## Credits

- [Font Awesome](https://fontawesome.com/)
- [ExchangeRate-API](https://www.exchangerate-api.com/)
- [Flags API](https://flagsapi.com/)

## License

This project is open source and available under the [MIT License](LICENSE).

---

Feel free to fork, contribute, or use this as a base for your own currency conversion projects!