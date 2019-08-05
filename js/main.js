$(document).ready(function() {
  // Scroll target on Home Drivers section
  $("#home_drivers").on("inview", function(event, isInView) {
    if (isInView) {
      new TimelineMax().to("#drop_truck_mobile", 1, { opacity: 1, y: 0 }, 0.1);
      new TimelineMax().to("#drop_truck", 1.5, { opacity: 1, y: -500 }, 0.1);
    } else {
      // new TimelineMax().to("#drop_truck_mobile", 1, { opacity: 0, y: -95 }, 0.1);
      // new TimelineMax().to("#drop_truck", 1.5, { opacity: 0, y: -650 }, 0.1);
    }
  });
});
