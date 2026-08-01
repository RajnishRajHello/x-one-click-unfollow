// Automatically click the confirm button as soon as the unfollow modal appears
const observer = new MutationObserver((mutations) => {
  for (const mutation of mutations) {
    if (mutation.addedNodes.length) {
      // X uses this test ID for confirmation modal buttons
      const confirmButton = document.querySelector(
        '[data-testid="confirmationSheetConfirm"]',
      );

      if (confirmButton) {
        confirmButton.click();
      }
    }
  }
});

// Observe changes across the entire page body
observer.observe(document.body, {
  childList: true,
  subtree: true,
});
