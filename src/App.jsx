import React, { useState } from 'react';
import {
  X,
  CheckCircle2,
  ShieldAlert,
  Lock,
  ArrowLeft,
  UserCheck,
  Users,
  PhoneCall,
  HelpCircle,
} from 'lucide-react';

const BACKGROUND_IMAGE_URL = 'https://i.ibb.co/C5xx3vNf/ssdd.jpg';

const INFO_TOPICS = {
  secrecy: {
    title: 'Como funciona o sigilo',
    description:
      'Os relatos são tratados com confidencialidade pela equipe de acolhimento escolar. Você pode optar pelo envio anônimo para proteger sua identidade ao registrar a ocorrência.',
    highlights: [
      'Opção de envio anônimo disponível no formulário.',
      'Acesso restrito aos responsáveis pelo acolhimento e orientação.',
      'Foco na proteção do estudante e na resolução educativa.',
    ],
  },
  bullying: {
    title: 'O que é bullying e quando relatar',
    description:
      'Bullying envolve agressões intencionais e repetitivas — físicas, verbais, virtuais ou de exclusão — que causam sofrimento ou intimidação no ambiente escolar.',
    highlights: [
      'Apelidos ofensivos, humilhações ou ameaças recorrentes.',
      'Exposição, perseguição ou ataques em redes e mensagens.',
      'Isolamento intencional ou violência física.',
    ],
  },
  terms: {
    title: 'Termos de uso e responsabilidade',
    description:
      'Este canal existe para apoiar estudantes e fortalecer um ambiente escolar seguro. Os relatos devem ser feitos com boa-fé para que a equipe possa agir com precisão.',
    highlights: [
      'Use o canal para situações reais ou pedidos de apoio.',
      'Evite relatos falsos que prejudiquem investigações ou terceiros.',
      'Em risco imediato, procure um adulto de confiança ou emergência.',
    ],
  },
};

/**
 * Logo Oficial "VOZ ATIVA — Seduc" em SVG vetorial nítido
 */
