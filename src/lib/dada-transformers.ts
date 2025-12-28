export type TransformStyle = 'cutup' | 'phonetic' | 'salad' | 'anarchy'

const NONSENSE = ['blorp', 'zzzzt', 'krak', 'biff', 'splat', 'whoosh', 'klunk', 'boing', 'fwip', 'grok', 'zap', 'bonk', 'thwack', 'plonk', 'glorp', 'zorp', 'blip', 'schnook', 'bwam', 'fzzz', 'tunk']
const DADA = ['DADA', 'anti', 'neo', 'quasi', 'pseudo', 'meta', 'proto', 'uber', 'non', 'post', 'pre', 'contra', 'infra', 'ultra', 'supra', 'hyper', 'para', 'trans', 'inter', 'sub']
const PREFIX = ['>>>', '***', '<<<', '~~~', '###', '+++', '---', ':::', '...', '!!!']
const MANIFESTO = [
  'DADA MEANS NOTHING', 'ANTI-ART IS ART', 'CHAOS IS ORDER', 'MEANING IS MEANINGLESS',
  'THE ABSURD IS REAL', 'REJECT ALL LOGIC', 'EMBRACE NONSENSE', 'ART IS DEAD',
  'LONG LIVE DADA', 'REASON IS THE ENEMY', 'BURN THE MUSEUMS', 'ABOLISH AESTHETICS',
  'NOTHING IS SACRED', 'SENSE MAKES NO SENSE', 'CONFUSION IS CLARITY', 'BEAUTY IS UGLY',
  'LOGIC BETRAYS TRUTH', 'RANDOMNESS REVEALS', 'WORDS MEAN VOID', 'SYSTEMS MUST FALL',
  'FRAGMENTS UNITE', 'NONSENSE SPEAKS', 'SILENCE SCREAMS', 'EMPTINESS FILLS',
  'BORDERS DISSOLVE', 'STRUCTURE CRUMBLES', 'TIME IS ILLUSION', 'CONVENTION DIES',
  'FREEDOM THROUGH CHAOS', 'REJECT PERFECTION', 'MADNESS IS METHOD', 'INCOHERENCE COHERES',
  'BABEL TOWER RISES', 'LANGUAGE EXPLODES', 'GRAMMAR IS TYRANNY', 'SYNTAX SUFFOCATES',
  'RULES ARE CHAINS', 'TASTE IS PRISON', 'TRADITION ENDS NOW'
]

function rand(arr: string[]) {
  return arr[Math.floor(Math.random() * arr.length)]
}

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

function mixCase(s: string): string {
  return s.split('').map(c => Math.random() > 0.5 ? c.toUpperCase() : c.toLowerCase()).join('')
}

function getWords(text: string): string[] {
  return text.trim().split(/\s+/).filter(w => w)
}

export function cutUpMethod(text: string): string {
  const words = getWords(text)
  if (words.length === 0) return ''
  
  const lines: string[] = []
  const numLines = 6 + Math.floor(Math.random() * 4)
  
  for (let i = 0; i < numLines; i++) {
    const w = shuffle(words)
    const count = 6 + Math.floor(Math.random() * 8)
    const line = w.slice(0, count).join(' ')
    
    if (Math.random() > 0.6) {
      lines.push(`${rand(PREFIX)} ${line}`)
    } else {
      lines.push(line)
    }
    
    if (Math.random() > 0.7) {
      lines.push(rand(NONSENSE))
    }
  }
  
  if (Math.random() > 0.8) {
    lines.splice(Math.floor(lines.length / 2), 0, `\n*** ${rand(MANIFESTO)} ***\n`)
  }
  
  return lines.join('\n')
}

export function phoneticChaos(text: string): string {
  const words = getWords(text)
  if (words.length === 0) return ''
  
  const lines: string[] = []
  const numLines = 7 + Math.floor(Math.random() * 4)
  
  for (let i = 0; i < numLines; i++) {
    const w = shuffle(words).slice(0, 6 + Math.floor(Math.random() * 8))
    
    const transformed = w.map(word => {
      let r = word.toLowerCase()
      
      if (Math.random() > 0.5) r = r.replace(/s/g, 'z')
      if (Math.random() > 0.5) r = r.replace(/c/g, 'k')
      if (Math.random() > 0.5) r = r.replace(/a/g, 'ä')
      if (Math.random() > 0.5) r = r.replace(/e/g, 'ë')
      if (Math.random() > 0.6) r = mixCase(r)
      if (Math.random() > 0.75) r = r.split('').reverse().join('')
      
      return r
    })
    
    if (Math.random() > 0.6) {
      transformed.push(rand(DADA))
    }
    if (Math.random() > 0.7) {
      transformed.push(rand(NONSENSE))
    }
    
    lines.push(transformed.join(' '))
  }
  
  return lines.join('\n')
}

