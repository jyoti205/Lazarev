// ----------Nav Animation-----------

var nav = document.querySelector("nav");

nav.addEventListener("mouseenter", function () {
    let tl = gsap.timeline();

    // Reset spans before animating in
    gsap.set(".nav2 h5 span", { y: 25, opacity: 0 });

    tl.to("#nav-bottom", {
        height: "20vh",
        duration: 0.4,
        ease: "power2.out"
    });
    tl.to(".nav2 h5", {
        display: "block",
        duration: 0
    });
    tl.to(".nav2 h5 span", {
        y: 0,
        opacity: 1,
        stagger: {
            amount: 0.6
        },
        ease: "power2.out"
    });
});

nav.addEventListener("mouseleave", function () {
    let tl = gsap.timeline();

    tl.to(".nav2 h5 span", {
        y: 25,
        opacity: 0,
        stagger: {
            amount: 0.2
        },
        ease: "power2.in",
        duration: 0.2
    });
    tl.to(".nav2 h5", {
        display: "none",
        duration: 0
    });
    tl.to("#nav-bottom", {
        height: 0,
        duration: 0.3,
        ease: "power2.in"
    });
});

// ---------- Custom Cursor Badge ----------

const videoContainer = document.querySelector("#video-container");
const badge = document.querySelector("#showreel-badge");

videoContainer.addEventListener("mousemove", function (e) {
    const rect = videoContainer.getBoundingClientRect();
    
    // Mouse position relative to container
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    gsap.to(badge, {
        left: x,
        top: y,
        duration: 0.5,
        ease: "power2.out"
    });
});

videoContainer.addEventListener("mouseenter", function () {
    gsap.to(badge, {
        scale: 1,
        opacity: 1,
        duration: 0.3,
        ease: "power2.out"
    });
});

videoContainer.addEventListener("mouseleave", function () {
    gsap.to(badge, {
        scale: 0,
        opacity: 0,
        duration: 0.3,
        ease: "power2.in"
    });
});

document.querySelectorAll('.stat-card').forEach(card => {
    const video = card.querySelector('video');
    if (!video) return;
    card.addEventListener('mouseenter', () => video.play());
    card.addEventListener('mouseleave', () => {
        video.pause();
        video.currentTime = 0;
    });
});

function page4Animations() {
    gsap.from("#btm6-part2 h4", {
        x: 0,
        duration: 1,
        scrollTrigger: {
            trigger: "#btm6-part2",
            scroller: "#main",
            // markers:true,
            start: "top 80%",
            end: "top 10%",
            scrub: true
        }
    })
}

// Page 5 reveal
const p5Els = document.querySelectorAll('#p5-left h1, .text-block, .stat-card');

const p5Observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }, 80 * i);
    }
  });
}, { threshold: 0.1 });

p5Els.forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(30px)';
  el.style.transition = 'opacity 0.8s cubic-bezier(0.16,1,0.3,1), transform 0.8s cubic-bezier(0.16,1,0.3,1)';
  p5Observer.observe(el);
});

// Page 6 - case cards stagger animation
gsap.from(".case-card", {
  scrollTrigger: {
    trigger: "#cases-grid",
    start: "top 85%",
  },
  opacity: 0,
  y: 40,
  duration: 0.6,
  stagger: 0.15,
  ease: "power2.out"
});

gsap.from("#page6-header h2, #page6-header p", {
  scrollTrigger: {
    trigger: "#page6-header",
    start: "top 80%",
  },
  opacity: 0,
  y: 30,
  duration: 0.7,
  stagger: 0.2,
  ease: "power2.out"
});

// Video play/pause on hover
document.querySelectorAll('.case-media-wrap').forEach(wrap => {
  const video = wrap.querySelector('.case-video');
  
  wrap.addEventListener('mouseenter', () => {
    video.play();
  });
  
  wrap.addEventListener('mouseleave', () => {
    video.pause();
    video.currentTime = 0;
  });
});

// Page 8
function page8Animations() {

    document.querySelectorAll(".btm8-parts").forEach((part) => {

        let h4s = part.querySelectorAll("h4");

        h4s.forEach((elem, index) => {

            gsap.to(elem, {
                x: index * 30,
                ease: "none",

                scrollTrigger: {
                    trigger: part, // yaha #page8 ki jagah part use karo
                    start: "top 90%",
                    end: "top 20%",
                    scrub: true
                    // markers: true
                }
            });

        });

    });

}

page8Animations();