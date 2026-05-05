/* ============================================================
   MAIN JAVASCRIPT — Portfolio Site
   This file handles two things:
     1. Mobile hamburger menu toggle
     2. Creative section filter buttons
   You do NOT need to edit this file when adding content.
   ============================================================ */

document.addEventListener('DOMContentLoaded', function () {

  /* ── Mobile Nav Toggle ─────────────────────────────────── */
  var toggleBtn = document.getElementById('nav-toggle');
  var navLinks  = document.getElementById('nav-links');

  if (toggleBtn && navLinks) {
    toggleBtn.addEventListener('click', function () {
      navLinks.classList.toggle('open');
    });

    // Close nav when a link is clicked (smooth scroll)
    navLinks.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        navLinks.classList.remove('open');
      });
    });
  }

  /* ── Academic Tabs ─────────────────────────────────────── */
  var tabBtns   = document.querySelectorAll('.tab-btn');
  var tabPanels = document.querySelectorAll('.tab-panel');

  tabBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var target = this.dataset.tab;

      tabBtns.forEach(function (b) { b.classList.remove('active'); });
      tabPanels.forEach(function (p) { p.classList.remove('active'); });

      this.classList.add('active');
      var panel = document.getElementById(target);
      if (panel) { panel.classList.add('active'); }
    });
  });

  /* ── Creative Filter ───────────────────────────────────── */
  var filterBtns = document.querySelectorAll('.filter-btn');
  var items      = document.querySelectorAll('.creative-item');

  filterBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var filter = this.dataset.filter;

      filterBtns.forEach(function (b) { b.classList.remove('active'); });
      this.classList.add('active');

      items.forEach(function (item) {
        if (filter === 'all' || item.dataset.category === filter) {
          item.style.display = '';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });

});
