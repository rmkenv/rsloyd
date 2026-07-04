document.getElementById('year').textContent = new Date().getFullYear();

/* ------------------------------------------------------------------
   CAROUSEL — "What comes off the bench"
   ------------------------------------------------------------------
   This is a manual carousel: it does NOT pull from Instagram live.
   To update it, edit the SLIDES array below.

   Each slide needs:
     - caption : short text under the photo (what it is / wood type)
     - link    : the Instagram post URL for that piece (or just the
                 profile URL if you haven't posted it yet)
     - image   : path to a photo, e.g. "assets/shop/01.jpg"
                 Drop real photos in the assets/shop/ folder and point
                 to them here. Recommended: square or 4:5 crop, under
                 ~500KB each so the page stays fast.

   Until you add real photos, "swatch" is used instead of "image" —
   it just shows a placeholder wood-tone card so the carousel has
   something to display. Delete the "swatch" key once you add a real
   "image" path for that slide.
------------------------------------------------------------------- */

const SLIDES = [
  {
    caption: "Cherry serving spoon",
    link: "https://instagram.com/ryanssloyd",
    swatch: "swatch-1"
  },
  {
    caption: "Walnut spatula",
    link: "https://instagram.com/ryanssloyd",
    swatch: "swatch-2"
  },
  {
    caption: "Maple butter knife",
    link: "https://instagram.com/ryanssloyd",
    swatch: "swatch-3"
  },
  {
    caption: "Birch treen bowl",
    link: "https://instagram.com/ryanssloyd",
    swatch: "swatch-4"
  },
  {
    caption: "Sycamore cooking spoon",
    link: "https://instagram.com/ryanssloyd",
    swatch: "swatch-1"
  },
  {
    caption: "Ash spreader set",
    link: "https://instagram.com/ryanssloyd",
    swatch: "swatch-2"
  }
];

function initCarousel() {
  const track = document.getElementById('carousel-track');
  const dotsWrap = document.getElementById('carousel-dots');
  const prevBtn = document.getElementById('carousel-prev');
  const nextBtn = document.getElementById('carousel-next');
  if (!track) return;

  track.innerHTML = SLIDES.map((slide, i) => `
    <div class="carousel-slide" data-index="${i}">
      <a class="carousel-slide-media" href="${slide.link}" target="_blank" rel="noopener" aria-label="${slide.caption} — view on Instagram">
        ${slide.image
          ? `<img src="${slide.image}" alt="${slide.caption}" loading="lazy">`
          : `<span class="grain-swatch ${slide.swatch || 'swatch-1'}" aria-hidden="true"></span>`
        }
      </a>
      <div class="carousel-caption">
        <span class="carousel-caption-text">${slide.caption}</span>
        <a class="carousel-caption-link" href="${slide.link}" target="_blank" rel="noopener">View on Instagram &rarr;</a>
      </div>
    </div>
  `).join('');

  dotsWrap.innerHTML = SLIDES.map((_, i) =>
    `<button class="carousel-dot${i === 0 ? ' is-active' : ''}" data-index="${i}" aria-label="Go to slide ${i + 1}"></button>`
  ).join('');

  const slides = Array.from(track.querySelectorAll('.carousel-slide'));
  const dots = Array.from(dotsWrap.querySelectorAll('.carousel-dot'));

  function setActiveDot(index) {
    dots.forEach((d, i) => d.classList.toggle('is-active', i === index));
  }

  function scrollToSlide(index) {
    const clamped = Math.max(0, Math.min(index, slides.length - 1));
    slides[clamped].scrollIntoView({ behavior: 'smooth', inline: 'start', block: 'nearest' });
  }

  function currentIndex() {
    const trackRect = track.getBoundingClientRect();
    let closest = 0;
    let closestDist = Infinity;
    slides.forEach((slide, i) => {
      const dist = Math.abs(slide.getBoundingClientRect().left - trackRect.left);
      if (dist < closestDist) { closestDist = dist; closest = i; }
    });
    return closest;
  }

  prevBtn.addEventListener('click', () => scrollToSlide(currentIndex() - 1));
  nextBtn.addEventListener('click', () => scrollToSlide(currentIndex() + 1));

  dots.forEach(dot => {
    dot.addEventListener('click', () => scrollToSlide(Number(dot.dataset.index)));
  });

  let scrollTimeout;
  track.addEventListener('scroll', () => {
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(() => setActiveDot(currentIndex()), 100);
  });
}

initCarousel();
