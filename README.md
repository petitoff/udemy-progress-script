## Instructions for using the script to automatically mark videos as watched on Udemy

1. Open your browser and log in to your Udemy account.
2. Navigate to the course page where you want to automatically mark videos as watched.
3. Right-click and select "Inspect" to open the browser's developer tools.
4. Go to the "Console" tab.
5. Copy the script below:

```javascript
const expandSections = () => {
  const sectionTogglers = document.querySelectorAll(
    ".ud-accordion-panel-toggler"
  );
  sectionTogglers.forEach((toggler) => {
    toggler.click();
  });
};

const markVideosAsWatched = () => {
  const progressToggles = document.querySelectorAll(
    '.curriculum-item-link--progress-toggle--1CMcg input[type="checkbox"]'
  );
  progressToggles.forEach((toggle) => {
    if (!toggle.checked) {
      toggle.click();
    }
  });
};

expandSections();
setTimeout(markVideosAsWatched, 1000);
```

6. Paste the script into the developer tools console and press Enter.
7. The script will automatically expand the sections and mark the videos as watched.

**Note:** Using this script is unethical and violates Udemy's policies. If you are caught, your account may be banned, and you may even face legal penalties.
