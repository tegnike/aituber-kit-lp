import { useState, useEffect } from 'react'
import { useReveal } from './useReveal'

/* ─────────────────────── Header ─────────────────────── */

function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', h, { passive: true })
    return () => window.removeEventListener('scroll', h)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        scrolled || mobileOpen ? 'bg-cream/95 backdrop-blur-xl shadow-sm' : ''
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 h-[72px] flex items-center justify-between">
        <a
          href="#"
          className={`flex items-center gap-2 transition-opacity duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] ${scrolled ? 'opacity-100' : 'md:opacity-0 md:pointer-events-none'}`}
        >
          <img
            src="/images/logo.webp"
            alt="AITuberKit"
            className="h-10 md:h-12"
          />
        </a>

        <nav
          className={`hidden md:flex items-center gap-10 text-[15px] font-semibold tracking-wide transition-colors duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] ${scrolled || mobileOpen ? 'text-ink-soft' : 'text-white/90'}`}
        >
          <a
            href="#usecases"
            className="hover:text-purple transition-colors duration-400 ease-[cubic-bezier(0.16,1,0.3,1)]"
          >
            活用シーン
          </a>
          <a
            href="#characters"
            className="hover:text-purple transition-colors duration-400 ease-[cubic-bezier(0.16,1,0.3,1)]"
          >
            対応モデル
          </a>
          <a
            href="#specs"
            className="hover:text-purple transition-colors duration-400 ease-[cubic-bezier(0.16,1,0.3,1)]"
          >
            対応サービス
          </a>
          <a
            href="#setup"
            className="hover:text-purple transition-colors duration-400 ease-[cubic-bezier(0.16,1,0.3,1)]"
          >
            セットアップ
          </a>
        </nav>

        <a
          href="https://github.com/tegnike/aituber-kit"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center gap-2 px-6 py-3 text-[15px] font-bold tracking-wide bg-ink text-white rounded-full hover:bg-purple-deep transition-colors duration-300"
        >
          <svg
            className="w-[18px] h-[18px]"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
          </svg>
          GitHub
        </a>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden w-10 h-10 flex items-center justify-center"
          aria-label="Menu"
        >
          <div className="space-y-1.5">
            <div
              className={`w-5 h-0.5 transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] ${scrolled || mobileOpen ? 'bg-ink' : 'bg-white'} ${mobileOpen ? 'rotate-45 translate-y-2' : ''}`}
            />
            <div
              className={`w-5 h-0.5 transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] ${scrolled || mobileOpen ? 'bg-ink' : 'bg-white'} ${mobileOpen ? 'opacity-0' : ''}`}
            />
            <div
              className={`w-5 h-0.5 transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] ${scrolled || mobileOpen ? 'bg-ink' : 'bg-white'} ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`}
            />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-cream/98 backdrop-blur-xl border-t border-ink/5 px-6 py-6 space-y-4">
          <a
            href="#usecases"
            onClick={() => setMobileOpen(false)}
            className="block text-[15px] font-semibold text-ink"
          >
            活用シーン
          </a>
          <a
            href="#characters"
            onClick={() => setMobileOpen(false)}
            className="block text-[15px] font-semibold text-ink"
          >
            対応モデル
          </a>
          <a
            href="#specs"
            onClick={() => setMobileOpen(false)}
            className="block text-[15px] font-semibold text-ink"
          >
            対応サービス
          </a>
          <a
            href="#setup"
            onClick={() => setMobileOpen(false)}
            className="block text-[15px] font-semibold text-ink"
          >
            セットアップ
          </a>
          <a
            href="https://github.com/tegnike/aituber-kit"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 text-[14px] font-bold bg-ink text-white rounded-full"
          >
            GitHub →
          </a>
        </div>
      )}
    </header>
  )
}

/* ─────────────────────── Hero ─────────────────────── */

