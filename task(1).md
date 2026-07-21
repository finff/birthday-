# Birthday Website Development Tasks

## Project Goal

Build a beautiful, interactive, mobile-friendly birthday website for my girlfriend.

Birthday date: **27 July 2003**

Main style:

- Baby blue
- Soft lavender
- Blush pink
- White
- Small gold accents
- Romantic
- Cute
- Modern
- Interactive

---

# Phase 1: Project Setup

- [ ] Create the main project folder
- [ ] Create `index.html`
- [ ] Create `css/style.css`
- [ ] Create `js/main.js`
- [ ] Create `js/animations.js`
- [ ] Create `js/game.js`
- [ ] Create `js/countdown.js`
- [ ] Create `assets/images/`
- [ ] Create `assets/music/`
- [ ] Create `assets/icons/`
- [ ] Link CSS file to `index.html`
- [ ] Link JavaScript files to `index.html`
- [ ] Test that the website opens without errors

Suggested folder structure:

```text
birthday-website/
│
├── index.html
├── task.md
├── README.md
│
├── css/
│   └── style.css
│
├── js/
│   ├── main.js
│   ├── animations.js
│   ├── game.js
│   └── countdown.js
│
└── assets/
    ├── images/
    ├── music/
    └── icons/
```

---

# Phase 2: Design System

- [ ] Add baby blue as the main colour
- [ ] Add lavender as a secondary colour
- [ ] Add blush pink for romantic highlights
- [ ] Add white for clean sections
- [ ] Add navy blue for readable text
- [ ] Add small gold accents
- [ ] Create reusable colour variables in CSS
- [ ] Choose heading font
- [ ] Choose body font
- [ ] Add soft shadows
- [ ] Add rounded corners
- [ ] Add smooth button hover effects
- [ ] Add responsive spacing
- [ ] Add a soft gradient background

Suggested colours:

```css
:root {
  --baby-blue: #BDE0FE;
  --lavender: #CDB4DB;
  --blush-pink: #FFC8DD;
  --soft-white: #FFF9FB;
  --navy-blue: #2D3A5A;
  --light-gold: #F6D58A;
}
```

---

# Phase 3: Opening Screen

- [ ] Create a full-screen opening section
- [ ] Add her name or nickname
- [ ] Add a short introduction message
- [ ] Add an animated gift box
- [ ] Add an “Open Your Birthday Surprise” button
- [ ] Add floating hearts
- [ ] Add floating stars
- [ ] Add a soft background animation
- [ ] Add confetti when the gift opens
- [ ] Reveal the main website after the button is clicked
- [ ] Start background music only after user interaction
- [ ] Add a loading transition before showing the main content

Suggested text:

```text
A little surprise was made especially for you.
```

Suggested button:

```text
Open Your Birthday Surprise
```

---

# Phase 4: Birthday Countdown

- [ ] Add countdown to 27 July
- [ ] Display days
- [ ] Display hours
- [ ] Display minutes
- [ ] Display seconds
- [ ] Update the countdown every second
- [ ] Change the text when the birthday arrives
- [ ] Show a birthday celebration message after the countdown ends
- [ ] Test different dates manually

Birthday message:

```text
Happy Birthday, My Love! 🎂
```

---

# Phase 5: Hero Section

- [ ] Add a large favourite photo
- [ ] Add an animated photo frame
- [ ] Add a main birthday heading
- [ ] Add a short romantic message
- [ ] Add a “Start Your Birthday Adventure” button
- [ ] Add floating sparkles
- [ ] Add a heart animation
- [ ] Add smooth scrolling to the next section

Suggested heading:

```text
Happy Birthday to My Favourite Person 💙
```

---

# Phase 6: Photo Gallery

- [ ] Select favourite photos
- [ ] Rename photos clearly
- [ ] Optimise image sizes
- [ ] Add photo cards
- [ ] Add captions
- [ ] Add memory dates
- [ ] Add hover zoom
- [ ] Add fade-in animation
- [ ] Add polaroid-style rotation
- [ ] Add click-to-enlarge modal
- [ ] Add previous and next image controls
- [ ] Add a close button for enlarged images
- [ ] Ensure images work on mobile
- [ ] Add alt text to all photos

