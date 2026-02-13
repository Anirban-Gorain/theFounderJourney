// Header section

const menuBtn = document.getElementById("menuBtn");
const content = document.getElementById("content");

menuBtn.addEventListener("click", () => {
  content.classList.toggle("hidden");
});

const toggleBtn = document.getElementById("themeToggle");
const toggleCircle = document.getElementById("toggleCircle");
const html = document.documentElement;

const prefersDark = window.matchMedia("(prefers-color-scheme: dark)");

function applyTheme(isDark) {
  if (isDark) {
    html.classList.add("dark");
    toggleCircle.classList.add("translate-x-8");
    toggleCircle.textContent = "🌙";
  } else {
    html.classList.remove("dark");
    toggleCircle.classList.remove("translate-x-8");
    toggleCircle.textContent = "☀️";
  }
}

// On load
const savedTheme = localStorage.getItem("theme");

if (savedTheme) {
  applyTheme(savedTheme === "dark");
} else {
  applyTheme(prefersDark.matches);
}

// On toggle click
toggleBtn.addEventListener("click", () => {
  const isDark = html.classList.toggle("dark");
  localStorage.setItem("theme", isDark ? "dark" : "light");
  applyTheme(isDark);
});

// If system theme changes AND user hasn't chosen manually
prefersDark.addEventListener("change", (e) => {
  if (!localStorage.getItem("theme")) {
    applyTheme(e.matches);
  }
});

// Accordion

