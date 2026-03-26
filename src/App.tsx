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
        scrolled || mobileOpen ? 'bg-cream backdrop-blur-xl shadow-sm' : ''
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
          <a
            href="https://aituberkit.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 hover:text-purple transition-colors duration-400 ease-[cubic-bezier(0.16,1,0.3,1)]"
          >
            デモサイト
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
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
      <div
        className={`md:hidden overflow-hidden border-t border-ink/5 bg-cream/98 backdrop-blur-xl transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          mobileOpen
            ? 'max-h-[420px] opacity-100 translate-y-0'
            : 'max-h-0 opacity-0 -translate-y-2 pointer-events-none'
        }`}
      >
        <div className="px-6 py-6 space-y-4">
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
            href="https://aituberkit.com"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileOpen(false)}
            className="flex items-center gap-1 text-[15px] font-semibold text-ink w-fit"
          >
            デモサイト
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
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
      </div>
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
              href="https://aituberkit.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 text-[15px] font-bold text-white/90 rounded-full border-2 border-white/20 hover:border-white/50 transition-all duration-300 hover:-translate-y-0.5 backdrop-blur-sm"
            >
              デモサイトを試す
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

/* ─────────────────────── Promo Video ─────────────────────── */

function PromoVideo() {
  const ref = useReveal()

  return (
    <section ref={ref} className="py-24 md:py-36 px-6 md:px-10 bg-surface">
      <div className="max-w-[900px] mx-auto">
        <div className="reveal text-center mb-10 md:mb-14">
          <p className="text-purple font-bold text-[13px] tracking-widest uppercase mb-3">
            Overview
          </p>
          <h2 className="text-[clamp(1.8rem,4vw,3.2rem)] font-black tracking-tight">
            AITuberKitとは？
          </h2>
          <p className="mt-4 text-ink-soft text-[15px] max-w-[500px] mx-auto">
            1分でわかるプロダクト紹介ムービー。
          </p>
        </div>

        <div className="reveal reveal-delay-1 relative w-full rounded-2xl overflow-hidden shadow-2xl border border-ink/5">
          <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
            <iframe
              src="https://www.youtube.com/embed/PDAb3NJ3_8E"
              title="AITuberKit プロモーション動画"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              loading="lazy"
              className="absolute inset-0 w-full h-full"
            />
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

/* ─────────────────────── Advanced Features ─────────────────────── */

const FEATURES = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
      </svg>
    ),
    label: 'RAG / 長期記憶',
    desc: '過去の会話をEmbeddingで保存・検索。文脈を踏まえた自然な応答を実現。',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
      </svg>
    ),
    label: '人感検知',
    desc: 'カメラで来場者の顔を自動検出。挨拶・お別れフレーズを自動再生。',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
      </svg>
    ),
    label: 'アイドルモード',
    desc: '会話が途絶えてもキャラクターが自動発話。定型・時間帯別・AI生成の3ソース。',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <line x1="6" y1="11" x2="10" y2="11" strokeLinecap="round" />
        <line x1="8" y1="9" x2="8" y2="13" strokeLinecap="round" />
        <circle cx="15" cy="10" r="1" fill="currentColor" />
        <circle cx="17" cy="12" r="1" fill="currentColor" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M2 15V9a4 4 0 014-4h12a4 4 0 014 4v6a4 4 0 01-4 4H6a4 4 0 01-4-4z" />
      </svg>
    ),
    label: 'ゲーム実況モード',
    desc: '画面キャプチャをAIがリアルタイム実況。YouTube配信との連携で視聴者コメントにも反応。',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
      </svg>
    ),
    label: 'APIモード',
    desc: '外部アプリからHTTP APIでキャラクターに指示。直接発言・AI生成・通常入力の3モードに対応。',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
      </svg>
    ),
    label: 'デモ端末モード',
    desc: '展示会・サイネージ向けフルスクリーン表示。パスコード保護・NGワードフィルタ・ガイダンス表示に対応。',
  },
]