Photo placeholders:

```text
Memory 1:
Photo:
Date:
Caption:

Memory 2:
Photo:
Date:
Caption:

Memory 3:
Photo:
Date:
Caption:
```

---

# Phase 7: Things I Love About You

- [ ] Create six interactive cards
- [ ] Add a title to each card
- [ ] Hide the detailed message initially
- [ ] Reveal the message when clicked
- [ ] Add a flip-card animation
- [ ] Add a small icon to every card
- [ ] Add mobile tap support
- [ ] Add keyboard support

Suggested card titles:

- [ ] Your Smile
- [ ] Your Kind Heart
- [ ] Your Laugh
- [ ] Your Strength
- [ ] The Way You Care
- [ ] The Happiness You Bring Me

---

# Phase 8: Mini-Game – Catch My Love

- [ ] Create a game section
- [ ] Add game instructions
- [ ] Add a start button
- [ ] Create a game timer
- [ ] Create a score counter
- [ ] Make hearts appear randomly
- [ ] Make hearts disappear after a short time
- [ ] Add one point for normal hearts
- [ ] Add three points for golden hearts
- [ ] Reduce points for broken hearts
- [ ] Make the game last 20 to 30 seconds
- [ ] Add touch support for mobile
- [ ] Prevent hearts from appearing outside the game area
- [ ] Add sound effects
- [ ] Show a result message
- [ ] Save the high score during the current session
- [ ] Add confetti after the game
- [ ] Reveal a hidden reward
- [ ] Add a replay button

Game title:

```text
Catch My Love
```

Reward button:

```text
Claim Your Birthday Reward
```

---

# Phase 9: Optional Memory Matching Game

- [ ] Create a card-matching board
- [ ] Add pairs of images or icons
- [ ] Shuffle cards randomly
- [ ] Allow two cards to be flipped
- [ ] Check whether the cards match
- [ ] Lock matched cards
- [ ] Count the number of moves
- [ ] Add a timer
- [ ] Show a completion message
- [ ] Add a restart button
- [ ] Add mobile support

Completion message:

```text
You matched every memory, just like how perfectly you match with me.
```

---

# Phase 10: Birthday Letter

- [ ] Create a digital envelope
- [ ] Add an envelope-opening animation
- [ ] Add a letter sliding animation
- [ ] Add sparkles
- [ ] Add the complete birthday letter
- [ ] Add a close button
- [ ] Add a replay animation option
- [ ] Ensure the letter is readable on mobile
- [ ] Add proper spacing for long text

Personal details to replace:

- [ ] Her name
- [ ] Her nickname
- [ ] Your name
- [ ] Personal memories
- [ ] Personal promises
- [ ] Personal wishes

---

# Phase 11: Typing Messages

- [ ] Create a typing animation section
- [ ] Add multiple romantic messages
- [ ] Display one message at a time
- [ ] Add a blinking cursor
- [ ] Add a pause between messages
- [ ] Loop the messages smoothly
- [ ] Add Malay messages
- [ ] Add English messages
- [ ] Add reduced-motion support

---

# Phase 12: Birthday Cake Interaction

- [ ] Create a birthday cake illustration
- [ ] Add candles
- [ ] Add animated flames
- [ ] Add a “Make a Wish” button
- [ ] Add a “Blow the Candles” button
- [ ] Hide candle flames after clicking
- [ ] Add confetti
- [ ] Add fireworks
- [ ] Reveal a special birthday message
- [ ] Add a small sound effect
- [ ] Add replay support

Suggested message:

```text
I hope every wish you make today finds its way to you. 🎂
```

---

# Phase 13: Relationship Timeline