const VozAtivaLogo = () => (
  <div className="inline-flex items-center justify-center gap-2.5 px-3.5 py-2 rounded-2xl bg-white/95 backdrop-blur-md border border-blue-100/90 shadow-[0_8px_22px_-6px_rgba(14,77,146,0.2)] select-none">
    <svg
      viewBox="0 0 120 120"
      className="w-11 h-11 sm:w-12 sm:h-12 shrink-0"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Ícone Voz Ativa Seduc"
    >
      <defs>
        <linearGradient id="vaBubbleGrad" x1="15" y1="15" x2="105" y2="105" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#0E4D92" />
          <stop offset="50%" stopColor="#1D8FE1" />
          <stop offset="100%" stopColor="#0B3B73" />
        </linearGradient>
        <linearGradient id="vaWarmCoat" x1="30" y1="45" x2="68" y2="75" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#F59E0B" />
          <stop offset="65%" stopColor="#FBBF24" />
          <stop offset="100%" stopColor="#34D399" />
        </linearGradient>
        <linearGradient id="vaBluePants" x1="25" y1="68" x2="56" y2="95" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#1D70B8" />
          <stop offset="100%" stopColor="#0E4D92" />
        </linearGradient>
      </defs>

      <circle cx="62" cy="58" r="44" fill="#EFF6FF" />

      <path
        d="M62 12C35.5 12 14 32.6 14 58C14 68.7 17.8 78.6 24.2 86.4L18.5 103.5L37.4 97.4C44.7 101.6 53.1 104 62 104C88.5 104 110 83.4 110 58C110 32.6 88.5 12 62 12Z"
        stroke="url(#vaBubbleGrad)"
        strokeWidth="6.5"
        strokeLinejoin="round"
        fill="#F0F7FF"
      />

      <ellipse cx="62" cy="91" rx="32" ry="4.5" fill="#DBEAFE" />

      <path
        d="M45 31C45 25.5 49.5 22 54.5 22.5C57.5 22.8 60 24.2 61.2 26.5C62.8 27.2 63.6 29 63 31.2C63.4 35.8 60 40.5 55 40.5C50 40.5 46.5 36.8 46.5 32.5L45 31Z"
        fill="#1D8FE1"
      />
      <path
        d="M48.5 31.5C48.5 28.5 51 26.5 54.5 26.5C58 26.5 60.2 28.8 60.2 32.2C60.2 35.8 57.6 38.6 54.4 38.6C51.2 38.6 48.5 35.6 48.5 31.5Z"
        fill="#F8FAFC"
      />

      <path d="M43 45L55 44L53 67L41 67L43 45Z" fill="#FFFFFF" />

      <path
        d="M43 44C38 45 34 50 33 58L31 67L40 68L43 53L44 68H53L54 53L69 57C71 57.5 72.5 56 72 54C71.5 52.3 69.5 51.5 67 50.8L54 45C50.5 43.5 46.5 43.3 43 44Z"
        fill="url(#vaWarmCoat)"
      />

      <path
        d="M32 67H53L55 77L45 78L47 88H55C56.8 88 58 89.2 58 91H40L38 78H31C28.5 78 27 76 27.5 73.5L32 67Z"
        fill="url(#vaBluePants)"
      />

      <path
        d="M72 47C72 42 76.5 38.5 82 39C86.5 39.4 89.5 42.5 89.8 46.5C90.6 47.8 90.4 49.8 89.2 51.2C88.5 55.2 85 58 80.8 58C76.5 58 73 54.5 73 50.2L72 47Z"
        fill="#0B3B73"
      />
      <circle cx="80.5" cy="50.8" r="5.6" fill="#F8FAFC" />

      <path
        d="M71 63C71 58.5 75.5 56 80.5 56C85.5 56 89.5 59.5 90.5 65L92 78H73L71 63Z"
        fill="#1D8FE1"
      />
      <path
        d="M74 52L72 62L77 63L77.5 53.5M86.5 52L88 62L83 63L82.5 53.5"
        stroke="#0E4D92"
        strokeWidth="2.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <path
        d="M71 75H89C91.5 75 93 77 92.5 79.5L89 91H66C64.5 91 63.5 89.8 64 88.3L68 85L71 75Z"
        fill="#0B3B73"
      />
    </svg>

    <div className="text-left leading-none">
      <div className="text-[16px] sm:text-[17px] font-black tracking-tight text-[#0B3B73]">
        VOZ ATIVA
      </div>
      <div className="text-[11px] font-bold text-[#1D70B8] tracking-wide mt-0.5 flex items-center gap-1">
        <span>Equipe Nexus</span>
        <span className="w-1 h-1 rounded-full bg-amber-500 inline-block" />
        <span className="text-[9.5px] font-semibold text-gray-500">Canal Seguro</span>
      </div>
    </div>
  </div>
);

/**
 * Modal de Denúncia Rápida Integrada à SEDUC
 */
