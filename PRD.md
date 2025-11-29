# Planning Guide

A playful web tool that transforms any text input into absurdist Dada-style art output, embracing the spirit of randomness, nonsense, and anti-rationalism.

**Experience Qualities**:
1. **Chaotic** - The interface should feel unpredictable and delightfully nonsensical, mirroring the Dada movement's rejection of logic
2. **Playful** - Interactions should spark joy and curiosity, encouraging experimentation without fear
3. **Immediate** - Transformations happen instantly, rewarding each keystroke or button press with surprising results

**Complexity Level**: Micro Tool (single-purpose)
  - This is a focused utility that does one thing exceptionally well: transform input into Dada art. No accounts, no persistence beyond the current session, just pure creative chaos.

## Essential Features

### Text-to-Dada Transformation
- **Functionality**: Takes any text input and applies Dada-style transformations (random word order, letter substitutions, nonsense insertions, case randomization, punctuation chaos)
- **Purpose**: Embodies the Dada philosophy of chance and anti-art, making the mundane absurd
- **Trigger**: User types or pastes text into an input field
- **Progression**: User enters text → Clicks "Dadafy" button → System applies multiple random transformations → Output displays in stylized format → User can copy or regenerate
- **Success criteria**: Every transformation produces genuinely unpredictable results that feel authentically nonsensical yet somehow artful

### Multiple Transformation Styles
- **Functionality**: Offers 3-4 different Dada transformation algorithms (Cut-Up Method, Phonetic Chaos, Word Salad, Typographic Anarchy)
- **Purpose**: Provides variety and reflects different Dada techniques used by historical artists
- **Trigger**: User selects a style before or after transformation
- **Progression**: User selects transformation style → Applies style to input → Output reflects chosen aesthetic
- **Success criteria**: Each style produces distinctly different but equally chaotic results

### Instant Copy/Share
- **Functionality**: One-click copying of the generated Dada text
- **Purpose**: Allows users to easily share their creations
- **Trigger**: User clicks copy button
- **Progression**: User generates Dada text → Clicks copy icon → Toast confirms copy → User can paste anywhere
- **Success criteria**: Clipboard contains the exact Dada output text

## Edge Case Handling
- **Empty Input**: Display encouraging placeholder like "Feed me words to destroy..." and disable generation until text exists
- **Very Long Input**: Truncate gracefully at ~1000 characters with warning message "Even Dada has limits..."
- **Special Characters**: Embrace them! Let emojis, symbols, and unicode become part of the chaos
- **Numbers Only**: Transform numbers into word equivalents or mix with nonsense syllables

## Design Direction
The design should feel rebellious and avant-garde, like a digital manifestation of a 1920s Dada manifesto—sharp angles, unexpected typography, bold contrasts, and deliberate visual disruption that celebrates chaos while maintaining usability.

## Color Selection
Triadic color scheme representing the bold, confrontational energy of the Dada movement with primary colors that clash intentionally yet harmoniously.

- **Primary Color**: Deep red `oklch(0.45 0.21 25)` - Communicates rebellion, urgency, and artistic provocation
- **Secondary Colors**: 
  - Electric yellow `oklch(0.88 0.18 95)` - Energy and anti-establishment vibrancy
  - Bold cyan `oklch(0.65 0.15 220)` - Unexpected coolness against warm primaries
- **Accent Color**: Bright magenta `oklch(0.62 0.25 330)` - For CTAs and important interactive elements, demanding attention
- **Foreground/Background Pairings**:
  - Background (Cream `oklch(0.96 0.01 85)`): Dark charcoal text `oklch(0.25 0.01 25)` - Ratio 12.1:1 ✓
  - Card (White `oklch(0.99 0 0)`): Charcoal text `oklch(0.25 0.01 25)` - Ratio 14.8:1 ✓
  - Primary (Deep Red): White text `oklch(0.99 0 0)` - Ratio 7.2:1 ✓
  - Secondary (Electric Yellow): Charcoal text `oklch(0.25 0.01 25)` - Ratio 13.5:1 ✓
  - Accent (Magenta): White text `oklch(0.99 0 0)` - Ratio 5.1:1 ✓
  - Muted (Light gray `oklch(0.92 0.01 85)`): Medium gray text `oklch(0.50 0.01 25)` - Ratio 6.8:1 ✓

## Font Selection
Typography should evoke the experimental letterpress posters of the Dada movement—bold, geometric, and unapologetically mechanical with moments of deliberate disruption.

- **Typographic Hierarchy**:
  - H1 (Page Title): Space Grotesk Bold/48px/tight letter-spacing (-0.02em)/uppercase
  - H2 (Section Headers): Space Grotesk Bold/24px/normal letter-spacing
  - Body (Input/Output): Courier Prime Regular/16px/1.6 line-height - monospace for typewriter aesthetic
  - Labels: Space Grotesk Medium/14px/wide letter-spacing (0.05em)/uppercase
  - Buttons: Space Grotesk Bold/16px/wide letter-spacing (0.08em)/uppercase

## Animations
Animations should feel glitchy and unpredictable, like a malfunctioning machine—quick, jittery movements that surprise rather than soothe, reinforcing the Dada aesthetic of controlled chaos.

- **Purposeful Meaning**: Motion communicates disruption and chance; buttons might wobble slightly, text might glitch when transforming, elements could enter from unexpected angles
- **Hierarchy of Movement**: 
  - High priority: The transformation moment (glitch effect, scatter animation)
  - Medium priority: Button hover states (slight rotation or skew)
  - Low priority: Subtle background element drift

## Component Selection
- **Components**: 
  - Textarea (shadcn) for input with custom monospace styling
  - Card (shadcn) for output display with bold borders
  - Button (shadcn) with custom bold styling for "Dadafy" action
  - Select (shadcn) for transformation style picker
  - Toast (sonner) for copy confirmations with custom styling
  - Badge (shadcn) for style indicators
- **Customizations**: 
  - Custom glitch animation component for the transformation effect
  - Rotated/skewed decorative elements as visual noise
  - Custom bold borders (3-4px) on cards and inputs
- **States**: 
  - Buttons: Bold solid backgrounds, slight rotation on hover (-2deg), scale down on active (0.98)
  - Inputs: Thick borders that change color on focus, no rounded corners
  - Disabled: Reduced opacity (0.5) with "X" icon overlay
- **Icon Selection**: 
  - Phosphor icons: Shuffle for regenerate, Copy for clipboard, Lightning for transform, Sparkle for style indicators
- **Spacing**: 
  - Generous gaps (gap-6 to gap-8) to let chaos breathe
  - Padding: p-6 for cards, p-4 for inputs, px-8 py-4 for primary buttons
- **Mobile**: 
  - Single column layout on mobile with full-width elements
  - Larger touch targets (min 44px) for buttons
  - Stack input/output vertically with transform button between
  - Hide decorative elements on smallest screens to reduce clutter
