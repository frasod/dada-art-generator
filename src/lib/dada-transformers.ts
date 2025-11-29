export type TransformStyle = 'cutup' | 'phonetic' | 'salad' | 'anarchy';

const nonsenseSyllables = [
  'blorp', 'zzzzt', 'krak', 'biff', 'splat', 'whoosh', 'klunk', 
  'boing', 'fwip', 'grok', 'zap', 'bonk', 'thwack', 'plonk',
  'glorp', 'zorp', 'blip', 'schnook', 'bwam', 'fzzz', 'tunk'
];

const dadaWords = [
  'DADA', 'anti', 'neo', 'quasi', 'pseudo', 'meta', 'proto', 
  'uber', 'non', 'post', 'pre', 'contra', 'infra', 'ultra',
  'supra', 'hyper', 'para', 'trans', 'inter', 'sub'
];

const dadaPrefixes = [
  '>>>', '***', '<<<', '~~~', '###', '+++', '---', ':::', '...', '!!!'
];

const manifestoPhrases = [
  'DADA MEANS NOTHING',
  'DESTROY TO CREATE',
  'ANTI-ART IS ART',
  'CHAOS IS ORDER',
  'MEANING IS MEANINGLESS',
  'THE ABSURD IS REAL',
  'REJECT ALL LOGIC',
  'EMBRACE NONSENSE',
  'ART IS DEAD',
  'LONG LIVE DADA',
  'REASON IS THE ENEMY',
  'BURN THE MUSEUMS',
  'ABOLISH AESTHETICS',
  'NOTHING IS SACRED',
  'SENSE MAKES NO SENSE',
  'CONFUSION IS CLARITY',
  'BEAUTY IS UGLY',
  'LOGIC BETRAYS TRUTH',
  'RANDOMNESS REVEALS',
  'WORDS MEAN VOID',
  'SYSTEMS MUST FALL',
  'FRAGMENTS UNITE',
  'NONSENSE SPEAKS',
  'SILENCE SCREAMS',
  'EMPTINESS FILLS',
  'BORDERS DISSOLVE',
  'STRUCTURE CRUMBLES',
  'TIME IS ILLUSION',
  'CONVENTION DIES',
  'FREEDOM THROUGH CHAOS',
  'REJECT PERFECTION',
  'MADNESS IS METHOD',
  'INCOHERENCE COHERES',
  'BABEL TOWER RISES',
  'LANGUAGE EXPLODES',
  'GRAMMAR IS TYRANNY',
  'SYNTAX SUFFOCATES',
  'RULES ARE CHAINS',
  'TASTE IS PRISON',
  'TRADITION ENDS NOW'
];