function Hero() {
  const ref = useReveal()

  return (
    <section
      ref={ref}
      className="relative min-h-[100svh] flex items-end pb-16 md:pb-24 pt-[72px] overflow-hidden"
    >
      {/* Full-bleed background image */}
      <div className="absolute inset-0">
        <img
          src="/images/hero.webp"
          alt=""
          className="w-full h-full object-cover object-[70%_center]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/40 to-ink/20" />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-10 w-full">
        <div className="max-w-[780px]">
          <div className="reveal mb-6 hidden md:block">
            <img src="/images/logo.webp" alt="AITuberKit" className="h-20" />
          </div>

          <h1 className="reveal reveal-delay-1 text-[clamp(2.4rem,6vw,4.5rem)] font-black leading-[1.1] tracking-tight text-white">
            あなただけの
            <br />
            AIキャラクターを、
            <br />
            <span className="text-purple" style={{ color: '#A594FF' }}>
              すぐに。
            </span>
          </h1>

          <p className="reveal reveal-delay-2 mt-6 md:mt-8 text-[15px] md:text-[18px] leading-relaxed text-white/70 max-w-[520px]">
            16種類のAI、11種類の音声合成、3種類のキャラクターモデル。
            <br className="hidden md:block" />
            オープンソースのAIキャラクター作成ツールキット。
          </p>

          <div className="reveal reveal-delay-3 mt-8 md:mt-10 flex flex-wrap gap-4">
            <a
              href="https://github.com/tegnike/aituber-kit"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-8 py-4 bg-white text-ink text-[15px] font-bold rounded-full hover:bg-purple hover:text-white transition-all duration-300 hover:-translate-y-0.5 shadow-2xl"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              GitHubで始める
            </a>
            <a
              href="https://docs.aituberkit.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 text-[15px] font-bold text-white/90 rounded-full border-2 border-white/20 hover:border-white/50 transition-all duration-300 hover:-translate-y-0.5 backdrop-blur-sm"
            >
              ドキュメントを見る
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─────────────────────── Use Cases ─────────────────────── */

const CASES = [
  {
    img: '/images/usecase-youtube.webp',
    label: 'YouTube配信に',
    desc: 'AIキャラクターがリアルタイムでコメントに応答。ライブ配信をもっとインタラクティブに。',
  },
  {
    img: '/images/usecase-exhibition.webp',
    label: '展示会・イベントに',
    desc: '大画面でAIキャラクターが来場者を迎える。注目を集めるインタラクティブ展示。',
  },
  {
    img: '/images/usecase-cafe.webp',
    label: 'カフェのお供に',
    desc: 'タブレットひとつで気軽にAIキャラクターと会話。日常に溶け込む新しい体験。',
  },
  {
    img: '/images/usecase-greeting.webp',
    label: '自動おもてなしに',
    desc: '顔認識で来客を自動検知。AIキャラクターが自然にご挨拶してくれます。',
  },
  {
    img: '/images/usecase-presentation.webp',
    label: 'プレゼンに',
    desc: 'スライドと連動してAIキャラクターが解説。プレゼンテーションを自動化。',
  },
  {
    img: '/images/usecase-custom-character.webp',
    label: 'オリジナルキャラで',
    desc: 'VRMモデルを差し替えるだけ。自分だけのキャラクターデザインをすぐに反映。',
  },
]

function UseCases() {
  const ref = useReveal()

  return (
    <section id="usecases" ref={ref} className="py-24 md:py-36 px-6 md:px-10">
      <div className="max-w-[1400px] mx-auto">
        <div className="reveal mb-14 md:mb-20 text-center">
          <p className="text-purple font-bold text-[13px] tracking-widest uppercase mb-3">
            Use Cases
          </p>
          <h2 className="text-[clamp(1.8rem,4vw,3.2rem)] font-black tracking-tight">
            あらゆるシーンで活躍
          </h2>
          <p className="mt-4 text-ink-soft text-[15px] max-w-[500px] mx-auto">
            配信、展示会、店舗、カフェ、プレゼン——AITuberKitはどこでも使えます。
          </p>
        </div>

        {/* Clean card grid — images shown in full 16:9, text below */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {CASES.map((c, i) => (
            <div
              key={c.label}
              className={`reveal ${i > 0 ? `reveal-delay-${Math.min(i, 3)}` : ''}`}
            >
              <div className="rounded-2xl overflow-hidden bg-white border border-ink/5">
                <div className="aspect-[16/9] overflow-hidden">
                  <img
                    src={c.img}
                    alt={c.label}
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="px-6 py-5">
                  <h3 className="font-bold text-[16px] md:text-[17px] text-ink mb-1.5">
                    {c.label}
                  </h3>
                  <p className="text-ink-soft text-[13px] md:text-[14px] leading-relaxed">
                    {c.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─────────────────────── Characters ─────────────────────── */

const MODELS = [
  {
    video: '/images/character-vrm.mp4',
    poster: '/images/character-vrm.webp',
    name: 'VRM',
    sub: '3D',
    desc: '表情・リップシンク・ポーズをリアルタイムに反映。最もリッチな表現が可能です。',
  },
  {
    video: '/images/character-live2d.mp4',
    poster: '/images/character-live2d.webp',
    name: 'Live2D',
    sub: '2D',
    desc: 'なめらかな2Dアニメーションで表現豊かに。イラストの魅力をそのまま活かせます。',
  },
  {
    video: '/images/character-pngtuber.mp4',
    poster: '/images/character-pngtuber.webp',
    name: 'PNGTuber',
    sub: 'PNG',
    desc: 'PNG画像だけでVTuber化。モデル制作不要で、今すぐ始められます。',
  },
]

function Characters() {
  const ref = useReveal()

  return (
    <section
      id="characters"
      ref={ref}
      className="py-24 md:py-36 px-6 md:px-10 bg-surface"
    >
      <div className="max-w-[1400px] mx-auto">
        <div className="reveal mb-14 md:mb-20 text-center">
          <p className="text-purple font-bold text-[13px] tracking-widest uppercase mb-3">
            Character Models
          </p>
          <h2 className="text-[clamp(1.8rem,4vw,3.2rem)] font-black tracking-tight">
            選べる3つのモデル形式
          </h2>
          <p className="mt-4 text-ink-soft text-[15px] max-w-[500px] mx-auto">
            3D・2D・PNGから、目的に合わせて選べます。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {MODELS.map((m, i) => (
            <div
              key={m.name}
              className={`reveal reveal-delay-${i + 1} bg-white rounded-3xl overflow-hidden border border-ink/5`}
            >
              <div className="aspect-[16/9] overflow-hidden relative">
                <video
                  src={m.video}
                  poster={m.poster}
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="none"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-[12px] font-bold text-ink">
                    {m.sub}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl font-extrabold mb-2">
                  {m.name}
                </h3>
                <p className="text-ink-soft text-[14px] leading-relaxed">
                  {m.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─────────────────────── AI Specs ─────────────────────── */

const AI_PROVIDERS = [
  'OpenAI',
  'Anthropic',
  'Google',
  'Azure',
  'xAI',
  'Groq',
  'Cohere',
  'Mistral AI',
  'Perplexity',
  'Fireworks',
  'DeepSeek',
  'OpenRouter',
  'LM Studio',
  'Ollama',
  'Dify',
  'Custom API',
]

const TTS_ENGINES = [
  'VOICEVOX',
  'AivisSpeech',
  'Aivis Cloud API',
  'Koeiromap',
  'Google TTS',
  'Style-Bert-VITS2',
  'GSVI TTS',
  'ElevenLabs',
  'Cartesia',
  'OpenAI TTS',
  'Azure OpenAI TTS',
]

function AISpecs() {
  const ref = useReveal()

  return (
    <section id="specs" ref={ref} className="py-24 md:py-36 px-6 md:px-10">
      <div className="max-w-[1100px] mx-auto">
        <div className="reveal text-center mb-14 md:mb-20">
          <p className="text-purple font-bold text-[13px] tracking-widest uppercase mb-3">
            Integrations
          </p>
          <h2 className="text-[clamp(1.8rem,4vw,3.2rem)] font-black tracking-tight">
            豊富な連携先
          </h2>
          <p className="mt-4 text-ink-soft text-[15px]">
            好みのAIと音声エンジンを自由に組み合わせ。
          </p>
        </div>

        {/* Big numbers - card style */}
        <div className="reveal grid grid-cols-2 gap-4 md:gap-6 mb-14 max-w-[600px] mx-auto">
          <div className="bg-purple/5 rounded-3xl p-8 text-center border border-purple/10">
            <div className="font-display font-black text-[clamp(3.5rem,8vw,6rem)] leading-none text-purple">
              16
            </div>
            <div className="text-[13px] font-bold text-ink-soft mt-3 tracking-wide">
              AIプロバイダー
            </div>
          </div>
          <div className="bg-green/5 rounded-3xl p-8 text-center border border-green/10">
            <div className="font-display font-black text-[clamp(3.5rem,8vw,6rem)] leading-none text-green">
              11
            </div>
            <div className="text-[13px] font-bold text-ink-soft mt-3 tracking-wide">
              音声合成エンジン
            </div>
          </div>
        </div>

        {/* Chips — AI */}
        <div className="reveal reveal-delay-1 mb-10">
          <div className="text-[12px] font-bold text-ink-soft tracking-widest uppercase mb-4">
            AI Providers
          </div>
          <div className="flex flex-wrap gap-2">
            {AI_PROVIDERS.map((p) => (
              <span
                key={p}
                className="px-4 py-2 rounded-full text-[13px] font-medium bg-purple/5 text-purple border border-purple/8 hover:bg-purple/10 transition-colors duration-300"
              >
                {p}
              </span>
            ))}
          </div>
        </div>

        {/* Chips — TTS */}
        <div className="reveal reveal-delay-2">
          <div className="text-[12px] font-bold text-ink-soft tracking-widest uppercase mb-4">
            Voice Engines
          </div>
          <div className="flex flex-wrap gap-2">
            {TTS_ENGINES.map((e) => (
              <span
                key={e}
                className="px-4 py-2 rounded-full text-[13px] font-medium bg-green/5 text-green border border-green/8 hover:bg-green/10 transition-colors duration-300"
              >
                {e}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─────────────────────── Languages ─────────────────────── */

const ALL_LANGS = [
  '日本語',
  '英語',
  '簡体中国語',
  '繁体中国語',
  '韓国語',
  'ベトナム語',
  'フランス語',
  'スペイン語',
  'ポルトガル語',
  'ドイツ語',
  'ロシア語',
  'イタリア語',
  'アラビア語',
  'ヒンディー語',
  'ポーランド語',
  'タイ語',
]

function Languages() {
  const ref = useReveal()

  return (
    <section ref={ref} className="py-24 md:py-36 px-6 md:px-10 bg-surface">
      <div className="max-w-[800px] mx-auto text-center">
        <div className="reveal mb-12">
          <p className="text-purple font-bold text-[13px] tracking-widest uppercase mb-3">
            Languages
          </p>
          <h2 className="text-[clamp(1.8rem,4vw,3.2rem)] font-black tracking-tight">
            多言語対応
          </h2>
          <p className="mt-4 text-ink-soft text-[15px] max-w-[500px] mx-auto">
            世界中のユーザーがそのまま使えるインターフェース。
          </p>
        </div>

        <div className="reveal reveal-delay-1 flex flex-wrap justify-center gap-3">
          {ALL_LANGS.map((lang) => (
            <span
              key={lang}
              className="px-5 py-2.5 bg-white rounded-full text-[14px] font-medium text-ink border border-ink/5 shadow-sm"
            >
              {lang}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─────────────────────── Setup ─────────────────────── */

const STEPS = [
  {
    n: '01',
    cmd: 'git clone https://github.com/tegnike/aituber-kit.git',
    note: 'リポジトリをクローン',
  },
  { n: '02', cmd: 'npm install', note: '依存関係をインストール' },
  { n: '03', cmd: 'cp .env.example .env', note: '環境変数を設定' },
  { n: '04', cmd: 'npm run dev', note: '開発サーバーを起動 → localhost:3000' },
]

function Setup() {
  const ref = useReveal()

  return (
    <section id="setup" ref={ref} className="py-24 md:py-36 px-6 md:px-10">
      <div className="max-w-[760px] mx-auto">
        <div className="reveal text-center mb-14">
          <p className="text-purple font-bold text-[13px] tracking-widest uppercase mb-3">
            Getting Started
          </p>
          <h2 className="text-[clamp(1.8rem,4vw,3.2rem)] font-black tracking-tight">
            たった4ステップで起動
          </h2>
          <p className="mt-4 text-ink-soft text-[15px]">
            コマンドを数回打つだけ。すぐに始められます。
          </p>
        </div>

        <div className="terminal-card rounded-3xl overflow-hidden">
          {/* Terminal header */}
          <div className="flex items-center gap-2 px-5 py-3 border-b border-white/5">
            <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
            <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
            <div className="w-3 h-3 rounded-full bg-[#28c840]" />
            <span className="ml-3 text-[12px] text-white/30 font-mono">
              terminal
            </span>
          </div>

          {/* Terminal body */}
          <div className="p-5 md:p-6 space-y-4">
            {STEPS.map((s, i) => (
              <div key={s.n} className={`reveal reveal-delay-${i + 1}`}>
                <div className="flex items-start gap-3">
                  <span className="text-purple/60 text-[13px] font-mono flex-shrink-0 mt-0.5">
                    $
                  </span>
                  <div className="min-w-0 flex-1">
                    <code className="text-[#E2E0F0] text-[13px] md:text-[15px] font-mono block break-all">
                      {s.cmd}
                    </code>
                    <span className="text-white/25 text-[12px] font-mono mt-1 block">
                      # {s.note}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─────────────────────── CTA ─────────────────────── */

function CTA() {
  const ref = useReveal()

  return (
    <section
      ref={ref}
      className="py-28 md:py-40 px-6 md:px-10 relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-ink" />
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full bg-purple/10 blur-[120px]" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full bg-green/8 blur-[100px]" />

      <div className="relative z-10 text-center max-w-[640px] mx-auto">
        <div className="reveal">
          <img
            src="/images/logo.webp"
            alt="AITuberKit"
            className="h-16 md:h-24 w-auto mx-auto mb-10"
          />
        </div>

        <h2 className="reveal reveal-delay-1 text-[clamp(1.6rem,4vw,2.8rem)] font-black tracking-tight leading-snug text-white">
          あなたのAIキャラクターを、
          <br />
          <span className="mt-2 block">今日から。</span>
        </h2>

        <p className="reveal reveal-delay-2 mt-6 text-white/50 text-[15px]">
          オープンソースで無料。非商用利用ならそのまま始められます。
        </p>

        <div className="reveal reveal-delay-3 mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://github.com/tegnike/aituber-kit"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 px-10 py-5 bg-white text-ink text-[16px] font-bold rounded-full hover:bg-purple hover:text-white transition-all duration-300 hover:-translate-y-1 shadow-2xl"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            GitHubで始める
          </a>
          <a
            href="https://github.com/tegnike/aituber-kit/blob/main/docs/license.md"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-10 py-5 text-[16px] font-bold text-white/80 rounded-full border-2 border-white/15 hover:border-white/40 transition-all duration-300 hover:-translate-y-1"
          >
            商用ライセンスについて
          </a>
        </div>
      </div>
    </section>
  )
}

/* ─────────────────────── Footer ─────────────────────── */

function Footer() {
  return (
    <footer className="bg-ink border-t border-white/5 py-10 px-6 md:px-10">
      <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <img src="/images/logo.webp" alt="AITuberKit" className="h-10 md:h-12" />

        <div className="flex items-center gap-8 text-[15px] font-semibold text-white/50 tracking-wide">
          <a
            href="https://github.com/tegnike/aituber-kit"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white/80 transition-colors duration-300"
          >
            GitHub
          </a>
          <a
            href="https://docs.aituberkit.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white/80 transition-colors duration-300"
          >
            Docs
          </a>
          <a
            href="https://aituberkit.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white/80 transition-colors duration-300"
          >
            aituberkit.com
          </a>
        </div>

        <p className="text-[14px] text-white/40">&copy; 2026 AITuberKit</p>
      </div>
    </footer>
  )
}

/* ─────────────────────── App ─────────────────────── */

export default function App() {
  return (
    <div className="grain">
      <Header />
      <main>
        <Hero />
        <UseCases />
        <Characters />
        <AISpecs />
        <Languages />
        <Setup />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}