const ReportModal = ({ reportTarget, onClose, onResetFlow }) => {
  const [submitted, setSubmitted] = useState(false);
  const [anonymous, setAnonymous] = useState(true);
  const [category, setCategory] = useState('Verbal / Apelidos');
  const [details, setDetails] = useState('');

  if (!reportTarget) return null;

  const isSelf = reportTarget === 'self';
  const categories = [
    'Verbal / Apelidos',
    'Cyberbullying',
    'Exclusão social',
    'Agressão física',
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleFinish = () => {
    setSubmitted(false);
    setDetails('');
    onClose();
    onResetFlow();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#14112B]/50 backdrop-blur-xs p-4"
      onClick={onClose}
    >
      <div
        className="w-full max-w-[380px] bg-white rounded-3xl p-5 sm:p-6 shadow-2xl border border-blue-100 relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Fechar janela"
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-600 transition-colors cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>

        {submitted ? (
          <div className="text-center py-3">
            <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-3">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <span className="inline-block px-2.5 py-0.5 rounded-full bg-blue-50 text-[#0E4D92] text-[10px] font-bold mb-1.5">
              Protocolo SEDUC #VA-2026
            </span>
            <h3 className="text-lg font-extrabold text-[#14112B]">
              Relato enviado com sigilo!
            </h3>
            <p className="text-xs text-gray-500 mt-1.5 leading-relaxed">
              {isSelf
                ? 'A equipe de acolhimento da sua escola já foi notificada para te apoiar com segurança.'
                : 'Obrigado por agir! Sua atitude ajuda a proteger seu colega e tornar a escola mais segura.'}
            </p>
            <button
              type="button"
              onClick={handleFinish}
              className="mt-5 w-full py-3 rounded-full bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-sm font-bold transition-colors cursor-pointer"
            >
              Concluir
            </button>
          </div>
        ) : (
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-blue-50 text-[#0E4D92] text-[11px] font-bold mb-2.5">
              {isSelf ? <UserCheck className="w-3.5 h-3.5" /> : <Users className="w-3.5 h-3.5" />}
              {isSelf ? 'Aconteceu comigo' : 'Aconteceu com um colega'}
            </div>

            <h3 className="text-lg font-black text-[#14112B] tracking-tight">
              {isSelf ? 'Conte o que está acontecendo' : 'Ajude um colega em segurança'}
            </h3>
            <p className="text-[11.5px] text-gray-500 mt-0.5">
              Integração direta com a orientação escolar da SEDUC.
            </p>

            <form onSubmit={handleSubmit} className="mt-3.5 space-y-3">
              <div>
                <label className="block text-[11px] font-bold text-[#14112B] mb-1.5">
                  Tipo de situação
                </label>
                <div className="grid grid-cols-2 gap-1.5">
                  {categories.map((item) => (
                    <button
                      key={item}
                      type="button"
                      onClick={() => setCategory(item)}
                      className={`px-2.5 py-1.5 rounded-xl text-[11px] font-bold border text-left transition-all cursor-pointer ${
                        category === item
                          ? 'bg-[#2563EB] text-white border-[#2563EB] shadow-xs'
                          : 'bg-[#F7F6FA] text-gray-700 border-gray-200 hover:border-blue-300'
                      }`}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-bold text-[#14112B] mb-1">
                  O que ocorreu? (local, turma ou detalhes)
                </label>
                <textarea
                  rows={2}
                  required
                  value={details}
                  onChange={(e) => setDetails(e.target.value)}
                  placeholder={
                    isSelf
                      ? 'Ex.: No intervalo perto da quadra...'
                      : 'Ex.: Vi um colega sendo intimidado no corredor...'
                  }
                  className="w-full px-3 py-2 rounded-xl bg-[#F7F6FA] border border-gray-200 text-xs text-[#14112B] focus:outline-none focus:border-[#2563EB] transition-colors resize-none"
                />
              </div>

              <div className="flex items-center justify-between px-3 py-2 rounded-xl bg-blue-50/70 border border-blue-100">
                <div className="flex items-center gap-2">
                  <Lock className="w-3.5 h-3.5 text-[#0E4D92]" />
                  <span className="text-[11px] font-bold text-[#0E4D92]">
                    Enviar de forma anônima
                  </span>
                </div>
                <button
                  type="button"
                  role="switch"
                  aria-checked={anonymous}
                  onClick={() => setAnonymous((prev) => !prev)}
                  className={`w-9 h-5 rounded-full transition-colors p-0.5 cursor-pointer ${
                    anonymous ? 'bg-[#2563EB]' : 'bg-gray-300'
                  }`}
                >
                  <span
                    className={`block w-4 h-4 rounded-full bg-white shadow-xs transition-transform ${
                      anonymous ? 'translate-x-4' : 'translate-x-0'
                    }`}
                  />
                </button>
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-full bg-[#2563EB] hover:bg-[#1D4ED8] active:scale-[0.99] text-white text-sm font-bold shadow-md shadow-blue-500/25 transition-all cursor-pointer"
              >
                Enviar relato à SEDUC
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

/**
 * Modal de Ajuda Imediata / Emergência
 */
const EmergencyModal = ({ open, onClose }) => {
  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#14112B]/50 backdrop-blur-xs p-4"
      onClick={onClose}
    >
      <div
        className="w-full max-w-[380px] bg-white rounded-3xl p-5 sm:p-6 shadow-2xl border border-blue-100 relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Fechar janela de ajuda"
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-600 transition-colors cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-blue-50 text-[#0E4D92] text-[11px] font-bold mb-2.5">
          <PhoneCall className="w-3.5 h-3.5" />
          <span>Apoio imediato</span>
        </div>

        <h3 className="text-lg font-black text-[#14112B] tracking-tight">
          Precisa de ajuda agora?
        </h3>
        <p className="text-[11.5px] text-gray-500 mt-1 leading-relaxed">
          Se você ou alguém próximo estiver em risco ou precisando de escuta fora do horário escolar:
        </p>

        <div className="mt-3.5 space-y-2 text-xs">
          <div className="p-3 rounded-2xl bg-[#F7F6FA] border border-gray-200/80 flex items-center justify-between gap-2">
            <div>
              <div className="font-bold text-[#14112B]">CVV — Apoio Emocional</div>
              <div className="text-[11px] text-gray-500">Ligação gratuita e sigilosa, 24h</div>
            </div>
            <a
              href="tel:188"
              className="px-3 py-1.5 rounded-full bg-[#2563EB] text-white font-extrabold text-xs shrink-0"
            >
              Ligar 188
            </a>
          </div>

          <div className="p-3 rounded-2xl bg-[#F7F6FA] border border-gray-200/80 flex items-center justify-between gap-2">
            <div>
              <div className="font-bold text-[#14112B]">Emergência Policial</div>
              <div className="text-[11px] text-gray-500">Ameaça ou agressão imediata</div>
            </div>
            <a
              href="tel:190"
              className="px-3 py-1.5 rounded-full bg-[#14112B] text-white font-extrabold text-xs shrink-0"
            >
              Ligar 190
            </a>
          </div>

          <div className="p-3 rounded-2xl bg-blue-50/70 border border-blue-100 text-[11px] text-[#0E4D92] font-semibold">
            Na escola, procure também a coordenação, orientação pedagógica ou um professor de confiança.
          </div>
        </div>
      </div>
    </div>
  );
};

/**
 * Modal Informativo (Sigilo, Bullying e Termos)
 */
const InfoModal = ({ topicKey, onClose }) => {
  if (!topicKey || !INFO_TOPICS[topicKey]) return null;
  const topic = INFO_TOPICS[topicKey];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#14112B]/50 backdrop-blur-xs p-4"
      onClick={onClose}
    >
      <div
        className="w-full max-w-[390px] bg-white rounded-3xl p-5 sm:p-6 shadow-2xl border border-blue-100 relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Fechar informação"
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-600 transition-colors cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-blue-50 text-[#0E4D92] text-[11px] font-bold mb-2.5">
          <HelpCircle className="w-3.5 h-3.5" />
          <span>Voz Ativa • SEDUC</span>
        </div>

        <h3 className="text-lg font-black text-[#14112B] tracking-tight">
          {topic.title}
        </h3>
        <p className="text-xs text-gray-600 mt-1.5 leading-relaxed">
          {topic.description}
        </p>

        <ul className="mt-3.5 space-y-2 text-xs text-[#14112B]">
          {topic.highlights.map((point) => (
            <li
              key={point}
              className="px-3 py-2 rounded-xl bg-[#F7F6FA] border border-gray-200/80 font-medium leading-snug"
            >
              {point}
            </li>
          ))}
        </ul>

        <button
          type="button"
          onClick={onClose}
          className="mt-4 w-full py-2.5 rounded-full bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-xs font-bold transition-colors cursor-pointer"
        >
          Entendi
        </button>
      </div>
    </div>
  );
};

export default function App() {
  const [showReportOptions, setShowReportOptions] = useState(false);
  const [reportTarget, setReportTarget] = useState(null);
  const [emergencyOpen, setEmergencyOpen] = useState(false);
  const [activeInfoTopic, setActiveInfoTopic] = useState(null);

  return (
    <div className="min-h-screen w-full bg-[#F7F6FA] font-sans antialiased selection:bg-blue-200 selection:text-[#14112B]">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Caveat:wght@700&family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap');
        .font-handwriting {
          font-family: 'Caveat', cursive;
        }
        .font-jakarta {
          font-family: 'Plus Jakarta Sans', sans-serif;
        }
      `}</style>

      {/* Container Principal em tela cheia com imagem de fundo balanceada */}
      <main className="font-jakarta relative w-full min-h-screen overflow-hidden flex flex-col justify-between px-4 pt-4 pb-5 sm:px-8 sm:pt-6 sm:pb-6 lg:px-12 lg:py-7">
        {/* Imagem de fundo */}
        <div
          aria-hidden="true"
          className="block pointer-events-none absolute inset-0 z-0 bg-cover bg-center bg-no-repeat scale-[1.03] blur-[1.5px] opacity-35"
          style={{ backgroundImage: `url(${BACKGROUND_IMAGE_URL})` }}
        />

        {/* Véu intermediário para manter contraste equilibrado sem apagar o fundo */}
        <div
          aria-hidden="true"
          className="block pointer-events-none absolute inset-0 z-10 bg-gradient-to-b from-[#F7F6FA]/75 via-[#F7F6FA]/60 to-[#EEF3FB]/80"
        />

        {/* Topo: Contexto da Rede Escolar + Ajuda Imediata */}
        <header className="relative z-20 w-full max-w-5xl mx-auto flex items-center justify-between gap-2">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/80 backdrop-blur-xs border border-blue-100/90 text-[11px] sm:text-xs font-bold text-[#0B3B73] shadow-2xs truncate">
            <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0" />
            <span className="truncate">CETI DR. JOSÉ GUSMÃO</span>
          </div>

          <button
            type="button"
            onClick={() => setEmergencyOpen(true)}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/85 hover:bg-white backdrop-blur-xs border border-gray-200/90 text-[11px] sm:text-xs font-bold text-[#14112B] hover:text-[#2563EB] transition-colors shrink-0 cursor-pointer"
          >
            <PhoneCall className="w-3.5 h-3.5 text-[#2563EB] shrink-0" />
            <span>Ajuda imediata</span>
          </button>
        </header>

        {/* Área Centralizada */}
        <section className="my-auto text-center px-2 py-5 sm:py-6 z-20 flex flex-col items-center justify-center">
          <h1 className="text-[28px] sm:text-[36px] lg:text-[42px] font-extrabold text-[#14112B] leading-[1.08] tracking-[-0.035em] drop-shadow-[0_1px_1px_rgba(255,255,255,0.85)]">
            <span className="inline-flex items-baseline justify-center flex-wrap">
              <span>Você</span>
              <span className="relative inline-flex items-center mx-1.5">
                <span className="text-gray-500/80 line-through decoration-[#2563EB]/75 decoration-2">
                  não
                </span>
                <span
                  aria-label="nunca"
                  className="font-handwriting text-[#2563EB] text-[23px] sm:text-[28px] lg:text-[32px] font-bold -rotate-[12deg] -top-4 left-1/2 -translate-x-1/2 absolute select-none drop-shadow-[0_1px_1px_rgba(255,255,255,0.9)] whitespace-nowrap"
                >
                  nunca
                </span>
              </span>
              <span>precisa</span>
            </span>
            <span className="block mt-0.5">enfrentar isso sozinho</span>
          </h1>

          <p className="mt-3 px-3 py-1 rounded-full bg-white/60 backdrop-blur-[2px] text-[12px] sm:text-[14px] font-semibold text-gray-700 leading-snug max-w-[300px] sm:max-w-[460px]">
            &ldquo;Falar é o primeiro passo; acolher é o compromisso.&rdquo;
          </p>

          <div className="mt-4">
            <VozAtivaLogo />
          </div>
        </section>

        {/* Área Inferior: CTA Dinâmico de Denúncia + Garantia de Sigilo + Rodapé Minimalista */}
        <footer className="mt-auto w-full max-w-5xl mx-auto flex flex-col items-center gap-3.5 z-20">
          <div className="w-full flex flex-col items-center gap-2 min-h-[96px] justify-end">
            {!showReportOptions ? (
              <button
                type="button"
                onClick={() => setShowReportOptions(true)}
                className="w-full max-w-[340px] py-3.5 px-6 rounded-full bg-[#2563EB] hover:bg-[#1D4ED8] active:scale-[0.98] text-white text-[15px] font-bold tracking-tight shadow-[0_10px_24px_-6px_rgba(37,99,235,0.5)] transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
              >
                <ShieldAlert className="w-4 h-4 shrink-0" />
                <span>Fazer Denúncia</span>
              </button>
            ) : (
              <div className="w-full max-w-[340px] flex flex-col items-center gap-2.5">
                <button
                  type="button"
                  onClick={() => setReportTarget('self')}
                  className="w-full py-3.5 px-6 rounded-full bg-[#2563EB] hover:bg-[#1D4ED8] active:scale-[0.98] text-white text-[15px] font-bold tracking-tight shadow-[0_10px_24px_-6px_rgba(37,99,235,0.5)] transition-all duration-200 cursor-pointer"
                >
                  Aconteceu comigo
                </button>

                <div className="w-full flex items-center justify-center relative">
                  <button
                    type="button"
                    onClick={() => setShowReportOptions(false)}
                    aria-label="Voltar"
                    title="Voltar"
                    className="absolute left-1 p-1.5 rounded-full text-gray-500 hover:text-[#14112B] hover:bg-white/70 transition-colors cursor-pointer"
                  >
                    <ArrowLeft className="w-4 h-4" />
                  </button>

                  <button
                    type="button"
                    onClick={() => setReportTarget('peer')}
                    className="py-1.5 px-4 rounded-full bg-transparent backdrop-blur-none text-[14px] font-extrabold text-[#14112B] hover:text-[#2563EB] transition-colors cursor-pointer"
                  >
                    Aconteceu com um colega
                  </button>
                </div>
              </div>
            )}

            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/65 backdrop-blur-[2px] text-[11px] sm:text-xs font-semibold text-gray-700">
              <Lock className="w-3 h-3 text-[#0E4D92] shrink-0" />
              <span>Sigilo garantido • Acompanhamento escolar</span>
            </div>
          </div>

          {/* Rodapé minimalista para respiro no desktop e acesso rápido */}
          <nav
            aria-label="Informações do canal"
            className="w-full pt-2 border-t border-gray-900/10 flex flex-wrap items-center justify-center gap-x-5 gap-y-1 text-[11px] sm:text-xs font-semibold text-gray-600"
          >
            <button
              type="button"
              onClick={() => setActiveInfoTopic('secrecy')}
              className="hover:text-[#14112B] transition-colors cursor-pointer"
            >
              Como funciona o sigilo
            </button>
            <button
              type="button"
              onClick={() => setActiveInfoTopic('bullying')}
              className="hover:text-[#14112B] transition-colors cursor-pointer"
            >
              O que é bullying
            </button>
            <button
              type="button"
              onClick={() => setActiveInfoTopic('terms')}
              className="hover:text-[#14112B] transition-colors cursor-pointer"
            >
              Termos de uso
            </button>
          </nav>
        </footer>
      </main>

      <ReportModal
        reportTarget={reportTarget}
        onClose={() => setReportTarget(null)}
        onResetFlow={() => setShowReportOptions(false)}
      />

      <EmergencyModal
        open={emergencyOpen}
        onClose={() => setEmergencyOpen(false)}
      />

      <InfoModal
        topicKey={activeInfoTopic}
        onClose={() => setActiveInfoTopic(null)}
      />
    </div>
  );
}