const sections = [
  {
    title: "Habits and Personal Discipline",
    description:
      "Feeling lazy, distracted, or inconsistent every week? Learn simple systems to build strong habits so you become focused, disciplined, and in control of your daily actions.",
    contents: [
      {
        title: "How to be productive without forcing yourself",
        youtubeLink: "https://www.youtube.com/watch?v=v5YWTC62djQ",
        notesLink: "",
        publishedOrNot: true,
      },
      {
        title: "Why You Can’t Stay Consistent (and the simple fix)",
        youtubeLink: "",
        notesLink: "",
        publishedOrNot: false,
      },
      {
        title: "What to do when you fail your habits again and again",
        youtubeLink: "",
        notesLink: "",
        publishedOrNot: false,
      },
      {
        title: "Why I’m disciplined in my head but lazy in real life",
        youtubeLink: "",
        notesLink: "",
        publishedOrNot: false,
      },
      {
        title: "Why I feel guilty about wasting time but still keep wasting it",
        youtubeLink: "",
        notesLink: "",
        publishedOrNot: false,
      },
      {
        title:
          "You misunderstood consistency and actually practicing intensity",
        youtubeLink: "",
        notesLink: "",
        publishedOrNot: false,
      },
      {
        title: "How to Beat All-or-Nothing Thinking in Routines",
        youtubeLink: "",
        notesLink: "",
        publishedOrNot: false,
      },
      {
        title: "How Instant Gratification Steals Your Motivation",
        youtubeLink: "",
        notesLink: "",
        publishedOrNot: false,
      },
      {
        title: "Practical Ways to Make Procrastination Physically Hard",
        youtubeLink: "",
        notesLink: "",
        publishedOrNot: false,
      },
      {
        title:
          "Why You Feel Disciplined for 3 Days Then Suddenly Can’t Get Out of Bed",
        youtubeLink: "",
        notesLink: "",
        publishedOrNot: false,
      },
    ],
  },

  {
    title: "Mindsets and Identity",
    description:
      "Stuck in self doubt, overthinking, or negative self talk? Rewire how you think so you become confident, clear minded, and mentally strong in tough situations.",
    contents: [
      {
        title: "Fix your Mindset - Why your own mind is blocking your success",
        youtubeLink: "https://www.youtube.com/watch?v=6tadO043E74",
        notesLink: "",
        publishedOrNot: true,
      },
      {
        title: "How to Stop Feeling Behind When Everyone Else Seems Ahead",
        youtubeLink: "",
        notesLink: "",
        publishedOrNot: false,
      },
      {
        title: "Why You Compare Yourself to Everyone - The Mindset Gap",
        youtubeLink: "",
        notesLink: "",
        publishedOrNot: false,
      },
      {
        title:
          "How to Stop Feeling Behind When Everyone Else Seems Ahead - The Mindset Gap",
        youtubeLink: "",
        notesLink: "",
        publishedOrNot: false,
      },
      {
        title: 'Why you feel lost even when you\'re doing everything "right"',
        youtubeLink: "",
        notesLink: "",
        publishedOrNot: false,
      },
      {
        title: "Confident alone, Shy in public — Your Believe-System is broken",
        youtubeLink: "",
        notesLink: "",
        publishedOrNot: false,
      },
      {
        title:
          "Growth Mindset is Dead: Here's the 3-Step System to Prove You Can Learn Anything",
        youtubeLink: "",
        notesLink: "",
        publishedOrNot: false,
      },
      {
        title: "Fix the toxic Mindset - If it's not perfect, It's a failure",
        youtubeLink: "",
        notesLink: "",
        publishedOrNot: false,
      },
      {
        title:
          "Why you feel you're improving internally but nothing changes externally",
        youtubeLink: "",
        notesLink: "",
        publishedOrNot: false,
      },
      {
        title:
          "The Mindset Switch: Turn Your Worries About Money into Ideas for Making More",
        youtubeLink: "",
        notesLink: "",
        publishedOrNot: false,
      },
    ],
  },

  {
    title: "Relationship Challenges",
    description:
      "Tired of being ignored, misunderstood, or hurt in friendships and relationships? Understand emotions better so you become calm, mature, and secure in your connections.",
    contents: [
      {
        title:
          "(Note - This video is available in Hindi) Breakup left you feeling like nobody — rebuild yourself from scratch",
        youtubeLink: "https://www.youtube.com/watch?v=N7-bed4N-BI",
        notesLink: "",
        publishedOrNot: true,
      },
      {
        title: "Can't stop stalking your ex? Break the overthinking cycle fast",
        youtubeLink: "",
        notesLink: "",
        publishedOrNot: false,
      },
      {
        title: "Why you keep missing them after they hurt you",
        youtubeLink: "",
        notesLink: "",
        publishedOrNot: false,
      },
      {
        title: "Parents love you but don't get you — bridge the gap",
        youtubeLink: "",
        notesLink: "",
        publishedOrNot: false,
      },
      {
        title: "Jealousy Eating You Up? How To Calm Your Overthinking Mind",
        youtubeLink: "",
        notesLink: "",
        publishedOrNot: false,
      },
      {
        title: "Keep replaying the breakup? Here's how to quit it",
        youtubeLink: "",
        notesLink: "",
        publishedOrNot: false,
      },
      {
        title:
          "Need their approval to feel fine — validate yourself instead now",
        youtubeLink: "",
        notesLink: "",
        publishedOrNot: false,
      },
      {
        title: "Love Distracting Your Career? Get Back Focus In 7 Days",
        youtubeLink: "",
        notesLink: "",
        publishedOrNot: false,
      },
      {
        title: "Loneliness is a toxic Habit - Break it now",
        youtubeLink: "",
        notesLink: "",
        publishedOrNot: false,
      },
      {
        title: "Jealousy Eating You Up? How To Calm Your Overthinking Mind",
        youtubeLink: "",
        notesLink: "",
        publishedOrNot: false,
      },
    ],
  },

  {
    title: "Addiction and Behavioral Loops",
    description:
      "Feel trapped in scrolling, comparison, or other addictive habits? Discover why it happens and how to break the loop so you become free, focused, and self controlled.",
    contents: [
      {
        title: "Your Brain is Tired - Here's How to Reset It Completely",
        youtubeLink: "https://www.youtube.com/watch?v=V6ZGAlFjPsE&t",
        notesLink: "",
        publishedOrNot: true,
      },
      {
        title: "Gaming Until 4 AM: Breaking the One More Game Trap",
        youtubeLink: "",
        notesLink: "",
        publishedOrNot: false,
      },
      {
        title: "Addicted to smoking – watch this before your next cigarette",
        youtubeLink: "",
        notesLink: "",
        publishedOrNot: false,
      },
      {
        title:
          "One episode turns into an entire night – Insert disruption points so binge mode cannot activate",
        youtubeLink: "",
        notesLink: "",
        publishedOrNot: false,
      },
      {
        title:
          "Watching reels during meals – Add a sensory anchor that kills the urge instantly",
        youtubeLink: "",
        notesLink: "",
        publishedOrNot: false,
      },
      {
        title: "Break the Porn Cycle: What Actually Worked for Me",
        youtubeLink: "",
        notesLink: "",
        publishedOrNot: false,
      },
      {
        title:
          "Checking likes every hour - Detach identity using the validation replacement habit",
        youtubeLink: "",
        notesLink: "",
        publishedOrNot: false,
      },
      {
        title: "How I Fixed My Sleep After Destroying It Completely",
        youtubeLink: "",
        notesLink: "",
        publishedOrNot: false,
      },
      {
        title: "The Overthinking Spiral – How to Stop Replaying Everything",
        youtubeLink: "",
        notesLink: "",
        publishedOrNot: false,
      },
      {
        title:
          "Checking likes every hour – Detach identity using the validation replacement habit",
        youtubeLink: "",
        notesLink: "",
        publishedOrNot: false,
      },
    ],
  },

  {
    title: "Career and Future Paths",
    description:
      "Confused about what to choose and scared of making the wrong career decision? Gain clarity and direction so you become confident about your path and future growth.",
    contents: [
      {
        title:
          "How to build powerful network on linkedin- Attract opportunities",
        youtubeLink: "",
        notesLink: "theFounderJourney/pages/how-to-build-a-powerful-network-on-linkedin.html",
        publishedOrNot: false,
      },
      {
        title:
          "How to talk to anyone in college even if you are introverted or scared",
        youtubeLink: "",
        notesLink: "",
        publishedOrNot: false,
      },
      {
        title:
          "College teaching feels outdated – create an industry-aligned learning track beside academics",
        youtubeLink: "",
        notesLink: "",
        publishedOrNot: false,
      },
      {
        title:
          "Too many interests, can’t pick one – apply priority framework to find the best path",
        youtubeLink: "",
        notesLink: "",
        publishedOrNot: false,
      },
      {
        title: "Why good grades don’t guarantee a good career anymore",
        youtubeLink: "",
        notesLink: "",
        publishedOrNot: false,
      },
      {
        title: "Skills vs exposure: what actually gets you opportunities",
        youtubeLink: "",
        notesLink: "",
        publishedOrNot: false,
      },
      {
        title:
          "Passion vs Study confusion – pick the hybrid path that protects both",
        youtubeLink: "",
        notesLink: "",
        publishedOrNot: false,
      },
      {
        title: "10 mistakes to avoid as 1st year student in college",
        youtubeLink: "",
        notesLink: "",
        publishedOrNot: false,
      },
      {
        title:
          "How to say no is a skill to learn and this is underrated in collage",
        youtubeLink: "",
        notesLink: "",
        publishedOrNot: false,
      },
      {
        title: "I have been preparing for exams not for life.",
        youtubeLink: "",
        notesLink: "",
        publishedOrNot: false,
      },
    ],
  },

  {
    title: "Efficiency, Focus, Productivity",
    description:
      "Always busy but still not productive? Learn practical focus systems so you become efficient, organized, and able to achieve more in less time.",
    contents: [
      {
        title: "Building a Study Environment That Forces You Into Deep Work",
        youtubeLink: "",
        notesLink: "",
        publishedOrNot: false,
      },
      {
        title:
          "Fatigue After Lunch: The Circadian Dip Strategy for Energy Recovery",
        youtubeLink: "",
        notesLink: "",
        publishedOrNot: false,
      },
      {
        title:
          "How to Handle Low Motivation Days Without Destroying Your Progress",
        youtubeLink: "",
        notesLink: "",
        publishedOrNot: false,
      },
      {
        title: "Forgetting Notes: The Active Recall Method for Exams",
        youtubeLink: "",
        notesLink: "",
        publishedOrNot: false,
      },
      {
        title:
          "Stop Rereading Notes — Use the Feynman Technique to Actually Learn",
        youtubeLink: "",
        notesLink: "",
        publishedOrNot: false,
      },
      {
        title: "How to Build Focus Stamina From 20 Minutes to 90 Minutes",
        youtubeLink: "",
        notesLink: "",
        publishedOrNot: false,
      },
      {
        title: "Building a Weekly Review Habit That Takes Only 15 Minutes",
        youtubeLink: "",
        notesLink: "",
        publishedOrNot: false,
      },
      {
        title:
          "The Pomodoro Method Is Overrated — Try This Personalized Focus Block Instead",
        youtubeLink: "",
        notesLink: "",
        publishedOrNot: false,
      },
      {
        title: "Building a Second Brain System for Students on Zero Budget",
        youtubeLink: "",
        notesLink: "",
        publishedOrNot: false,
      },
      {
        title:
          "How take break b/w study that actually improves your productivity",
        youtubeLink: "",
        notesLink: "",
        publishedOrNot: false,
      },
    ],
  },

  {
    title: "Mental Health (Student Friendly)",
    description:
      "Feeling stressed, anxious, or mentally overwhelmed? Understand your emotions in a simple way so you become calmer, stable, and better at handling pressure.",
    contents: [
      {
        title: "What to Do When You Feel Lost But Can't Explain Why",
        youtubeLink: "",
        notesLink: "",
        publishedOrNot: false,
      },
      {
        title: "Mood crash for no reason: small fixes that work",
        youtubeLink: "",
        notesLink: "",
        publishedOrNot: false,
      },
      {
        title: "Everyone else doing better? how to stop comparing",
        youtubeLink: "",
        notesLink: "",
        publishedOrNot: false,
      },
      {
        title: "Seeing everyone hang out but you: how to stay calm inside",
        youtubeLink: "",
        notesLink: "",
        publishedOrNot: false,
      },
      {
        title: "When your energy suddenly disappears: how to reset fast",
        youtubeLink: "",
        notesLink: "",
        publishedOrNot: false,
      },
      {
        title: "Bedtime Battle - Stressed at night how to handle it",
        youtubeLink: "",
        notesLink: "",
        publishedOrNot: false,
      },
      {
        title: "When You Wake Up Anxious for No Clear Reason at All",
        youtubeLink: "",
        notesLink: "",
        publishedOrNot: false,
      },
      {
        title:
          "Why Decision Fatigue Makes You Irritable and Exhausted (Daily Fixes)",
        youtubeLink: "",
        notesLink: "",
        publishedOrNot: false,
      },
      {
        title:
          "How to Stop Replaying Embarrassing Moments from Years Ago in Your Head",
        youtubeLink: "",
        notesLink: "",
        publishedOrNot: false,
      },
      {
        title:
          "Feeling Too Sensitive? Practical Ways to Manage Intense Reactions",
        youtubeLink: "",
        notesLink: "",
        publishedOrNot: false,
      },
    ],
  },

  {
    title: "Life Skills for Students",
    description:
      "Feel unprepared for real life outside exams? Learn essential life skills so you become independent, confident, and ready to handle real world situations.",
    contents: [],
  },

  {
    title: "Identity and Purpose",
    description:
      "Feeling lost or unsure about who you really are? Discover your values and direction so you become clear about your purpose and the person you want to become.",
    contents: [],
  },

  {
    title: "Real World Preparation",
    description:
      "Worried that college is not preparing you for real challenges? Learn practical knowledge and awareness so you become street smart, capable, and ready for adult life.",
    contents: [],
  },
];

