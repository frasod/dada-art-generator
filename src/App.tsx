import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { Card } from '@/components/ui/card'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Badge } from '@/components/ui/badge'
import { Shuffle, Copy, Lightning, Sparkle } from '@phosphor-icons/react'
import { toast, Toaster } from 'sonner'
import { transform, transformStyles, type TransformStyle } from '@/lib/dada-transformers'

function App() {
  const [input, setInput] = useState('')
  const [output, setOutput] = useState('')
  const [style, setStyle] = useState<TransformStyle>('cutup')
  const [isGlitching, setIsGlitching] = useState(false)

  const handleTransform = () => {
    if (!input.trim()) {
      toast.error('Feed me words to destroy...')
      return
    }

    if (input.length > 1000) {
      toast.error('Even Dada has limits...')
      return
    }

    setIsGlitching(true)
    setTimeout(() => {
      try {
        const result = transform(input, style)
        if (result && result.trim()) {
          setOutput(result)
        } else {
          setOutput('DADA VOID')
        }
      } catch (error) {
        console.error('Transform error:', error)
        toast.error('Chaos malfunction!')
        setOutput('')
      } finally {
        setIsGlitching(false)
      }
    }, 300)
  }

  const handleCopy = async () => {
    if (!output) return
    
    try {
      await navigator.clipboard.writeText(output)
      toast.success('COPIED TO CHAOS!')
    } catch {
      toast.error('Copy failed')
    }
  }

  const handleRegenerate = () => {
    if (!input.trim()) return
    handleTransform()
  }

  const selectedStyle = transformStyles.find(s => s.value === style)

  return (
    <div className="min-h-screen bg-background p-4 md:p-8">
      <Toaster position="bottom-center" />
      
      <div className="max-w-5xl mx-auto space-y-8">
        <header className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight uppercase">
            DADA GENERATOR
          </h1>
          <p className="text-base md:text-lg text-muted-foreground uppercase tracking-widest">
            Embrace the absurd • Destroy meaning • Create chaos
          </p>
        </header>

        <div className="grid md:grid-cols-2 gap-6">
          <Card className="p-6 space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold uppercase tracking-wider">INPUT</h2>
              <Badge variant="secondary" className="uppercase tracking-wider">
                {input.length}/1000
              </Badge>
            </div>
            <Textarea
              id="dada-input"
              placeholder="Feed me words to destroy..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="min-h-[200px] font-mono text-base resize-none p-4"
            />
            <div className="space-y-3">
              <label className="text-sm font-medium uppercase tracking-widest block">
                Transformation Style
              </label>
              <Select value={style} onValueChange={(value) => setStyle(value as TransformStyle)}>
                <SelectTrigger className="font-bold uppercase tracking-wider">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {transformStyles.map((s) => (
                    <SelectItem key={s.value} value={s.value} className="font-bold uppercase">
                      <div className="flex items-center gap-2">
                        <Sparkle weight="fill" className="text-accent" />
                        <div>
                          <div>{s.label}</div>
                          <div className="text-xs text-muted-foreground normal-case">{s.desc}</div>
                        </div>
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </Card>

          <Card className="p-6 space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold uppercase tracking-wider">OUTPUT</h2>
              {selectedStyle && (
                <Badge className="uppercase tracking-wider">
                  {selectedStyle.label}
                </Badge>
              )}
            </div>
            <div 
              className={`min-h-[200px] max-h-[400px] p-4 bg-muted font-mono text-base break-words overflow-y-auto ${isGlitching ? 'glitch' : ''}`}
            >
              {output ? (
                <pre className="whitespace-pre-wrap font-mono leading-relaxed p-4">{output}</pre>
              ) : (
                <span className="text-muted-foreground italic p-4">
                  awaiting transformation...
                </span>
              )}
            </div>
            <div className="flex gap-3">
              <Button
                onClick={handleCopy}
                disabled={!output}
                variant="outline"
                className="hover:bg-secondary hover:text-secondary-foreground transition-all"
              >
                <Copy className="mr-2" />
                COPY
              </Button>
              <Button
                onClick={handleRegenerate}
                disabled={!input.trim()}
                variant="outline"
                className="hover:bg-accent hover:text-accent-foreground transition-all"
              >
                <Shuffle className="mr-2" />
                REGENERATE
              </Button>
            </div>
          </Card>
        </div>

        <div className="flex justify-center">
          <Button
            onClick={handleTransform}
            disabled={!input.trim() || isGlitching}
            size="lg"
            className="px-8 py-6 text-xl font-bold uppercase tracking-widest hover:scale-105 active:scale-95"
          >
            <Lightning weight="fill" className="mr-3" size={24} />
            {isGlitching ? 'TRANSFORMING...' : 'DADAFY'}
            <Lightning weight="fill" className="ml-3" size={24} />
          </Button>
        </div>

        <footer className="text-center pt-8 border-t border-foreground">
          <p className="text-sm uppercase tracking-widest text-muted-foreground">
            "Art is dead. Long live Dada!" — 1916
          </p>
        </footer>
      </div>
    </div>
  )
}

export default App
