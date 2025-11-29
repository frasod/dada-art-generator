export type TransformStyle = 'cutup' | 'phonetic' | 'salad' | 'anarchy';

const nonsenseSyllables = [
  'blorp', 'zzzzt', 'krak', 'biff', 'splat', 'whoosh', 'klunk', 
  'boing', 'fwip', 'grok', 'zap', 'bonk', 'thwack', 'plonk'
];

const dadaWords = [
  'DADA', 'anti', 'neo', 'quasi', 'pseudo', 'meta', 'proto', 
  'uber', 'non', 'post', 'pre', 'contra', 'infra'
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
  const shuffled = shuffleArray(words);
  const withNonsense = insertRandomNonsense(shuffled);
  
  const chunkSize = Math.floor(Math.random() * 4) + 3;
  const chunks: string[] = [];
  for (let i = 0; i < withNonsense.length; i += chunkSize) {
    chunks.push(withNonsense.slice(i, i + chunkSize).join(' '));
  }
  
  return shuffleArray(chunks).join(' / ');
}

export function phoneticChaos(text: string): string {
  if (!text.trim()) return '';
  
  const substitutions: Record<string, string> = {
    'a': 'ä', 'e': 'ë', 'i': 'ï', 'o': 'ö', 'u': 'ü',
    's': 'z', 'c': 'k', 'ph': 'f', 'tion': 'shun',
    'the': 'ze', 'ing': 'ink', 'ch': 'tch'
  };
  
  let result = text.toLowerCase();
  
  Object.entries(substitutions).forEach(([from, to]) => {
    if (Math.random() > 0.3) {
      result = result.replace(new RegExp(from, 'g'), to);
    }
  });
  
  const words = result.split(/\s+/);
  const transformed = words.map(word => {
    if (Math.random() > 0.7) {
      return randomCase(word);
    }
    return word;
  });
  
  const withDada = insertRandomNonsense(transformed);
  return withDada.join(' ').replace(/\s+/g, ' ');
}

export function wordSalad(text: string): string {
  if (!text.trim()) return '';
  
  const words = text.trim().split(/\s+/);
  const shuffled = shuffleArray(words);
  
  const enhanced = shuffled.flatMap((word, i) => {
    const result = [word];
    
    if (Math.random() > 0.6) {
      result.push(dadaWords[Math.floor(Math.random() * dadaWords.length)]);
    }
    
    if (Math.random() > 0.8 && i < shuffled.length - 1) {
      result.push(randomCase(word.split('').reverse().join('')));
    }
    
    return result;
  });
  
  return enhanced.map(w => {
    if (Math.random() > 0.5) {
      return w.toUpperCase();
    }
    return w.toLowerCase();
  }).join(' ');
}

export function typographicAnarchy(text: string): string {
  if (!text.trim()) return '';
  
  const words = text.split(/\s+/);
  const punctuation = ['!', '?', '...', '!!', '!?', '???', '*', '~', '@', '#'];
  
  const chaotic = words.map(word => {
    let result = randomCase(word);
    
    if (Math.random() > 0.7) {
      const punct = punctuation[Math.floor(Math.random() * punctuation.length)];
      result = Math.random() > 0.5 ? punct + result : result + punct;
    }
    
    if (Math.random() > 0.85) {
      result = result.split('').join('-');
    }
    
    if (Math.random() > 0.9) {
      result = `[${result}]`;
    }
    
    return result;
  });
  
  const withBreaks = chaotic.join(' ').split('');
  const final = withBreaks.map(char => {
    if (char === ' ' && Math.random() > 0.85) {
      return ' / ';
    }
    return char;
  }).join('');
  
  return final;
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
