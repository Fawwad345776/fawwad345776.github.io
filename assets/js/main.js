/* What2Eat site script — small, dependency-free */
(function () {
  "use strict";

  /* Optional Google Analytics 4. Paste your Measurement ID (G-XXXXXXX) between the quotes
     after you create a GA4 property. Leave empty to load no analytics at all. */
  var GA4_ID = "";
  if (GA4_ID) {
    var s = document.createElement("script");
    s.async = true;
    s.src = "https://www.googletagmanager.com/gtag/js?id=" + GA4_ID;
    document.head.appendChild(s);
    window.dataLayer = window.dataLayer || [];
    window.gtag = function () { window.dataLayer.push(arguments); };
    window.gtag("js", new Date());
    window.gtag("config", GA4_ID);
    document.addEventListener("click", function (e) {
      var a = e.target.closest && e.target.closest("a[data-play]");
      if (a) window.gtag("event", "play_store_click", { placement: a.getAttribute("data-play") });
    });
  }

  /* Mobile menu */
  var btn = document.querySelector(".menu-btn");
  var nav = document.getElementById("site-nav");
  if (btn && nav) {
    btn.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      btn.setAttribute("aria-expanded", open ? "true" : "false");
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && nav.classList.contains("open")) {
        nav.classList.remove("open");
        btn.setAttribute("aria-expanded", "false");
        btn.focus();
      }
    });
  }

  /* Header border on scroll */
  var head = document.querySelector(".site-head");
  if (head) {
    var onScroll = function () { head.classList.toggle("scrolled", window.scrollY > 8); };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  /* Hero decider: cycles through real dishes from the What2Eat library */
  var box = document.querySelector("[data-decider]");
  if (box) {
    var dishes = [
      ["Chicken Karahi", "Pakistani", "Dinner"],
      ["Tarka Daal Chawal with Kachumber", "Pakistani", "Lunch"],
      ["Rigatoni alla Puttanesca", "Italian", "Dinner"],
      ["Kai Jeow Crispy Wok Omelette", "Thai", "Breakfast"],
      ["Afghani Pulao", "Afghan", "Dinner"],
      ["Onion Pakora Bajji", "Indian", "Evening snacks"],
      ["Ali Nazik Kebab", "Turkish", "Dinner"],
      ["Koi Macher Jhol", "Bangladeshi", "Lunch"],
      ["Aloo Baingan with Roti", "Pakistani", "Lunch"],
      ["New England Clam Chowder", "American", "Dinner"],
      ["Chana Daal Ka Halwa", "Pakistani", "Dessert"],
      ["Tabbouleh Parsley Bulgur Salad", "Emirati", "Lunch"]
    ];
    var nameEl = box.querySelector(".decider-dish");
    var metaEl = box.querySelector(".decider-meta");
    var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    var i = 0;
    var show = function (d) { nameEl.textContent = d[0]; metaEl.textContent = d[1] + " · " + d[2]; };
    var decide = function () {
      if (reduce) { i = (i + 1) % dishes.length; show(dishes[i]); return; }
      var ticks = 0;
      box.classList.add("spinning");
      var t = setInterval(function () {
        show(dishes[Math.floor(Math.random() * dishes.length)]);
        if (++ticks > 9) {
          clearInterval(t);
          i = (i + 1) % dishes.length;
          show(dishes[i]);
          box.classList.remove("spinning");
        }
      }, 70);
    };
    var again = document.querySelector("[data-decide-again]");
    if (again) again.addEventListener("click", decide);
    setTimeout(decide, 900);
  }

  /* Contact form: composes an email in the visitor's mail app (no server needed) */
  var form = document.getElementById("contact-form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var name = form.elements.name.value.trim();
      var topic = form.elements.topic.value;
      var msg = form.elements.message.value.trim();
      var subject = "[What2Eat] " + topic + (name ? " from " + name : "");
      window.location.href = "mailto:info.mfsoft@gmail.com?subject=" +
        encodeURIComponent(subject) + "&body=" + encodeURIComponent(msg + "\n\n— " + name);
    });
  }
})();