const accordion = document.getElementById("accordion");

sections.forEach((section, index) => {
  const wrapper = document.createElement("div");
  wrapper.className =
    "border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden";

  const number = String(index + 1).padStart(2, "0");

  wrapper.innerHTML = `
  <div 
    class="header cursor-pointer bg-gray-100 dark:bg-gray-700 
           px-4 py-4 flex justify-between items-start gap-4
           transition-all duration-300 hover:bg-gray-200 dark:hover:bg-gray-800"
    data-index="${index}"
  >
    <div class="flex gap-4 items-start w-full">

  <!-- Number -->
  <span class="text-lg font-bold text-indigo-500 min-w-[32px]">
    ${number}
  </span>

  <!-- Right Side -->
  <div class="flex-1">

    <h3 class="font-semibold text-base md:text-lg">
      ${section.title}
    </h3>

    <p class="text-sm text-gray-500 dark:text-gray-300 mt-1">
      ${section.description}
    </p>

    <!-- Progress -->
    <div class="mt-3">
      <div class="w-full bg-gray-300 dark:bg-gray-600 h-2 rounded">
        <div class="progress-bar bg-indigo-500 h-2 rounded transition-all duration-500"
             id="progress-${section.title.replace(/\s/g, "")}"
             style="width: 0%">
        </div>
      </div>

      <p class="text-xs text-gray-500 dark:text-gray-400 mt-1"
         id="progress-text-${section.title.replace(/\s/g, "")}">
         0% Completed
      </p>
    </div>

  </div>

    </div>


    <!-- Arrow Icon -->
    <span class="arrow text-[30px] transition-transform duration-300">
      ▾
    </span>
  </div>

  <div 
    class="content max-h-0 overflow-hidden transition-all duration-500 ease-in-out
           px-4 bg-white dark:bg-gray-800"
  >
    <div class="py-4">
      ${
        section.contents.length > 0
          ? `
      <div class="overflow-x-auto rounded-lg border border-gray-200 dark:border-gray-700">
        <table class="w-full text-sm text-left">
  <thead class="bg-gray-50 dark:bg-gray-700 text-gray-600 dark:text-gray-300">
    <tr>
      <th class="px-4 py-3">Title</th>
      <th class="px-4 py-3">Status</th>
      <th class="px-4 py-3">Notes</th>
      <th class="px-4 py-3 text-center">Done</th>
    </tr>
  </thead>

  <tbody>
    ${section.contents
      .map(
        (video) => `
      <tr class="border-t border-gray-200 dark:border-gray-700
                 hover:bg-gray-50 dark:hover:bg-gray-700 transition">

        <!-- TITLE -->
        <td class="px-4 py-3">
          ${
            video.publishedOrNot
              ? `<a href="${video.youtubeLink}" target="_blank" 
                   class="text-indigo-500 hover:underline font-medium">
                   ${video.title}
                 </a>`
              : `<span class="text-gray-400">${video.title}</span>`
          }
        </td>

        <!-- STATUS -->
        <td class="px-4 py-3">
          ${
            video.publishedOrNot
              ? `<span class="px-3 py-1 text-xs rounded-full bg-green-100 text-green-600 dark:bg-green-900 dark:text-green-400 whitespace-nowrap">
                    Published
                 </span>`
              : `<span class="px-3 py-1 text-xs rounded-full whitespace-nowrap bg-yellow-100 text-yellow-600 dark:bg-yellow-900 dark:text-yellow-400">
                    Coming Soon
                </span>`
          }
        </td>

        <!-- NOTES -->
        <td class="px-4 py-3">
          ${
            video.notesLink
              ? `<a href="${video.notesLink}" target="_blank"
                   class="text-indigo-500 hover:underline whitespace-nowrap">
                    View Notes
                 </a>`
              : `<span class="text-gray-400 text-sm whitespace-nowrap">
                    No notes yet
                 </span>`
          }
        </td>

        <!-- CHECKBOX -->
        <td class="px-4 py-3 text-center">
          ${
            video.publishedOrNot
              ? `<label class="inline-flex items-center cursor-pointer">
  <input 
    type="checkbox"
    class="sr-only peer video-checkbox"
    data-section="${section.title}"
    data-title="${video.title}"
  />
  <div class="w-5 h-5 flex-shrink-0 rounded-md border-2 border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 relative transition-colors duration-300 
              peer-checked:bg-indigo-500 peer-checked:border-indigo-500">
    <svg class="absolute inset-0 m-0.5 w-3 h-3 text-white opacity-0 pointer-events-none transition-opacity duration-300 peer-checked:opacity-100" 
         fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7" />
    </svg>
  </div>
</label>
`
              : `<span class="text-gray-300">-</span>`
          }
        </td>

      </tr>
    `,
      )
      .join("")}
  </tbody>
</table>

      </div>
      `
          : `<p class="text-gray-400 text-sm">Content coming soon...</p>`
      }
    </div>
  </div>
`;

  accordion.appendChild(wrapper);
});

