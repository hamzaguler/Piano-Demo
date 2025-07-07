document.addEventListener("DOMContentLoaded", () => {
  const ALL_NOTES = [
    "C",
    "C#",
    "D",
    "D#",
    "E",
    "F",
    "F#",
    "G",
    "G#",
    "A",
    "A#",
    "B",
  ];

  const MODES = {
    ionian: { i: [2, 2, 1, 2, 2, 2, 1], n: "Ionian (Major)" },
    dorian: { i: [2, 1, 2, 2, 2, 1, 2], n: "Dorian" },
    phrygian: { i: [1, 2, 2, 2, 1, 2, 2], n: "Phrygian" },
    lydian: { i: [2, 2, 2, 1, 2, 2, 1], n: "Lydian" },
    mixolydian: { i: [2, 2, 1, 2, 2, 1, 2], n: "Mixolydian" },
    aeolian: { i: [2, 1, 2, 2, 1, 2, 2], n: "Aeolian (Minor)" },
    locrian: { i: [1, 2, 2, 1, 2, 2, 2], n: "Locrian" },
  };

  const INSTRUMENTS = {
    Piano: {
      acoustic_grand_piano: "Acoustic Grand Piano",
      bright_acoustic_piano: "Bright Acoustic Piano",
      electric_grand_piano: "Electric Grand Piano",
      electric_piano_1: "Electric Piano 1 (Rhodes)",
      electric_piano_2: "Electric Piano 2 (Wurlitzer)",
      harpsichord: "Harpsichord",
    },
    "Chromatic Percussion": {
      celesta: "Celesta",
      glockenspiel: "Glockenspiel",
      music_box: "Music Box",
      vibraphone: "Vibraphone",
      marimba: "Marimba",
      xylophone: "Xylophone",
      tubular_bells: "Tubular Bells",
      dulcimer: "Dulcimer",
    },
    Organ: {
      drawbar_organ: "Drawbar Organ",
      percussive_organ: "Percussive Organ",
      rock_organ: "Rock Organ",
      church_organ: "Church Organ",
      reed_organ: "Reed Organ",
      accordion: "Accordion",
      harmonica: "Harmonica",
      tango_accordion: "Tango Accordion",
    },
    Guitar: {
      acoustic_guitar_nylon: "Acoustic Guitar (Nylon)",
      acoustic_guitar_steel: "Acoustic Guitar (Steel)",
      electric_guitar_jazz: "Electric Guitar (Jazz)",
      electric_guitar_clean: "Electric Guitar (Clean)",
      electric_guitar_muted: "Muted Electric Guitar",
      overdriven_guitar: "Overdriven Guitar",
      distortion_guitar: "Distortion Guitar",
      guitar_harmonics: "Guitar Harmonics",
    },
    Bass: {
      acoustic_bass: "Acoustic Bass",
      electric_bass_finger: "Electric Bass (Finger)",
      electric_bass_pick: "Electric Bass (Pick)",
      fretless_bass: "Fretless Bass",
      slap_bass_1: "Slap Bass 1",
      slap_bass_2: "Slap Bass 2",
      synth_bass_1: "Synth Bass 1",
      synth_bass_2: "Synth Bass 2",
    },
    Strings: {
      violin: "Violin",
      viola: "Viola",
      cello: "Cello",
      contrabass: "Contrabass",
      tremolo_strings: "Tremolo Strings",
      pizzicato_strings: "Pizzicato Strings",
      orchestral_harp: "Orchestral Harp",
      timpani: "Timpani",
    },
    Ensemble: {
      string_ensemble_1: "String Ensemble 1",
      string_ensemble_2: "String Ensemble 2",
      synth_strings_1: "Synth Strings 1",
      synth_strings_2: "Synth Strings 2",
      choir_aahs: "Choir Aahs",
      voice_oohs: "Voice Oohs",
      orchestra_hit: "Orchestra Hit",
    },
    Brass: {
      trumpet: "Trumpet",
      trombone: "Trombone",
      tuba: "Tuba",
      muted_trumpet: "Muted Trumpet",
      french_horn: "French Horn",
      brass_section: "Brass Section",
      synth_brass_1: "Synth Brass 1",
      synth_brass_2: "Synth Brass 2",
    },
    Reed: {
      soprano_sax: "Soprano Sax",
      alto_sax: "Alto Sax",
      tenor_sax: "Tenor Sax",
      baritone_sax: "Baritone Sax",
      oboe: "Oboe",
      english_horn: "English Horn",
      bassoon: "Bassoon",
      clarinet: "Clarinet",
    },
    Pipe: {
      piccolo: "Piccolo",
      flute: "Flute",
      recorder: "Recorder",
      pan_flute: "Pan Flute",
      blown_bottle: "Blown Bottle",
      shakuhachi: "Shakuhachi",
      whistle: "Whistle",
      ocarina: "Ocarina",
    },
    "Synth Lead": {
      lead_1_square: "Lead 1 (Square)",
      lead_2_sawtooth: "Lead 2 (Sawtooth)",
      lead_3_calliope: "Lead 3 (Calliope)",
      lead_4_chiff: "Lead 4 (Chiff)",
      lead_5_charang: "Lead 5 (Charang)",
      lead_6_voice: "Lead 6 (Voice)",
      lead_7_fifths: "Lead 7 (Fifths)",
    },
    "Synth Pad": {
      pad_1_new_age: "Pad 1 (New Age)",
      pad_2_warm: "Pad 2 (Warm)",
      pad_3_polysynth: "Pad 3 (Polysynth)",
      pad_4_choir: "Pad 4 (Choir)",
      pad_5_bowed: "Pad 5 (Bowed)",
      pad_6_metallic: "Pad 6 (Metallic)",
      pad_7_halo: "Pad 7 (Halo)",
      pad_8_sweep: "Pad 8 (Sweep)",
    },
    "Synth Effects": {
      fx_1_rain: "FX 1 (Rain)",
      fx_2_soundtrack: "FX 2 (Soundtrack)",
      fx_3_crystal: "FX 3 (Crystal)",
      fx_4_atmosphere: "FX 4 (Atmosphere)",
      fx_5_brightness: "FX 5 (Brightness)",
      fx_6_goblins: "FX 6 (Goblins)",
      fx_7_echoes: "FX 7 (Echoes)",
    },
    Ethnic: {
      sitar: "Sitar",
      banjo: "Banjo",
      shamisen: "Shamisen",
      koto: "Koto",
      kalimba: "Kalimba",
      bagpipe: "Bagpipe",
      fiddle: "Fiddle",
      shanai: "Shanai",
    },
    Percussive: {
      tinkle_bell: "Tinkle Bell",
      agogo: "Agogo",
      steel_drums: "Steel Drums",
      woodblock: "Woodblock",
      taiko_drum: "Taiko Drum",
      melodic_tom: "Melodic Tom",
      synth_drum: "Synth Drum",
      reverse_cymbal: "Reverse Cymbal",
    },
    "Sound Effects": {
      guitar_fret_noise: "Guitar Fret Noise",
      breath_noise: "Breath Noise",
      seashore: "Seashore",
      bird_tweet: "Bird Tweet",
      telephone_ring: "Telephone Ring",
      helicopter: "Helicopter",
      applause: "Applause",
      gunshot: "Gunshot",
    },
  };

  const IONIAN_QUALITIES = [
    "major",
    "minor",
    "minor",
    "major",
    "major",
    "minor",
    "diminished",
  ];

  const ROMAN_NUMERALS_BASE = [
    "VI",
    "VII",
    "I",
    "II",
    "III",
    "IV",
    "V",
    "VI",
    "VII",
    "I",
    "II",
    "III",
  ];

  const KEY_MAP_PIANO = [
    "a",
    "s",
    "d",
    "f",
    "g",
    "h",
    "j",
    "k",
    "l",
    "ş",
    "i",
    ",",
  ];

  const KEY_MAP_CHORDS = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "0",
    "*",
    "-",
  ];

  const QWERTY_WHITE_KEYS = [
    "a",
    "s",
    "d",
    "f",
    "g",
    "h",
    "j",
    "k",
    "l",
    "ş",
    "i",
    ",",
    "z",
    "x",
    "c",
    "v",
    "b",
    "n",
    "m",
    "ö",
    "ç",
    ".",
  ];

  const QWERTY_BLACK_KEYS = [
    "w",
    "e",
    "r",
    "t",
    "y",
    "u",
    "ı",
    "o",
    "p",
    "ğ",
    "ü",
  ];

  const WHITE_KEY_WIDTH = 60,
    BLACK_KEY_WIDTH = 38;

  const pianoContainer = document.getElementById("piano"),
    chordsContainer = document.getElementById("chords");
  const rootSelect = document.getElementById("root-select"),
    modeSelect = document.getElementById("mode-select"),
    pianoOctaveSelect = document.getElementById("piano-octave-select"),
    chordOctaveSelect = document.getElementById("chord-octave-select"),
    instrumentSelect = document.getElementById("instrument-select");
  const sustainSlider = document.getElementById("sustain-slider"),
    sustainValueDisplay = document.getElementById("sustain-value-display");
  const modeNameDisplay = document.getElementById("mode-name-display"),
    progressionsList = document.getElementById("progressions-list");
  const bpmSlider = document.getElementById("bpm-slider"),
    bpmValueDisplay = document.getElementById("bpm-value-display"),
    stopPlaybackBtn = document.getElementById("stop-playback-btn");
  const loopToggle = document.getElementById("loop-toggle");
  const pianoViewToggle = document.getElementById("piano-view-toggle");
  const pianoVolumeSlider = document.getElementById("piano-volume-slider"),
    pianoVolumeDisplay = document.getElementById("piano-volume-display"),
    chordVolumeSlider = document.getElementById("chord-volume-slider"),
    chordVolumeDisplay = document.getElementById("chord-volume-display");

  let audioContext, currentInstrument;
  const activeNotes = new Map(),
    activeChords = new Map();
  let isPlaying = false,
    playbackTimeoutId = null,
    currentChordMap = {};
  let keyToNoteMap = new Map();

  function shiftNotesOctave(notes, shift) {
    if (shift === 0 || !notes) return notes;
    return notes.map((note) => {
      const noteName = note.replace(/[0-9]/g, "");
      const octave = parseInt(note.slice(-1));
      return noteName + (octave + shift);
    });
  }

  function stopPlayback() {
    if (!isPlaying) return;
    isPlaying = false;
    clearTimeout(playbackTimeoutId);
    playbackTimeoutId = null;
    document
      .querySelectorAll(".progression-item.playing")
      .forEach((el) => el.classList.remove("playing"));
    document.querySelectorAll(".progression-item button").forEach((btn) => {
      btn.disabled = false;
      btn.textContent = "Play";
    });
    document
      .querySelectorAll(".chord-button.active")
      .forEach((el) => el.classList.remove("active"));
    stopPlaybackBtn.disabled = true;
  }

  function playbackSingleChord(notes, numeral) {
    if (!currentInstrument || !notes || !notes.length) return;
    const releaseTime = parseFloat(sustainSlider.value);
    const gain = parseFloat(chordVolumeSlider.value);
    notes.forEach((note) => {
      currentInstrument.play(note, audioContext.currentTime, {
        release: releaseTime,
        gain: gain,
      });
    });

    const chordButton = document.querySelector(
      `.chord-button[data-numeral="${numeral}"]`
    );
    if (chordButton) {
      chordButton.classList.add("active");
      setTimeout(() => {
        if (isPlaying) chordButton.classList.remove("active");
      }, 200);
    }
  }

  function playProgression(variant, playButton, shouldLoop) {
    if (isPlaying) {
      stopPlayback();
      return;
    }
    const { sequence, hits, octaveShifts } = variant;
    const chords = sequence.split(" ");
    if (
      chords.length !== hits.length ||
      chords.length !== octaveShifts.length
    ) {
      console.error("Data mismatch!");
      return;
    }

    let measureIndex = 0;
    isPlaying = true;
    stopPlaybackBtn.disabled = false;
    playButton.disabled = true;
    playButton.textContent = "Playing...";

    const parentItem = playButton.closest(".progression-item");
    document
      .querySelectorAll(".progression-item.playing")
      .forEach((el) => el.classList.remove("playing"));
    if (parentItem) parentItem.classList.add("playing");

    function playNextMeasure() {
      if (measureIndex >= chords.length) {
        if (shouldLoop && isPlaying) {
          measureIndex = 0;
        } else {
          stopPlayback();
          return;
        }
      }

      const numeral = chords[measureIndex],
        numHits = hits[measureIndex],
        octaveShift = octaveShifts[measureIndex];
      const baseNotes = currentChordMap[numeral];
      const finalNotes = shiftNotesOctave(baseNotes, octaveShift);
      const msPerMeasure = (60 / bpmSlider.value) * 1000,
        msBetweenHits = msPerMeasure / numHits;
      let hitCount = 0;

      function performHit() {
        if (hitCount >= numHits || !isPlaying) {
          measureIndex++;
          playbackTimeoutId = setTimeout(playNextMeasure, 0);
          return;
        }
        if (finalNotes) playbackSingleChord(finalNotes, numeral);
        hitCount++;
        playbackTimeoutId = setTimeout(performHit, msBetweenHits);
      }
      performHit();
    }
    playNextMeasure();
  }

  function updateTheoryPanel(availableNumerals) {
    stopPlayback();
    modeNameDisplay.textContent = MODES[modeSelect.value].n;
    progressionsList.innerHTML = "";
    const modeProgressions = PROGRESSIONS[modeSelect.value] || {};
    let contentFound = false;

    for (const category in modeProgressions) {
      const progressions = modeProgressions[category];
      let categoryHasContent = false;
      const categoryFragment = document.createDocumentFragment();

      progressions.forEach((prog) => {
        const playableVariants = prog.variants.filter((v) =>
          v.sequence.split(" ").every((c) => availableNumerals.includes(c))
        );
        if (playableVariants.length > 0) {
          if (!categoryHasContent) {
            const titleEl = document.createElement("h4");
            titleEl.className = "category-title";
            titleEl.textContent =
              category.charAt(0).toUpperCase() +
              category.slice(1).replace(/_/g, " ");
            categoryFragment.appendChild(titleEl);
            categoryHasContent = true;
            contentFound = true;
          }
          const item = document.createElement("div");
          item.className = "progression-item";

          const bpmHTML = prog.bpm
            ? `<span class="prog-bpm" title="Set BPM to ${prog.bpm}">${prog.bpm}bpm</span>`
            : "";
          item.innerHTML = `
                    <h5>${prog.name} ${bpmHTML}</h5>
                    <p class="prog-feel">${prog.feel}</p>
                    <div class="playback-ui">
                        <select></select>
                        <button>Play</button>
                    </div>`;

          const selectEl = item.querySelector("select");
          const playBtn = item.querySelector("button");
          const bpmEl = item.querySelector(".prog-bpm");

          if (bpmEl) {
            bpmEl.addEventListener("click", () => {
              bpmSlider.value = prog.bpm;
              bpmValueDisplay.textContent = prog.bpm;
            });
          }

          playableVariants.forEach((variant, index) => {
            selectEl.options[selectEl.options.length] = new Option(
              `${variant.label} (${variant.sequence})`,
              index
            );
          });
          playBtn.addEventListener("click", () => {
            if (playableVariants.length > 0) {
              const selectedVariant = playableVariants[selectEl.value];
              playProgression(selectedVariant, playBtn, loopToggle.checked);
            }
          });
          categoryFragment.appendChild(item);
        }
      });
      progressionsList.appendChild(categoryFragment);
    }
    if (!contentFound)
      progressionsList.innerHTML =
        "<div class='progression-item'>No common progressions found for this mode.</div>";
  }

  function createChordsUI(chordScaleNotes) {
    chordsContainer.innerHTML = "";
    const mode = modeSelect.value,
      modeIndex = Object.keys(MODES).indexOf(mode);
    currentChordMap = {};
    for (let i = 0; i < 12; i++) {
      const rootOfChord = chordScaleNotes[i];
      if (!rootOfChord) continue;
      const qualityDegree = (i + 5 + modeIndex) % 7,
        quality = IONIAN_QUALITIES[qualityDegree];
      const chordNotes = getChordNotes(rootOfChord, quality);
      let baseNumeral = ROMAN_NUMERALS_BASE[i],
        finalNumeral;
      if (quality === "minor") finalNumeral = baseNumeral.toLowerCase();
      else if (quality === "diminished")
        finalNumeral = baseNumeral.toLowerCase() + "°";
      else finalNumeral = baseNumeral;
      currentChordMap[finalNumeral] = chordNotes;
      const button = document.createElement("div");
      button.className = "chord-button";
      button.dataset.key = KEY_MAP_CHORDS[i];
      button.dataset.chordNotes = JSON.stringify(chordNotes);
      button.dataset.numeral = finalNumeral;
      if (i === 2 || i === 9) {
        button.style.borderColor = "#E74C3C";
        button.style.borderWidth = "4px";
        button.style.borderStyle = "solid";
      }
      button.innerHTML = `<div class="chord-degree">${finalNumeral}</div><div class="chord-name">${rootOfChord.replace(
        /[0-9]/g,
        ""
      )}${quality === "minor" ? "m" : quality === "diminished" ? "°" : ""} (${
        KEY_MAP_CHORDS[i]
      })</div>`;
      button.addEventListener("mousedown", () =>
        playChord(KEY_MAP_CHORDS[i], chordNotes)
      );
      button.addEventListener("mouseup", () => stopChord(KEY_MAP_CHORDS[i]));
      button.addEventListener("mouseleave", () => stopChord(KEY_MAP_CHORDS[i]));
      chordsContainer.appendChild(button);
    }
  }

  function updateUI() {
    stopPlayback();
    const rootNote = rootSelect.value,
      mode = modeSelect.value,
      pianoOctave = parseInt(pianoOctaveSelect.value, 10); 

    const modeNotes = getExtendedScale(rootNote, mode, pianoOctave);

    if (pianoViewToggle.checked) {
      const chromaticNotes = getChromaticScale(rootNote, pianoOctave, 24);
      createPianoUI(chromaticNotes, modeNotes);
    } else {
      const midiNumbers = modeNotes.map(noteToMidi);
      const minMidi = Math.min(...midiNumbers);
      const maxMidi = Math.max(...midiNumbers);
      const notesToDraw = [];
      for (let midi = minMidi; midi <= maxMidi; midi++) {
        notesToDraw.push(midiToNote(midi));
      }
      createPianoUI(notesToDraw, modeNotes);
    }

    updateChords(); 
    const availableNumerals = getAvailableNumerals(mode);
    updateTheoryPanel(availableNumerals);
  }

  function setupEventListeners() {
    const handlePianoSettingsChange = (e) => {
      updateUI();
      if (e.target.tagName === "SELECT") e.target.blur();
    };

    sustainSlider.addEventListener(
      "input",
      () =>
        (sustainValueDisplay.textContent = `${parseFloat(
          sustainSlider.value
        ).toFixed(1)}s`)
    );

    pianoVolumeSlider.addEventListener("input", () => {
      pianoVolumeDisplay.textContent = parseFloat(
        pianoVolumeSlider.value
      ).toFixed(1);
    });
    chordVolumeSlider.addEventListener("input", () => {
      chordVolumeDisplay.textContent = parseFloat(
        chordVolumeSlider.value
      ).toFixed(1);
    });
    bpmSlider.addEventListener(
      "input",
      () => (bpmValueDisplay.textContent = bpmSlider.value)
    );
    stopPlaybackBtn.addEventListener("click", stopPlayback);
    instrumentSelect.addEventListener("change", handleInstrumentChange);

    rootSelect.addEventListener("change", handlePianoSettingsChange);
    modeSelect.addEventListener("change", handlePianoSettingsChange);

    pianoOctaveSelect.addEventListener("change", handlePianoSettingsChange);
    pianoViewToggle.addEventListener("change", updateUI);

    chordOctaveSelect.addEventListener("change", () => {
      updateChords();
      chordOctaveSelect.blur();
    });

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);
  }

  function playNote(note) {
    if (!currentInstrument || activeNotes.has(note)) return;
    const releaseTime = parseFloat(sustainSlider.value);
    const gain = parseFloat(pianoVolumeSlider.value);
    const notePlayer = currentInstrument.play(note, audioContext.currentTime, {
      release: releaseTime,
      gain: gain, 
    });
    activeNotes.set(note, notePlayer);
    const keyElement = document.querySelector(`[data-full-note="${note}"]`);
    if (keyElement) keyElement.classList.add("active");
  }

  function playChord(key, notes) {
    if (!currentInstrument || activeChords.has(key)) return;
    const releaseTime = parseFloat(sustainSlider.value);
    const gain = parseFloat(chordVolumeSlider.value); 
    const players = notes.map((note) =>
      currentInstrument.play(note, audioContext.currentTime, {
        release: releaseTime,
        gain: gain, 
      })
    );
    activeChords.set(key, players);
    const button = document.querySelector(`.chord-button[data-key="${key}"]`);
    if (button) button.classList.add("active");
  }

  function stopNote(note) {
    if (activeNotes.has(note)) {
      activeNotes.get(note).stop();
      activeNotes.delete(note);
    }
    const keyElement = document.querySelector(`[data-full-note="${note}"]`);
    if (keyElement) keyElement.classList.remove("active");
  }

  function stopChord(key) {
    const players = activeChords.get(key);
    if (players && Array.isArray(players)) {
      players.forEach((player) => player.stop());
      activeChords.delete(key);
    }
    const button = document.querySelector(`.chord-button[data-key="${key}"]`);
    if (button) button.classList.remove("active");
  }

  function updateChords() {
    const rootNote = rootSelect.value;
    const mode = modeSelect.value;
    const chordOctave = parseInt(chordOctaveSelect.value, 10);

    const chordScaleNotes = getExtendedScale(rootNote, mode, chordOctave);
    createChordsUI(chordScaleNotes);
  }

  function handleKeyDown(event) {
    if (event.repeat) return;
    const key = event.key.toLowerCase();

    if (keyToNoteMap.has(key)) {
      playNote(keyToNoteMap.get(key));
      return;
    }

    const chordKeyIndex = KEY_MAP_CHORDS.indexOf(key);
    if (chordKeyIndex !== -1) {
      const button = document.querySelector(`.chord-button[data-key="${key}"]`);
      if (button && button.dataset.chordNotes) {
        const notes = JSON.parse(button.dataset.chordNotes);
        playChord(key, notes);
      }
    }
  }

  function handleKeyUp(event) {
    const key = event.key.toLowerCase();

    if (keyToNoteMap.has(key)) {
      stopNote(keyToNoteMap.get(key));
      return;
    }

    const chordKeyIndex = KEY_MAP_CHORDS.indexOf(key);
    if (chordKeyIndex !== -1) {
      stopChord(key);
    }
  }

  function populateInstruments() {
    for (const groupName in INSTRUMENTS) {
      const optgroup = document.createElement("optgroup");
      optgroup.label = groupName;
      const instruments = INSTRUMENTS[groupName];
      for (const instrumentId in instruments) {
        const option = document.createElement("option");
        option.value = instrumentId;
        option.textContent = instruments[instrumentId];
        optgroup.appendChild(option);
      }
      instrumentSelect.appendChild(optgroup);
    }
  }

  async function handleInstrumentChange(event) {
    const instrumentId = event.target.value;
    instrumentSelect.disabled = true;
    try {
      currentInstrument = await Soundfont.instrument(
        audioContext,
        instrumentId
      );
    } catch (error) {
      console.error("Enstrüman yüklenemedi:", error);
      alert(`Enstrüman (${instrumentId}) yüklenirken bir hata oluştu.`);
      instrumentSelect.value = "acoustic_grand_piano";
      currentInstrument = await Soundfont.instrument(
        audioContext,
        "acoustic_grand_piano"
      );
    } finally {
      instrumentSelect.disabled = false;
    }
  }

  async function initializeApp() {
    try {
      audioContext = new (window.AudioContext || window.webkitAudioContext)();

      populateInstruments();

      const initialInstrumentId = instrumentSelect.value;
      currentInstrument = await Soundfont.instrument(
        audioContext,
        initialInstrumentId
      );

      setupEventListeners();

      updateUI();
    } catch (error) {
      console.error("Uygulama başlatılamadı:", error);
      alert(
        "Piyano sesleri yüklenirken bir hata oluştu. Lütfen sayfayı yenileyin."
      );
    }
  }

  function getAvailableNumerals(mode) {
    const modeIndex = Object.keys(MODES).indexOf(mode);
    const available = [];
    for (let i = 0; i < 12; i++) {
      const qualityDegree = (i + 5 + modeIndex) % 7;
      const quality = IONIAN_QUALITIES[qualityDegree];
      let baseNumeral = ROMAN_NUMERALS_BASE[i];
      let finalNumeral;
      if (quality === "minor") {
        finalNumeral = baseNumeral.toLowerCase();
      } else if (quality === "diminished") {
        finalNumeral = baseNumeral.toLowerCase() + "°";
      } else {
        finalNumeral = baseNumeral;
      }
      available.push(finalNumeral);
    }
    return available;
  }

  function getExtendedScale(rootNote, mode, startOctave) {
    const scale = [];
    const modeIntervals = MODES[mode].i;
    let currentNote = rootNote + startOctave;
    const descendingIntervals = [...modeIntervals].reverse();
    let precedingNote1 = getNoteFromSemitoneOffset(
      currentNote,
      -descendingIntervals[0]
    );
    let precedingNote2 = getNoteFromSemitoneOffset(
      precedingNote1,
      -descendingIntervals[1]
    );
    scale.push(precedingNote2, precedingNote1);
    scale.push(currentNote);
    let tempNote = currentNote;
    for (let i = 0; i < 7; i++) {
      tempNote = getNoteFromSemitoneOffset(tempNote, modeIntervals[i]);
      scale.push(tempNote);
    }
    let succeedingNote1 = getNoteFromSemitoneOffset(tempNote, modeIntervals[0]);
    let succeedingNote2 = getNoteFromSemitoneOffset(
      succeedingNote1,
      modeIntervals[1]
    );
    scale.push(succeedingNote1, succeedingNote2);
    return scale.slice(0, 12);
  }

  function createPianoUI(notesToDraw, enabledNotes) {
    pianoContainer.innerHTML = "";
    keyToNoteMap.clear();

    if (notesToDraw.length === 0) return;

    let whiteKeyIndex = 0;
    let blackKeyIndex = 0;
    let whiteKeyCount = 0;

    const isChromatic = pianoViewToggle.checked;

    notesToDraw.forEach((fullNote) => {
      const noteName = fullNote.replace(/[0-9]/g, "");
      const isBlack = noteName.includes("#");
      const keyElement = document.createElement("div");
      keyElement.className = `key ${isBlack ? "black" : "white"}`;
      keyElement.dataset.fullNote = fullNote;

      let keyChar = "";
      const isInScale = enabledNotes.includes(fullNote);

      if (isChromatic) {
        if (isBlack) {
          keyChar = QWERTY_BLACK_KEYS[blackKeyIndex++];
        } else {
          keyChar = QWERTY_WHITE_KEYS[whiteKeyIndex++];
        }
      } else {
        if (isInScale) {
          const keyIndexInScale = enabledNotes.indexOf(fullNote);
          if (keyIndexInScale !== -1) {
            keyChar = KEY_MAP_PIANO[keyIndexInScale];
          }
        }
      }

      if (keyChar) {
        keyToNoteMap.set(keyChar, fullNote);
      }

      const isPlayable = isChromatic || isInScale;
      if (isInScale) {
        keyElement.classList.add("in-scale");
      } else {
        keyElement.classList.add("disabled");
      }

      const labelHTML = `<span class="key-label">${noteName}<br><span class="key-char">${
        keyChar || ""
      }</span></span>`;
      keyElement.innerHTML = labelHTML;

      const rootIndexInScale = enabledNotes.indexOf(fullNote);
      if (rootIndexInScale === 2 || rootIndexInScale === 9) {
        keyElement.querySelector(".key-label").classList.add("is-root");
        keyElement.style.borderColor = "#E74C3C";
        keyElement.style.borderWidth = "4px";
      }

      if (isPlayable) {
        keyElement.addEventListener("mousedown", (e) =>
          playNote(e.currentTarget.dataset.fullNote)
        );
        keyElement.addEventListener("mouseup", (e) =>
          stopNote(e.currentTarget.dataset.fullNote)
        );
        keyElement.addEventListener("mouseleave", (e) =>
          stopNote(e.currentTarget.dataset.fullNote)
        );
      }

      pianoContainer.appendChild(keyElement);

      if (isBlack) {
        keyElement.style.left = `${
          whiteKeyCount * WHITE_KEY_WIDTH - BLACK_KEY_WIDTH / 2
        }px`;
      } else {
        whiteKeyCount++;
      }
    });
  }

  function noteToMidi(note) {
    const noteName = note.replace(/[0-9]/g, "");
    const octave = parseInt(note.slice(-1));
    const noteIndex = ALL_NOTES.indexOf(noteName);
    return (octave + 1) * 12 + noteIndex;
  }

  function midiToNote(midi) {
    const octave = Math.floor(midi / 12) - 1;
    const noteIndex = midi % 12;
    return ALL_NOTES[noteIndex] + octave;
  }

  function getNoteFromSemitoneOffset(startNote, offset) {
    const startMidi = noteToMidi(startNote);
    return midiToNote(startMidi + offset);
  }

  function getChromaticScale(rootNote, startOctave, numKeys) {
    const scale = [];
    const rootNoteWithOctave = rootNote + startOctave;
    const actualStartNote = getNoteFromSemitoneOffset(rootNoteWithOctave, -2);
    for (let i = 0; i < numKeys; i++) {
      scale.push(getNoteFromSemitoneOffset(actualStartNote, i));
    }
    return scale;
  }

  function getChordNotes(root, quality) {
    if (!root) return [];
    switch (quality) {
      case "major":
        return [
          root,
          getNoteFromSemitoneOffset(root, 4),
          getNoteFromSemitoneOffset(root, 7),
        ];
      case "minor":
        return [
          root,
          getNoteFromSemitoneOffset(root, 3),
          getNoteFromSemitoneOffset(root, 7),
        ];
      case "diminished":
        return [
          root,
          getNoteFromSemitoneOffset(root, 3),
          getNoteFromSemitoneOffset(root, 6),
        ];
      default:
        return [];
    }
  }

  initializeApp();
});
