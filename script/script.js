import Lenis from "@studio-freight/lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import "splitting/dist/splitting.css";
import "splitting/dist/splitting-cells.css";
import Splitting from "splitting";

Splitting();

const fx16Titles = [
  ...document.querySelectorAll(
    ".content__title[data-splitting][data-effect16]"
  ),
];

const fx17Titles = [
  ...document.querySelectorAll(
    ".content__title[data-splitting][data-effect17]"
  ),
];
const fx27Titles = [
  ...document.querySelectorAll(
    ".content__title[data-splitting][data-effect27]"
  ),
];

// Lenis smooth scrolling
let lenis;

// Initialize Lenis smooth scrolling
const initSmoothScrolling = () => {
  lenis = new Lenis({
    el: document.querySelector(".content"),
    lerp: 0.2,
    smooth: true,
  });

  ScrollTrigger.scrollerProxy(".content", {
    scrollTop(value) {
      return arguments.length
        ? lenis.scrollTo(value, 0, 0)
        : lenis.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
  });

  ScrollTrigger.refresh();

  lenis.on("scroll", () => ScrollTrigger.update());

  const scrollFn = (time) => {
    lenis.raf(time);
    requestAnimationFrame(scrollFn);
  };

  requestAnimationFrame(scrollFn);
};

initSmoothScrolling();

// GSAP Scroll Triggers
const scroll = () => {
  fx16Titles.forEach((title) => {
    gsap.fromTo(
      title,
      {
        transformOrigin: "0% 50%",
        rotate: 3,
      },
      {
        ease: "none",
        rotate: 0,
        scrollTrigger: {
          trigger: title,
          start: "top bottom",
          end: "top top",
          scrub: true,
        },
      }
    );

    gsap.fromTo(
      title.querySelectorAll(".word"),
      {
        "will-change": "opacity",
        opacity: 0.1,
      },
      {
        ease: "none",
        opacity: 1,
        stagger: 0.05,
        scrollTrigger: {
          trigger: title,
          start: "top bottom-=20%",
          end: "center top+=20%",
          scrub: true,
        },
      }
    );
  });
  fx17Titles.forEach((title) => {
    const chars = title.querySelectorAll(".char");

    chars.forEach((char) => gsap.set(char.parentNode, { perspective: 1000 }));

    gsap.fromTo(
      chars,
      {
        "will-change": "opacity, transform",
        opacity: 0,
        rotateX: () => gsap.utils.random(-120, 120),
        z: () => gsap.utils.random(-200, 200),
      },
      {
        ease: "none",
        opacity: 1,
        rotateX: 0,
        z: 0,
        stagger: 0.02,
        scrollTrigger: {
          trigger: title,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      }
    );
  });

  fx27Titles.forEach((title) => {
    const words = [...title.querySelectorAll(".word")];

    words.forEach((word) => gsap.set(word.parentNode, { perspective: 1000 }));

    gsap.fromTo(
      words,
      {
        "will-change": "opacity, transform",
        z: () => gsap.utils.random(500, 950),
        opacity: 0,
        xPercent: (pos) => gsap.utils.random(-100, 100),
        yPercent: (pos) => gsap.utils.random(-10, 10),
        rotationX: () => gsap.utils.random(-90, 90),
      },
      {
        ease: "expo",
        opacity: 1,
        rotationX: 0,
        rotationY: 0,
        xPercent: 0,
        yPercent: 0,
        z: 0,
        scrollTrigger: {
          trigger: title,
          start: "center center",
          end: "+=100%",
          scrub: true,
          pin: title.parentNode,
        },
        stagger: {
          each: 0.006,
          from: "random",
        },
      }
    );
  });
};

scroll();

const MediaFrames = document.querySelectorAll(".MediaFrame");

MediaFrames.forEach((MediaFrame) => {
  MediaFrame.addEventListener("mouseenter", () => {
    let styleCardMedia = MediaFrame.querySelector(".StyleCard__media");

    styleCardMedia.classList.add("StyleCard__media__hover");
  });
  MediaFrame.addEventListener("mouseleave", () => {
    let styleCardMedia = MediaFrame.querySelector(".StyleCard__media");

    styleCardMedia.classList.remove("StyleCard__media__hover");
  });
});

// SERVICE

let serviceTag = [
  "#WebDevelopment",
  "#HTML",
  "#CSS",
  "#JavaScript",
  "#ReactJS",
  "#AngularJS",
  "#VueJS",
  "#NodeJS",
  "#Python",
  "#Django",
  "#Flask",
  "#Ruby",
  "#Rails",
  "#PHP",
  "#Laravel",
  "#MySQL",
  "#PostgreSQL",
  "#MongoDB",
  "#API",
  "#REST",
  "#GraphQL",
  "#Bootstrap",
  "#ResponsiveDesign",
  "#Frontend",
  "#Backend",
  "#FullStack",
  "#WebDesign",
  "#UX",
  "#UI",
  "#WebAccessibility",
  "#SEO",
  "#WordPress",
  "#Ecommerce",
  "#WebPerformance",
  "#ProgressiveWebApps",
  "#DevOps",
  "#AWS",
  "#Cloud",
  "#Git",
  "#GitHub",
  "#Docker",
  "#Cybersecurity",
  "#WebSecurity",
  "#TypeScript",
  "#WebAssembly",
];

let pluginDevelopmentTags = [
  "#WordPress",
  "#PluginDevelopment",
  "#CustomPlugin",
  "#WordPressDevelopment",
  "#WordPressPlugin",
  "#PHP",
  "#JavaScript",
  "#HTML",
  "#CSS",
  "#MySQL",
  "#API",
  "#WebDevelopment",
  "#WP_CLI",
  "#WP_Hooks",
  "#WP_Filters",
  "#WP_Shortcodes",
  "#WordPressThemes",
  "#WooCommerce",
  "#WordPressSecurity",
  "#WordPressSEO",
  "#WPBakery",
  "#Elementor",
  "#Gutenberg",
  "#VersionControl",
  "#Git",
  "#GitHub",
  "#WordPressCommunity",
  "#OpenSource",
  "#Testing",
  "#Debugging",
  "#CodeQuality",
  "#UserExperience",
  "#WebsitePerformance",
  "#WebDesign",
  "#ResponsiveDesign",
  "#WordPressSupport",
  "#WebAccessibility",
  "#WP_REST_API",
];

let wordpressMaintainance = [
  "#WordPress",
  "#WordPressMaintenance",
  "#WordPressSupport",
  "#WebsiteMaintenance",
  "#WebDevelopment",
  "#PHP",
  "#MySQL",
  "#WordPressUpdate",
  "#WordPressBackup",
  "#WordPressSecurity",
  "#WebSecurity",
  "#MalwareRemoval",
  "#PerformanceOptimization",
  "#SEO",
  "#WebsiteSpeed",
  "#WebHosting",
  "#Caching",
  "#CDN",
  "#DatabaseOptimization",
  "#ErrorFixing",
  "#BugFixing",
  "#PluginUpdates",
  "#ThemeUpdates",
  "#WebsiteMonitoring",
  "#UptimeMonitoring",
  "#WebsiteAudit",
  "#WordPressConsulting",
  "#UserExperience",
  "#WebAccessibility",
  "#WordPressTraining",
];

let ecomDevelopment = [
  "#Ecommerce",
  "#WebDevelopment",
  "#EcommerceDevelopment",
  "#Magento",
  "#Shopify",
  "#WooCommerce",
  "#BigCommerce",
  "#PrestaShop",
  "#Opencart",
  "#DrupalCommerce",
  "#JavaScript",
  "#PHP",
  "#Ruby",
  "#Python",
  "#Java",
  "#HTML",
  "#CSS",
  "#ReactJS",
  "#VueJS",
  "#AngularJS",
  "#MySQL",
  "#PostgreSQL",
  "#MongoDB",
  "#API",
  "#PaymentGatewayIntegration",
  "#UserExperience",
  "#WebDesign",
  "#MobileCommerce",
  "#ResponsiveDesign",
  "#SEO",
  "#DigitalMarketing",
  "#Analytics",
  "#EcommerceSecurity",
  "#WebHosting",
  "#ConversionOptimization",
  "#CheckoutOptimization",
  "#EcommercePlatforms",
  "#Dropshipping",
  "#Retail",
  "#B2B",
  "#B2C",
];

function changeWords() {
  let webDevelopment =
    serviceTag[Math.floor(Math.random() * serviceTag.length)];
  let webDevelopment2 =
    serviceTag[Math.floor(Math.random() * serviceTag.length)];
  document.querySelector(".selected-works-list__link-desc").innerHTML =
    webDevelopment;
  document.querySelectorAll(".selected-works-list__link-desc")[1].innerHTML =
    webDevelopment2;
}
function changeWordsCustomPlugin() {
  let customPlugin =
    pluginDevelopmentTags[
      Math.floor(Math.random() * pluginDevelopmentTags.length)
    ];
  let customPlugin2 =
    pluginDevelopmentTags[
      Math.floor(Math.random() * pluginDevelopmentTags.length)
    ];
  document.querySelectorAll(".selected-works-list__link-desc")[2].innerHTML =
    customPlugin;
  document.querySelectorAll(".selected-works-list__link-desc")[3].innerHTML =
    customPlugin2;
}
function changeWordsWordpressMaintainance() {
  let wMaintainance =
    wordpressMaintainance[
      Math.floor(Math.random() * wordpressMaintainance.length)
    ];
  let wMaintainance2 =
    wordpressMaintainance[
      Math.floor(Math.random() * wordpressMaintainance.length)
    ];
  document.querySelectorAll(".selected-works-list__link-desc")[4].innerHTML =
    wMaintainance;
  document.querySelectorAll(".selected-works-list__link-desc")[5].innerHTML =
    wMaintainance2;
}
function changeWordsEcomDevelopment() {
  let ecommerceDev =
    ecomDevelopment[Math.floor(Math.random() * ecomDevelopment.length)];
  let ecommerceDev2 =
    ecomDevelopment[Math.floor(Math.random() * ecomDevelopment.length)];
  document.querySelectorAll(".selected-works-list__link-desc")[6].innerHTML =
    ecommerceDev;
  document.querySelectorAll(".selected-works-list__link-desc")[7].innerHTML =
    ecommerceDev2;
}

setInterval(changeWords, 2000);
setInterval(changeWordsCustomPlugin, 2000);
setInterval(changeWordsWordpressMaintainance, 2000);
setInterval(changeWordsEcomDevelopment, 2000);

$(document).ready(function () {
  var timeoutId, timeoutId2, countdownId;

  $(".selected-works-list__link-wrap").hover(
    function () {
      var $this = $(this); // Get current hovered element

      // Clear any existing timeouts
      clearTimeout(timeoutId);
      clearTimeout(timeoutId2);

      var counter = 3; // set counter to 5
      $this
        .find(".selected-works-list__link-progress-counter")
        .text(`0${counter}`);

      countdownId = setInterval(function () {
        counter--;
        $this
          .find(".selected-works-list__link-progress-counter")
          .text(`0${counter}`);

        // Clear interval when counter reaches 0
        if (counter === 0) clearInterval(countdownId);
      }, 1000); // decrease counter every 1 second

      // Set timeout
      timeoutId = setTimeout(function () {
        clearInterval(countdownId);

        $(".work-content-description").removeClass(
          "work-content-description-active"
        );
        // Find the next .work-content-description element and add class to it
        $this
          .next(".work-content-description")
          .addClass("work-content-description-active");
      }, 3000); // 5 seconds
    },
    function () {
      // Mouse out - clear the timeouts and interval
      clearTimeout(timeoutId);
      clearTimeout(timeoutId2);
      clearInterval(countdownId);

      // Reset counter
      $(".selected-works-list__link-progress-counter").text("");

      // Set a timeout to delay the removal of class
      timeoutId2 = setTimeout(function () {
        // Remove class from any .work-content-description element
        $(".work-content-description").removeClass(
          "work-content-description-active"
        );
      }, 2000); // 2 seconds
    }
  );
});

$(document).ready(function () {
  $(".selected-works-list__link-wrap").click(function () {
    var $this = $(this); // Get current hovered element

    $(".work-content-description").removeClass(
      "work-content-description-active"
    );

    $this
      .next(".work-content-description")
      .addClass("work-content-description-active");
  });
});