document.querySelectorAll(".header").forEach((header) => {
  header.addEventListener("click", function () {
    const content = this.nextElementSibling;
    const arrow = this.querySelector(".arrow");

    if (content.style.maxHeight) {
      content.style.maxHeight = null;
      arrow.style.transform = "rotate(0deg)";
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
      arrow.style.transform = "rotate(180deg)";
    }
  });
});

function getStorageKey(section, title) {
  return `progress-${section}-${title}`;
}

function initializeTracking() {
  const checkboxes = document.querySelectorAll(".video-checkbox");

  checkboxes.forEach((checkbox) => {
    const section = checkbox.dataset.section;
    const title = checkbox.dataset.title;
    const key = getStorageKey(section, title);

    // Load saved state
    if (localStorage.getItem(key) === "true") {
      checkbox.checked = true;
    }

    // Save on change
    checkbox.addEventListener("change", () => {
      localStorage.setItem(key, checkbox.checked);
      updateSectionProgress(section);
    });
  });

  updateAllProgress();
}

function updateSectionProgress(section) {
  const checkboxes = document.querySelectorAll(
    `.video-checkbox[data-section="${section}"]`,
  );

  const total = checkboxes.length;
  const completed = [...checkboxes].filter((cb) => cb.checked).length;

  const percent = total === 0 ? 0 : Math.round((completed / total) * 100);

  const safeId = section.replace(/\s/g, "");

  const bar = document.getElementById(`progress-${safeId}`);
  const text = document.getElementById(`progress-text-${safeId}`);

  if (bar) bar.style.width = percent + "%";
  if (text) text.innerText = percent + "% Completed";
}

function updateAllProgress() {
  const sections = [...document.querySelectorAll(".video-checkbox")].map(
    (cb) => cb.dataset.section,
  );

  const uniqueSections = [...new Set(sections)];

  uniqueSections.forEach((section) => {
    updateSectionProgress(section);
  });
}

initializeTracking();

const journeyItems = document.querySelectorAll(".journey-item");

const journeyObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.remove("opacity-0", "translate-y-6");
        entry.target.classList.add("opacity-100", "translate-y-0");
        entry.target.style.transition = "all 0.8s ease";
      }
    });
  },
  { threshold: 0.3 },
);

journeyItems.forEach((item) => {
  journeyObserver.observe(item);
});