- [ ] Create a vertical timeline
- [ ] Add important relationship dates
- [ ] Add memory titles
- [ ] Add short descriptions
- [ ] Add photos where suitable
- [ ] Add scroll reveal animation
- [ ] Add alternating left and right layout on desktop
- [ ] Use a single-column layout on mobile

Timeline details to add:

- [ ] The day we first met
- [ ] Our first conversation
- [ ] Our first photo
- [ ] Our first date
- [ ] A special memory
- [ ] Her birthday celebration

---

# Phase 14: Music Controls

- [ ] Add background music
- [ ] Add play button
- [ ] Add pause button
- [ ] Add mute button
- [ ] Add volume control
- [ ] Show the song title
- [ ] Do not autoplay before interaction
- [ ] Keep the controls visible but unobtrusive
- [ ] Test on mobile browsers
- [ ] Add fallback text if audio cannot play

Music placeholder:

```text
assets/music/our-song.mp3
```

---

# Phase 15: Hidden Easter Eggs

- [ ] Add a hidden clickable star
- [ ] Add a secret heart
- [ ] Add a hidden photo interaction
- [ ] Add a secret message after five photo clicks
- [ ] Add a hidden date input
- [ ] Add a blue butterfly animation
- [ ] Add one hidden memory
- [ ] Add one inside joke
- [ ] Add a reward animation

Suggested secret message:

```text
You found a hidden message! Loving you is filled with beautiful moments waiting to be discovered.
```

---

# Phase 16: Final Surprise

- [ ] Create a final section
- [ ] Add a “One Last Surprise” button
- [ ] Darken the background when clicked
- [ ] Add a starry animation
- [ ] Add a large animated heart
- [ ] Add a final romantic message
- [ ] Add fireworks
- [ ] Add confetti
- [ ] Add an “I Love You” button
- [ ] Reveal the last message after clicking

Final message:

```text
Out of all the people in the world, I am grateful that life allowed me to meet you.

Happy Birthday, my love. You will always have a special place in my heart. 💙
```

---

# Phase 17: Animations

- [ ] Add scroll reveal animations
- [ ] Add fade-in effects
- [ ] Add slide-up effects
- [ ] Add floating hearts
- [ ] Add moving clouds
- [ ] Add sparkles
- [ ] Add heartbeat effect
- [ ] Add button ripple effects
- [ ] Add photo hover animation
- [ ] Add envelope animation
- [ ] Add gift animation
- [ ] Add cake animation
- [ ] Add fireworks
- [ ] Add confetti
- [ ] Add reduced-motion mode
- [ ] Optimise animations for mobile

---

# Phase 18: Responsive Design

- [ ] Test at 320px width
- [ ] Test on Android phone
- [ ] Test on iPhone
- [ ] Test on tablet
- [ ] Test on laptop
- [ ] Test on desktop
- [ ] Resize headings for small screens
- [ ] Resize images automatically
- [ ] Stack cards vertically on mobile
- [ ] Make buttons easy to tap
- [ ] Remove horizontal scrolling
- [ ] Ensure the mini-game supports touch
- [ ] Reduce animation intensity on smaller devices

---

# Phase 19: Accessibility

- [ ] Add alt text to all images
- [ ] Add labels to buttons
- [ ] Ensure text contrast is readable
- [ ] Add keyboard navigation
- [ ] Add visible focus states
- [ ] Add music mute control
- [ ] Add reduced-motion support
- [ ] Use semantic HTML
- [ ] Add ARIA labels where needed
- [ ] Ensure popups can be closed with Escape
- [ ] Test with keyboard only

---

# Phase 20: Content Personalisation

- [ ] Add her full name
- [ ] Add her nickname
- [ ] Add your name
- [ ] Add relationship anniversary
- [ ] Add favourite photos
- [ ] Add favourite song
- [ ] Add favourite flower
- [ ] Add favourite colour
- [ ] Add personal memories
- [ ] Add important dates
- [ ] Add inside jokes
- [ ] Add a personal birthday letter
- [ ] Add a final personal message
- [ ] Check spelling and grammar

---

# Phase 21: Testing

