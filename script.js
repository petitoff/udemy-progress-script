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
