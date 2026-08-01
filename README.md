# X One-Click Unfollow

A lightweight browser extension that bypasses the unfollow confirmation modal on X (formerly Twitter).

## Features

- **Instant Unfollowing:** Automatically clicks the "Unfollow" confirmation button as soon as the modal appears, saving you a click.
- **Manifest V3:** Built using the latest and most secure browser extension standards.
- **Lightweight:** Minimal code that only runs when necessary, without degrading browser performance.

## Installation

### Chrome / Edge / Brave

1. Download or clone this repository to your local machine.
2. Open your browser and navigate to the Extensions page:
   - Chrome/Brave: `chrome://extensions/`
   - Edge: `edge://extensions/`
3. Enable **Developer mode** (usually a toggle in the top right corner).
4. Click on the **Load unpacked** button.
5. Select the `x-one-click-unfollow` directory.
6. The extension is now installed and active!

### Firefox

1. Open Firefox and navigate to `about:debugging#/runtime/this-firefox`.
2. Click on **Load Temporary Add-on...**
3. Select the `manifest.json` file from the `x-one-click-unfollow` directory.
4. The extension is now installed temporarily (it will be removed when you restart Firefox).

## How it Works

The extension uses a `MutationObserver` to watch for changes on `twitter.com` and `x.com`. Whenever the DOM changes (like when a modal appears), it checks if the unfollow confirmation button is present (`[data-testid="confirmationSheetConfirm"]`). If it is, the extension clicks it automatically.

## License

This project is open-source and available to use and modify.