export function wordSalad(text: string): string {
  const words = getWords(text)
  if (words.length === 0) return ''
  
  const lines: string[] = []
  const numLines = 8 + Math.floor(Math.random() * 4)
  
  for (let i = 0; i < numLines; i++) {
    const w = shuffle(words).slice(0, 5 + Math.floor(Math.random() * 10))
    const enhanced: string[] = []
    
    w.forEach(word => {
      enhanced.push(word)
      
      if (Math.random() > 0.5) enhanced.push(rand(DADA))
      if (Math.random() > 0.65) enhanced.push(mixCase(word.split('').reverse().join('')))
      if (Math.random() > 0.8) enhanced.push(rand(NONSENSE))
    })
    
    const cased = enhanced.map(w => {
      const r = Math.random()
      if (r > 0.7) return w.toUpperCase()
      if (r > 0.4) return mixCase(w)
      return w.toLowerCase()
    })
    
    const line = Math.random() > 0.5 ? `${rand(PREFIX)} ${cased.join(' ')}` : cased.join(' ')
    lines.push(line)
  }
  
  if (Math.random() > 0.85) {
    lines.push(`\n${rand(MANIFESTO)}`)
  }
  
  return lines.join('\n')
}

export function typographicAnarchy(text: string): string {
  const words = getWords(text)
  if (words.length === 0) return ''
  
  const PUNCT = ['!', '?', '...', '!!', '!?', '???', '*', '~', '@', '#', '^', '&']
  const lines: string[] = []
  const numLines = 7 + Math.floor(Math.random() * 5)
  
  for (let i = 0; i < numLines; i++) {
    const w = shuffle(words).slice(0, 4 + Math.floor(Math.random() * 8))
    
    const chaotic = w.map(word => {
      let r = mixCase(word)
      
      if (Math.random() > 0.5) {
        const p = rand(PUNCT)
        r = Math.random() > 0.5 ? p + r : r + p
      }
      
      if (Math.random() > 0.75) {
        r = r.split('').join('-')
      }
      
      if (Math.random() > 0.8) {
        const brackets = [['[', ']'], ['{', '}'], ['(', ')'], ['<', '>']]
        const b = brackets[Math.floor(Math.random() * brackets.length)]
        r = `${b[0]}${r}${b[1]}`
      }
      
      if (Math.random() > 0.85) {
        r = r.toUpperCase() + '!!!'
      }
      
      return r
    })
    
    const line = chaotic.join(' ')
    const prefixed = Math.random() > 0.5 ? `${rand(PREFIX)} ${line}` : line
    lines.push(prefixed)
  }
  
  if (Math.random() > 0.85) {
    lines.splice(Math.floor(lines.length / 2), 0, `\n*** ${rand(MANIFESTO)} ***\n`)
  }
  
  return lines.join('\n')
}

export function transform(text: string, style: TransformStyle): string {
  if (!text || !text.trim()) return ''
  
  switch (style) {
    case 'cutup': return cutUpMethod(text)
    case 'phonetic': return phoneticChaos(text)
    case 'salad': return wordSalad(text)
    case 'anarchy': return typographicAnarchy(text)
    default: return text
  }
}

export const transformStyles = [
  { value: 'cutup' as const, label: 'CUT-UP METHOD', desc: 'Burroughs-inspired random cuts' },
  { value: 'phonetic' as const, label: 'PHONETIC CHAOS', desc: 'Sound-based destruction' },
  { value: 'salad' as const, label: 'WORD SALAD', desc: 'Pure nonsense recombination' },
  { value: 'anarchy' as const, label: 'TYPOGRAPHIC ANARCHY', desc: 'Visual chaos unleashed' },
]