- [ ] Check all buttons
- [ ] Check all links
- [ ] Check all photos
- [ ] Check all animations
- [ ] Check countdown accuracy
- [ ] Check game scoring
- [ ] Check game timer
- [ ] Check music controls
- [ ] Check image modal
- [ ] Check envelope animation
- [ ] Check cake interaction
- [ ] Check final surprise
- [ ] Check hidden Easter eggs
- [ ] Check mobile layout
- [ ] Check desktop layout
- [ ] Check browser console for errors
- [ ] Test Chrome
- [ ] Test Edge
- [ ] Test Safari
- [ ] Test Firefox

---

# Phase 22: Performance Optimisation

- [ ] Compress all images
- [ ] Use WebP images where possible
- [ ] Compress audio
- [ ] Lazy-load gallery photos
- [ ] Minimise large JavaScript files
- [ ] Remove unused CSS
- [ ] Reduce unnecessary animations
- [ ] Preload the hero image
- [ ] Add loading indicators
- [ ] Test website loading speed

---

# Phase 23: Final Review

- [ ] Confirm birthday date is correct
- [ ] Confirm all names are correct
- [ ] Confirm all photos are appropriate
- [ ] Confirm messages are personal
- [ ] Confirm music works
- [ ] Confirm the website works without login
- [ ] Confirm no placeholder text remains
- [ ] Confirm no broken links remain
- [ ] Confirm the website looks good on mobile
- [ ] Confirm the final surprise works
- [ ] Ask a trusted person to test the website
- [ ] Fix final issues

---

# Phase 24: Deployment

Choose one platform:

- [ ] GitHub Pages
- [ ] Netlify
- [ ] Vercel
- [ ] Cloudflare Pages

Deployment tasks:

- [ ] Create a Git repository
- [ ] Upload all website files
- [ ] Deploy the website
- [ ] Test the live URL
- [ ] Test the website on her phone
- [ ] Create a short custom link if needed
- [ ] Create a QR code for the website
- [ ] Prepare a backup copy
- [ ] Keep the website private until the birthday

---

# Priority List

## Must Have

- [ ] Opening surprise
- [ ] Birthday countdown
- [ ] Hero message
- [ ] Animated photo gallery
- [ ] Things I Love About You cards
- [ ] Catch My Love mini-game
- [ ] Birthday letter
- [ ] Music controls
- [ ] Birthday cake
- [ ] Final surprise
- [ ] Mobile responsiveness

## Nice to Have

- [ ] Memory matching game
- [ ] Relationship timeline
- [ ] Hidden Easter eggs
- [ ] Butterfly animation
- [ ] Cursor heart trail
- [ ] Fireworks
- [ ] QR code

---

# Suggested Development Order

1. [ ] Set up files and folders
2. [ ] Build the main page layout
3. [ ] Add colours and typography
4. [ ] Build the opening screen
5. [ ] Add the countdown
6. [ ] Build the hero section
7. [ ] Add the photo gallery
8. [ ] Add the love cards
9. [ ] Build the mini-game
10. [ ] Add the birthday letter
11. [ ] Add the birthday cake
12. [ ] Add music controls
13. [ ] Add the final surprise
14. [ ] Add animations
15. [ ] Add personal content
16. [ ] Test responsiveness
17. [ ] Fix bugs
18. [ ] Deploy

---

# Personal Information Checklist

```text
Her full name:
Her nickname:
Your name:
Birthday:
Relationship anniversary:
Favourite song:
Favourite flower:
Favourite colour:
Favourite memory:
Inside joke:
Final birthday message:
```

---

# Completion Status

- [ ] Planning complete
- [ ] Design complete
- [ ] Main website complete
- [ ] Mini-game complete
- [ ] Personal content complete
- [ ] Mobile testing complete
- [ ] Final testing complete
- [ ] Deployment complete

---

# Final Goal

The completed website should make her feel loved, appreciated, surprised, and special.

It should feel like a small digital birthday adventure created especially for her.
