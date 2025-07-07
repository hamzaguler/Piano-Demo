const PROGRESSIONS = {
  ionian: {
    common_progressions: [
      {
        name: "The '50s / Pop-Punk",
        feel: "Arguably the most common chord progression in all of Western music.",
        bpm: "120",
        variants: [
          {
            label: "Standard",
            sequence: "I V vi IV",
            hits: [1, 1, 1, 1],
            octaveShifts: [0, 0, 0, 0],
          },
          {
            label: "Fast 8ths",
            sequence: "I V vi IV",
            hits: [2, 2, 2, 2],
            octaveShifts: [0, 0, 0, 0],
          },
          {
            label: "Ballad (Doo-Wop)",
            sequence: "I vi IV V",
            hits: [1, 1, 1, 1],
            octaveShifts: [0, 0, 0, 0],
          },
          {
            label: "Bass Walkdown",
            sequence: "I V vi IV",
            hits: [1, 1, 1, 1],
            octaveShifts: [0, -1, -1, -1],
          },
        ],
      },
      {
        name: "Folk / Country Standard",
        feel: "The bedrock of countless folk, country, blues, and rock songs.",
        bpm: "100",
        variants: [
          {
            label: "Three-Chord Wonder",
            sequence: "I IV V",
            hits: [1, 1, 2],
            octaveShifts: [0, 0, 0],
          },
          {
            label: "Full Loop",
            sequence: "I IV V I",
            hits: [1, 1, 1, 1],
            octaveShifts: [0, 0, 0, 0],
          },
          {
            label: "Quick Change Blues",
            sequence: "I IV I V",
            hits: [2, 1, 1, 2],
            octaveShifts: [0, 0, 0, 0],
          },
        ],
      },
      {
        name: "Modern Pop / Minor Start",
        feel: "A slightly more introspective feel, starting on the relative minor.",
        bpm: "95",
        variants: [
          {
            label: "Standard",
            sequence: "vi IV I V",
            hits: [1, 1, 1, 1],
            octaveShifts: [0, 0, 0, 0],
          },
          {
            label: "Pulsing 8ths",
            sequence: "vi IV I V",
            hits: [2, 2, 2, 2],
            octaveShifts: [-1, -1, 0, 0],
          },
        ],
      },
    ],
    jazz_and_classical: [
      {
        name: "Pachelbel's Canon",
        feel: "Elegant, flowing, and foundational in classical and pop music.",
        bpm: "80",
        variants: [
          {
            label: "Classical",
            sequence: "I V vi iii IV I IV V",
            hits: [1, 1, 1, 1, 1, 1, 1, 1],
            octaveShifts: [0, 0, 0, 0, 0, 0, 0, 0],
          },
          {
            label: "Descending Bass",
            sequence: "I V vi iii IV I ii V",
            hits: [1, 1, 1, 1, 1, 1, 1, 1],
            octaveShifts: [0, -1, -1, -1, -1, -1, -1, -1],
          },
        ],
      },
      {
        name: "The II-V-I",
        feel: "The most important chord progression in jazz.",
        bpm: "140",
        variants: [
          {
            label: "Standard",
            sequence: "ii V I",
            hits: [1, 1, 2],
            octaveShifts: [0, 0, 0],
          },
          {
            label: "Walking Bass",
            sequence: "ii V I",
            hits: [1, 1, 2],
            octaveShifts: [0, -1, -1],
          },
          {
            label: "Turnaround",
            sequence: "I vi ii V",
            hits: [1, 1, 1, 1],
            octaveShifts: [0, 0, 0, 0],
          },
        ],
      },
    ],
    cadences: [
      {
        name: "Classic Cadences",
        feel: "Standard ways to end a musical phrase.",
        bpm: "90",
        variants: [
          {
            label: "Authentic (V-I)",
            sequence: "V I",
            hits: [1, 1],
            octaveShifts: [0, 0],
          },
          {
            label: "Plagal 'Amen' (IV-I)",
            sequence: "IV I",
            hits: [1, 1],
            octaveShifts: [0, 0],
          },
          {
            label: "Deceptive (V-vi)",
            sequence: "V vi",
            hits: [1, 1],
            octaveShifts: [0, 0],
          },
        ],
      },
    ],
  },
  aeolian: {
    common_progressions: [
      {
        name: "Standard Minor",
        feel: "A classic, melancholic feel used across all genres.",
        bpm: "110",
        variants: [
          {
            label: "Standard",
            sequence: "i iv v",
            hits: [1, 1, 2],
            octaveShifts: [0, 0, 0],
          },
          {
            label: "Driving",
            sequence: "i iv v",
            hits: [2, 2, 2],
            octaveShifts: [0, 0, 0],
          },
          {
            label: "Low & Heavy",
            sequence: "i iv v",
            hits: [1, 1, 1],
            octaveShifts: [-1, -1, -1],
          },
        ],
      },
      {
        name: "Epic / Pop Minor",
        feel: "Modern, dramatic, and common in movie scores and pop.",
        bpm: "90",
        variants: [
          {
            label: "Standard",
            sequence: "i VI III VII",
            hits: [1, 1, 1, 1],
            octaveShifts: [0, 0, 0, 0],
          },
          {
            label: "Ascending Voicing",
            sequence: "i VI III VII",
            hits: [1, 1, 1, 1],
            octaveShifts: [0, 0, 1, 1],
          },
          {
            label: "Power Chord Feel",
            sequence: "i VI III VII",
            hits: [4, 4, 4, 4],
            octaveShifts: [-1, -1, -1, -1],
          },
        ],
      },
    ],
    rock_and_metal: [
      {
        name: "Hard Rock Power",
        feel: "A driving, powerful progression found in countless rock anthems.",
        bpm: "125",
        variants: [
          {
            label: "Classic",
            sequence: "i v VI IV",
            hits: [2, 2, 2, 2],
            octaveShifts: [0, 0, 0, 0],
          },
          {
            label: "Heavy Riff",
            sequence: "i v VI IV",
            hits: [8, 8, 8, 8],
            octaveShifts: [-1, -1, -1, -1],
          },
        ],
      },
    ],
    cadences: [
      {
        name: "Andalusian Cadence",
        feel: "A historic and dramatic descending progression.",
        bpm: "100",
        variants: [
          {
            label: "Standard",
            sequence: "i VII VI V",
            hits: [1, 1, 1, 1],
            octaveShifts: [0, 0, -1, -1],
          },
          {
            label: "Rhythmic",
            sequence: "i VII VI V",
            hits: [2, 1, 1, 2],
            octaveShifts: [0, 0, -1, -1],
          },
        ],
      },
      {
        name: "Minor II-V-I",
        feel: "The jazz standard cadence, but in a minor key.",
        bpm: "110",
        variants: [
          {
            label: "Jazz Voicing",
            sequence: "ii° v i",
            hits: [1, 1, 2],
            octaveShifts: [0, 0, 0],
          },
        ],
      },
    ],
  },
  dorian: {
    vamps_and_riffs: [
      {
        name: "Modal Jazz / Funk",
        feel: "The essence of Dorian's cool, groovy, and slightly melancholic sound.",
        bpm: "125",
        variants: [
          {
            label: "So What Voicing",
            sequence: "i i IV",
            hits: [2, 2, 2],
            octaveShifts: [0, 0, 1],
          },
          {
            label: "Funky Groove",
            sequence: "i IV",
            hits: [4, 4],
            octaveShifts: [0, 0],
          },
          {
            label: "Oye Como Va",
            sequence: "i IV",
            hits: [2, 2],
            octaveShifts: [0, 0],
          },
        ],
      },
      {
        name: "Dorian Rock",
        feel: "A common progression in classic rock and alternative.",
        bpm: "115",
        variants: [
          {
            label: "Standard",
            sequence: "i v iv",
            hits: [1, 1, 2],
            octaveShifts: [0, 0, 0],
          },
          {
            label: "Syncopated",
            sequence: "i v iv",
            hits: [2, 1, 1],
            octaveShifts: [0, 0, 0],
          },
        ],
      },
      {
        name: "Celtic / Folk Vamp",
        feel: "Creates a rolling, pastoral, or epic fantasy sound.",
        bpm: "105",
        variants: [
          {
            label: "Standard",
            sequence: "i VII IV",
            hits: [1, 1, 2],
            octaveShifts: [0, 0, 0],
          },
          {
            label: "Arpeggiated Feel",
            sequence: "i VII IV i",
            hits: [1, 1, 1, 1],
            octaveShifts: [0, 0, 1, 0],
          },
        ],
      },
    ],
  },
  lydian: {
    vamps_and_riffs: [
      {
        name: "Dreamy Vibe",
        feel: "Creates the bright, magical, and floating sound of Lydian.",
        bpm: "95",
        variants: [
          {
            label: "Standard",
            sequence: "I II",
            hits: [1, 1],
            octaveShifts: [0, 0],
          },
          {
            label: "Ethereal",
            sequence: "I vii",
            hits: [1, 1],
            octaveShifts: [0, 1],
          },
        ],
      },
      {
        name: "Cinematic / Uplifting",
        feel: "Often used in film scores for moments of wonder or triumph.",
        bpm: "85",
        variants: [
          {
            label: "Film Score",
            sequence: "I V II",
            hits: [1, 1, 2],
            octaveShifts: [0, 1, 1],
          },
          {
            label: "Full Resolution",
            sequence: "I II V I",
            hits: [1, 1, 1, 1],
            octaveShifts: [0, 0, 0, 0],
          },
        ],
      },
    ],
  },
  mixolydian: {
    vamps_and_riffs: [
      {
        name: "Classic Rock / Blues",
        feel: "The quintessential sound of blues-based rock, full of swagger.",
        bpm: "130",
        variants: [
          {
            label: "Standard",
            sequence: "I VII IV",
            hits: [2, 2, 4],
            octaveShifts: [0, -1, -1],
          },
          {
            label: "Blues Shuffle",
            sequence: "I IV I V",
            hits: [2, 1, 1, 2],
            octaveShifts: [0, 0, 0, 0],
          },
        ],
      },
      {
        name: "Country / Southern Rock",
        feel: "A laid-back, feel-good progression common in country and jam bands.",
        bpm: "110",
        variants: [
          {
            label: "Sweet Home",
            sequence: "I VII IV",
            hits: [2, 2, 2],
            octaveShifts: [0, 0, 0],
          },
          {
            label: "Mixolydian Turnaround",
            sequence: "I v IV I",
            hits: [1, 1, 1, 1],
            octaveShifts: [0, 0, 0, 0],
          },
        ],
      },
    ],
  },
  phrygian: {
    vamps_and_riffs: [
      {
        name: "Spanish / Metal",
        feel: "Dark, tense, and full of Spanish or heavy metal character.",
        bpm: "140",
        variants: [
          {
            label: "Flamenco Strum",
            sequence: "i II",
            hits: [3, 1],
            octaveShifts: [0, 0],
          },
          {
            label: "Metal Riff",
            sequence: "i II",
            hits: [8, 8],
            octaveShifts: [-1, -1],
          },
          {
            label: "Full Spanish Turn",
            sequence: "i VII VI V",
            hits: [1, 1, 1, 1],
            octaveShifts: [0, 0, 0, 0],
          },
        ],
      },
      {
        name: "Dark Ambience",
        feel: "Less aggressive, more atmospheric and moody.",
        bpm: "80",
        variants: [
          {
            label: "Tense Drone",
            sequence: "i iv",
            hits: [1, 1],
            octaveShifts: [-1, -1],
          },
          {
            label: "Descending Darkness",
            sequence: "i VII v",
            hits: [1, 1, 2],
            octaveShifts: [0, -1, -1],
          },
        ],
      },
    ],
  },
  locrian: {
    experimental: [
      {
        name: "Unstable Tension",
        feel: "Dissonant and unresolved, used for effect in metal or film scores.",
        bpm: "70",
        variants: [
          {
            label: "Tense Cadence",
            sequence: "iv v i°",
            hits: [1, 1, 1],
            octaveShifts: [0, 0, 0],
          },
          {
            label: "Half-Diminished Sound",
            sequence: "iv i°",
            hits: [1, 1],
            octaveShifts: [0, 0],
          },
        ],
      },
      {
        name: "Resolving to the V",
        feel: "A common trick to make Locrian 'work' is to resolve to the v chord, treating it as a temporary tonic.",
        bpm: "90",
        variants: [
          {
            label: "Locrian to Phrygian",
            sequence: "i° II III iv v",
            hits: [1, 1, 1, 1, 2],
            octaveShifts: [0, 0, 0, 0, 0],
          },
        ],
      },
    ],
  },
};