function AdvancedFeatures() {
  const ref = useReveal()

  return (
    <section ref={ref} className="py-24 md:py-36 px-6 md:px-10">
      <div className="max-w-[1100px] mx-auto">
        <div className="reveal text-center mb-14 md:mb-20">
          <p className="text-purple font-bold text-[13px] tracking-widest uppercase mb-3">
            Advanced Features
          </p>
          <h2 className="text-[clamp(1.8rem,4vw,3.2rem)] font-black tracking-tight">
            さらに広がる可能性
          </h2>
          <p className="mt-4 text-ink-soft text-[15px] max-w-[520px] mx-auto">
            基本機能に加え、高度なインタラクション・運用を実現する拡張機能群。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {FEATURES.map((f, i) => (
            <div
              key={f.label}
              className={`reveal ${i > 0 ? `reveal-delay-${Math.min(i, 3)}` : ''} bg-white rounded-2xl p-6 border border-ink/5 hover:border-purple/15 transition-colors duration-300`}
            >
              <div className="w-11 h-11 rounded-xl bg-purple/8 text-purple flex items-center justify-center mb-4">
                {f.icon}
              </div>
              <h3 className="font-bold text-[16px] text-ink mb-2">{f.label}</h3>
              <p className="text-ink-soft text-[13px] md:text-[14px] leading-relaxed">
                {f.desc}
              </p>
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
    <section id="specs" ref={ref} className="py-24 md:py-36 px-6 md:px-10 bg-surface">
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
    <section ref={ref} className="py-24 md:py-36 px-6 md:px-10">
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
    <section id="setup" ref={ref} className="py-24 md:py-36 px-6 md:px-10 bg-surface">
      <div className="max-w-[760px] mx-auto">
        <div className="reveal text-center mb-14">
          <p className="text-purple font-bold text-[13px] tracking-widest uppercase mb-3">
            Getting Started
          </p>
          <h2 className="text-[clamp(1.8rem,4vw,3.2rem)] font-black tracking-tight">
            たった数ステップで起動
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

        {/* Deploy options */}
        <div className="reveal mt-12 text-center">
          <p className="text-ink-soft text-[14px] mb-5">
            本番環境へのデプロイも簡単。
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {['Vercel', 'Cloudflare Workers', 'Docker'].map((d) => (
              <span
                key={d}
                className="px-5 py-2.5 rounded-full text-[13px] font-medium bg-ink/5 text-ink border border-ink/8"
              >
                {d}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─────────────────────── Community ─────────────────────── */

function Community() {
  const ref = useReveal()

  return (
    <section ref={ref} className="py-24 md:py-36 px-6 md:px-10">
      <div className="max-w-[900px] mx-auto text-center">
        <div className="reveal mb-14 md:mb-20">
          <p className="text-purple font-bold text-[13px] tracking-widest uppercase mb-3">
            Community
          </p>
          <h2 className="text-[clamp(1.8rem,4vw,3.2rem)] font-black tracking-tight">
            成長するコミュニティ
          </h2>
          <p className="mt-4 text-ink-soft text-[15px] max-w-[500px] mx-auto">
            多くの開発者・クリエイターに支えられています。
          </p>
        </div>

        {/* Stats */}
        <div className="reveal grid grid-cols-3 gap-4 md:gap-6 mb-14 max-w-[700px] mx-auto">
          <div className="bg-white rounded-2xl p-6 border border-ink/5">
            <a
              href="https://github.com/tegnike/aituber-kit/stargazers"
              target="_blank"
              rel="noopener noreferrer"
              className="block group"
            >
              <div className="font-display font-black text-[clamp(1.8rem,4vw,2.8rem)] leading-none text-ink group-hover:text-purple transition-colors duration-300">
                900+
              </div>
              <div className="text-[12px] md:text-[13px] font-bold text-ink-soft mt-2 tracking-wide">
                GitHub Stars
              </div>
            </a>
          </div>
          <div className="bg-white rounded-2xl p-6 border border-ink/5">
            <a
              href="https://discord.gg/5rHEue52nZ"
              target="_blank"
              rel="noopener noreferrer"
              className="block group"
            >
              <div className="font-display font-black text-[clamp(1.8rem,4vw,2.8rem)] leading-none text-ink group-hover:text-[#5865F2] transition-colors duration-300">
                600+
              </div>
              <div className="text-[12px] md:text-[13px] font-bold text-ink-soft mt-2 tracking-wide">
                Discordメンバー
              </div>
            </a>
          </div>
          <div className="bg-white rounded-2xl p-6 border border-ink/5">
            <a
              href="https://github.com/tegnike/aituber-kit"
              target="_blank"
              rel="noopener noreferrer"
              className="block group"
            >
              <div className="font-display font-black text-[clamp(1.8rem,4vw,2.8rem)] leading-none text-ink group-hover:text-purple transition-colors duration-300">
                OSS
              </div>
              <div className="text-[12px] md:text-[13px] font-bold text-ink-soft mt-2 tracking-wide">
                商用ライセンスあり
              </div>
            </a>
          </div>
        </div>

        {/* CTA links */}
        <div className="reveal reveal-delay-1 flex flex-wrap justify-center gap-4">
          <a
            href="https://discord.gg/5rHEue52nZ"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 text-[14px] font-bold text-white bg-[#5865F2] rounded-full hover:bg-[#4752C4] transition-colors duration-300"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03z" />
            </svg>
            Discordに参加
          </a>
          <a
            href="https://github.com/sponsors/tegnike"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 text-[14px] font-bold text-ink rounded-full border-2 border-ink/10 hover:border-purple/30 hover:text-purple transition-all duration-300"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
            スポンサーになる
          </a>
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

        <div className="reveal reveal-delay-3 mt-10 flex flex-col sm:flex-row flex-wrap gap-4 justify-center">
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
            href="https://aituberkit.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-10 py-5 text-[16px] font-bold text-white/80 rounded-full border-2 border-white/15 hover:border-white/40 transition-all duration-300 hover:-translate-y-1"
          >
            デモサイトを試す
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

        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-[15px] font-semibold text-white/50 tracking-wide">
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
            ドキュメント
          </a>
          <a
            href="https://aituberkit.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white/80 transition-colors duration-300"
          >
            デモサイト
          </a>
          <a
            href="https://discord.gg/5rHEue52nZ"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white/80 transition-colors duration-300"
          >
            Discord
          </a>
        </div>

        <div className="text-center md:text-right">
          <a
            href="mailto:support@aituberkit.com"
            className="text-[13px] text-white/30 hover:text-white/60 transition-colors duration-300 block mb-1"
          >
            商用ライセンス・事業譲渡のご相談: support@aituberkit.com
          </a>
          <p className="text-[12px] text-white/40 mb-1">※ 本サイトの一部画像・動画には画像生成AIを使用しています</p>
          <p className="text-[14px] text-white/40">&copy; 2026 AITuberKit</p>
        </div>
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
        <PromoVideo />
        <UseCases />
        <Characters />
        <AdvancedFeatures />
        <AISpecs />
        <Languages />
        <Setup />
        <Community />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}