function shuffleArray<T>(array: T[]): T[] {
  const result = [...array];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

function randomCase(str: string): string {
  return str.split('').map(char => 
    Math.random() > 0.5 ? char.toUpperCase() : char.toLowerCase()
  ).join('');
}

function insertRandomNonsense(words: string[]): string[] {
  const result: string[] = [];
  words.forEach((word, i) => {
    result.push(word);
    if (Math.random() > 0.7 && i < words.length - 1) {
      result.push(nonsenseSyllables[Math.floor(Math.random() * nonsenseSyllables.length)]);
    }
  });
  return result;
}

export function cutUpMethod(text: string): string {
  if (!text.trim()) return '';
  
  const words = text.trim().split(/\s+/);
  const lines: string[] = [];
  
  for (let lineNum = 0; lineNum < 4 + Math.floor(Math.random() * 3); lineNum++) {
    const shuffled = shuffleArray(words);
    const withNonsense = insertRandomNonsense(shuffled);
    
    const lineLength = Math.min(8 + Math.floor(Math.random() * 8), withNonsense.length);
    const selectedWords = withNonsense.slice(0, lineLength);
    
    const chunkSize = Math.floor(Math.random() * 3) + 2;
    const chunks: string[] = [];
    for (let i = 0; i < selectedWords.length; i += chunkSize) {
      chunks.push(selectedWords.slice(i, i + chunkSize).join(' '));
    }
    
    const prefix = dadaPrefixes[Math.floor(Math.random() * dadaPrefixes.length)];
    const line = `${prefix} ${shuffleArray(chunks).join(' / ')}`;
    lines.push(line);
  }
  
  if (Math.random() > 0.75) {
    const manifesto = manifestoPhrases[Math.floor(Math.random() * manifestoPhrases.length)];
    lines.splice(Math.floor(Math.random() * lines.length), 0, `\n*** ${manifesto} ***\n`);
  }
  
  return lines.join('\n');
}

export function phoneticChaos(text: string): string {
  if (!text.trim()) return '';
  
  const substitutions: Record<string, string> = {
    'a': 'ä', 'e': 'ë', 'i': 'ï', 'o': 'ö', 'u': 'ü',
    's': 'z', 'c': 'k', 'ph': 'f', 'tion': 'shun',
    'the': 'ze', 'ing': 'ink', 'ch': 'tch', 'x': 'cks'
  };
  
  const words = text.trim().split(/\s+/);
  const lines: string[] = [];
  
  for (let lineNum = 0; lineNum < 5 + Math.floor(Math.random() * 3); lineNum++) {
    let lineWords = shuffleArray(words).slice(0, 6 + Math.floor(Math.random() * 6));
    
    lineWords = lineWords.map(word => {
      let result = word.toLowerCase();
      
      Object.entries(substitutions).forEach(([from, to]) => {
        if (Math.random() > 0.4) {
          result = result.replace(new RegExp(from, 'g'), to);
        }
      });
      
      if (Math.random() > 0.6) {
        result = randomCase(result);
      }
      
      if (Math.random() > 0.8) {
        result = result.split('').reverse().join('');
      }
      
      return result;
    });
    
    const withNonsense = insertRandomNonsense(lineWords);
    
    if (Math.random() > 0.7) {
      const dadaWord = dadaWords[Math.floor(Math.random() * dadaWords.length)];
      withNonsense.splice(Math.floor(Math.random() * withNonsense.length), 0, dadaWord);
    }
    
    lines.push(withNonsense.join(' '));
  }
  
  return lines.join('\n');
}

export function wordSalad(text: string): string {
  if (!text.trim()) return '';
  
  const words = text.trim().split(/\s+/);
  const lines: string[] = [];
  
  for (let lineNum = 0; lineNum < 6 + Math.floor(Math.random() * 3); lineNum++) {
    const shuffled = shuffleArray(words);
    const lineWords = shuffled.slice(0, 5 + Math.floor(Math.random() * 8));
    
    const enhanced = lineWords.flatMap((word, i) => {
      const result = [word];
      
      if (Math.random() > 0.5) {
        result.push(dadaWords[Math.floor(Math.random() * dadaWords.length)]);
      }
      
      if (Math.random() > 0.7) {
        result.push(randomCase(word.split('').reverse().join('')));
      }
      
      if (Math.random() > 0.85) {
        result.push(nonsenseSyllables[Math.floor(Math.random() * nonsenseSyllables.length)]);
      }
      
      return result;
    });
    
    const cased = enhanced.map(w => {
      const rand = Math.random();
      if (rand > 0.7) {
        return w.toUpperCase();
      } else if (rand > 0.4) {
        return randomCase(w);
      }
      return w.toLowerCase();
    });
    
    const prefix = Math.random() > 0.6 
      ? dadaPrefixes[Math.floor(Math.random() * dadaPrefixes.length)] + ' '
      : '';
    
    lines.push(prefix + cased.join(' '));
  }
  
  if (Math.random() > 0.8) {
    const manifesto = manifestoPhrases[Math.floor(Math.random() * manifestoPhrases.length)];
    lines.push(`\n${manifesto}`);
  }
  
  return lines.join('\n');
}

export function typographicAnarchy(text: string): string {
  if (!text.trim()) return '';
  
  const words = text.split(/\s+/);
  const punctuation = ['!', '?', '...', '!!', '!?', '???', '*', '~', '@', '#', '^', '&'];
  const lines: string[] = [];
  
  for (let lineNum = 0; lineNum < 5 + Math.floor(Math.random() * 4); lineNum++) {
    const shuffled = shuffleArray(words);
    const lineWords = shuffled.slice(0, 4 + Math.floor(Math.random() * 6));
    
    const chaotic = lineWords.map(word => {
      let result = randomCase(word);
      
      if (Math.random() > 0.6) {
        const punct = punctuation[Math.floor(Math.random() * punctuation.length)];
        result = Math.random() > 0.5 ? punct + result : result + punct;
      }
      
      if (Math.random() > 0.8) {
        result = result.split('').join('-');
      }
      
      if (Math.random() > 0.85) {
        const brackets = [['[', ']'], ['{', '}'], ['(', ')'], ['<', '>']];
        const bracket = brackets[Math.floor(Math.random() * brackets.length)];
        result = `${bracket[0]}${result}${bracket[1]}`;
      }
      
      if (Math.random() > 0.9) {
        result = result.toUpperCase() + '!!!';
      }
      
      return result;
    });
    
    let line = chaotic.join(' ');
    
    const lineChars = line.split('');
    const final = lineChars.map(char => {
      if (char === ' ' && Math.random() > 0.8) {
        return ' / ';
      }
      return char;
    }).join('');
    
    const prefix = Math.random() > 0.5
      ? dadaPrefixes[Math.floor(Math.random() * dadaPrefixes.length)] + ' '
      : '';
    
    lines.push(prefix + final);
  }
  
  if (Math.random() > 0.75) {
    const manifesto = manifestoPhrases[Math.floor(Math.random() * manifestoPhrases.length)];
    lines.splice(Math.floor(lines.length / 2), 0, `\n*** ${manifesto} ***\n`);
  }
  
  return lines.join('\n');
}

export function transform(text: string, style: TransformStyle): string {
  switch (style) {
    case 'cutup':
      return cutUpMethod(text);
    case 'phonetic':
      return phoneticChaos(text);
    case 'salad':
      return wordSalad(text);
    case 'anarchy':
      return typographicAnarchy(text);
    default:
      return text;
  }
}

export const transformStyles = [
  { value: 'cutup' as TransformStyle, label: 'CUT-UP METHOD', desc: 'Burroughs-inspired random cuts' },
  { value: 'phonetic' as TransformStyle, label: 'PHONETIC CHAOS', desc: 'Sound-based destruction' },
  { value: 'salad' as TransformStyle, label: 'WORD SALAD', desc: 'Pure nonsense recombination' },
  { value: 'anarchy' as TransformStyle, label: 'TYPOGRAPHIC ANARCHY', desc: 'Visual chaos unleashed' },
];
