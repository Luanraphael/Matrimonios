import Image from "next/image";
import type { ReactNode } from "react";
import { Check, ChevronsDown, Gift, Minus, Plus, TriangleAlert } from "lucide-react";

const IMG = "/mesaposta";
const CHECKOUT_URL = "https://pay.hotmart.com/K105411994W?checkoutMode=10";
const display = "font-display";

/* ------------------------------------------------------------------ */
/* Conteúdo                                                            */
/* ------------------------------------------------------------------ */

const HERO_BULLETS = [
  "Acceso de por vida",
  "Entrega inmediata por correo y WhatsApp",
  "Garantía incondicional de 7 días",
];

const INCLUDES_TOP = [
  "300 Dinámicas para encuentros y reuniones de matrimonios",
  "Actividad Guiada: Aprendiendo a vivir el Matrimonio",
  "128 Desafíos en Pareja",
  "85 Ideas de Rompehielos para encuentros y retiros matrimoniales",
  "52 Encuentros Matrimoniales Listos para Dirigir",
  "150 Recursos Imprimibles para Encuentros Matrimoniales",
  "38 Ideas para Encuentros Románticos Cristianos",
  "55 Estrategias para Líderes de Matrimonios",
  "Cómo Preparar un Tema que Transforme Parejas",
  "Carta para Mi Pareja (modelos personalizables)",
  "30 Temas Inteligentes para Desarrollar en Encuentros de Matrimonios",
  "Guía para Organizar Encuentros con Propósito",
];

const INCLUDES_BOTTOM = [
  "Modelos imprimibles y editables para tus reuniones",
  "Recursos listos para usar en PDF y formato digital",
  "Acceso Inmediato, Descarga Segura y Uso Ilimitado",
];

const TRUST_BADGES = [
  { label: "7 días de garantía", icon: null },
  { label: "Acceso inmediato", icon: "icone-acesso.png" },
  { label: "Soporte especializado", icon: "icone-suporte.png" },
  { label: "Satisfacción Garantizada", icon: "icone-satisfacao.png" },
  { label: "Compra 100% segura", icon: "icone-compra-segura.png" },
];

// Na original o 1º card mostra o título antes da imagem; os demais, imagem antes do título.
const DELIVERABLES = [
  { title: "128 Desafíos en Pareja", img: "entregavel-128-desafios.png", w: 1306, h: 1205, titleFirst: true },
  { title: "38 Ideas para Encuentros Románticos Cristianos", img: "entregavel-38-ideas.png", w: 1306, h: 1204 },
  { title: "55 Estrategias para Líderes de Matrimonios", img: "entregavel-55-estrategias.png", w: 1306, h: 1204 },
  { title: "300 Dinámicas para encuentros y reuniones de matrimonios", img: "bono-300-dinamicas.png", w: 1306, h: 1204 },
  { title: "52 Encuentros Matrimoniales Listos para Dirigir", img: "bono-52-encuentros.png", w: 1500, h: 1383 },
];

const BONUSES = [
  { title: "85 Ideas de Rompehielos para encuentros y retiros matrimoniales", img: "bono-85-rompehielos.png", w: 1306, h: 1204, price: "DE $29,90" },
  { title: "Cartas Personalizables para Mi Pareja", img: "bono-cartas.png", w: 1024, h: 576, price: "DE $37,90" },
  { title: "30 Temas Inteligentes para Desarrollar en Encuentros de Matrimonios", img: "bono-30-temas.png", w: 1306, h: 1204, price: "DE $37,90" },
  { title: "Cómo Preparar un Tema que Transforme Parejas", img: "bono-como-preparar-parejas.png", w: 1306, h: 1204, price: "DE $29,90" },
  { title: "150 Recursos Imprimibles para Encuentros Matrimoniales", img: "bono-150-recursos.png", w: 1242, h: 954, price: "DE $37,90" },
];

const TESTIMONIALS = [
  { img: "depoimento-1.png", w: 720, h: 508 },
  { img: "depoimento-2.png", w: 546, h: 350 },
  { img: "depoimento-3.png", w: 860, h: 452 },
  { img: "depoimento-4.png", w: 538, h: 172 },
  { img: "depoimento-5.png", w: 544, h: 246 },
  { img: "depoimento-6.jpg", w: 1024, h: 502 },
];

const FEATURES = [
  {
    img: "icone-imprime.jpg",
    title: "Imprime con facilidad",
    text: "Descarga e imprime todo el material desde tu casa, la iglesia o donde prefieras. Diseñado en alta calidad para que cada hoja refleje el amor y la excelencia del ministerio.",
  },
  {
    img: "icone-acceso-seguro.png",
    title: "Acceso seguro e instantáneo",
    text: "Tan pronto como tu pedido sea procesado de forma segura, recibirás un enlace directo en tu correo y WhatsApp para descargar el kit completo. Tendrás acceso inmediato a todos los materiales.",
  },
  {
    img: "icone-download.png",
    title: "Guarda y organiza sin complicaciones",
    text: "Todo el material está perfectamente organizado en carpetas por categorías. Simplemente descarga, guarda donde prefieras y ten siempre a mano tus recursos para ministrar.",
  },
];

const WHY = [
  "Cada dinámica, desafío y guía fue creada para conectar emocional y espiritualmente a los esposos, promoviendo crecimiento y restauración.",
  "Todo el contenido está organizado, listo para usar y diseñado para guiarte paso a paso en cada actividad.",
  "Comunicación, perdón, fe, fidelidad y propósito  cada material invita a reflexionar y aplicar principios bíblicos de forma práctica.",
  "Diseñado para inspirar, emocionar y mantener la atención en cada pareja durante toda la reunión.",
  "Cada recurso ayuda a construir hogares centrados en Cristo, llenos de amor y propósito eterno.",
];

const FOR_WHOM = [
  "Para iglesias que desean fortalecer su ministerio de matrimonios.",
  "Para líderes y pastores que quieren ministrar con herramientas efectivas.",
  "Para responsables de ministerios matrimoniales",
  "Para matrimonios que desean servir juntos.",
  "Para todo el que sueña con restaurar y fortalecer hogares en la fe.",
];

const OFFER_ITEMS = [
  "Todos los materiales imprimibles y editables.",
  "300 Dinámicas para encuentros y reuniones de matrimonios",
  "Actividad Guiada: Aprendiendo a vivir el Matrimonio",
  "128 Desafíos en Pareja",
  "85 Ideas de Rompehielos para encuentros y retiros matrimoniales",
  "52 Encuentros Matrimoniales Listos para Dirigir",
  "150 Recursos Imprimibles para Encuentros Matrimoniales",
  "38 Ideas para Encuentros Románticos Cristianos",
  "55 Estrategias para Líderes de Matrimonios",
  "Cómo Preparar un Tema que Transforme Parejas",
  "Carta para Mi Pareja (modelos personalizables)",
  "30 Temas Inteligentes para Desarrollar en Encuentros de Matrimonios",
  "Guía para Organizar Encuentros con Propósito",
  "Recursos listos para usar en PDF y formato digital",
  "Acceso Inmediato, Descarga Segura y Uso Ilimitado",
  "Acceso de por vida",
  "Entrega inmediata por correo y WhatsApp",
];

const FAQ: { q: string; a: ReactNode }[] = [
  {
    q: "¿Cómo recibiré el acceso al Kit?",
    a: (
      <>
        Tan pronto como tu pago sea confirmado, <strong>recibirás todo el material de forma automática</strong> en tu
        correo electrónico y también en tu <strong>WhatsApp</strong>.
        <br />
        No necesitas enviar comprobantes ni hacer ningún paso adicional — nuestro sistema envía todo{" "}
        <strong>de manera inmediata y segura</strong>.
        <br />
        Solo asegúrate de escribir correctamente tu correo y tu número de WhatsApp al momento de la compra
      </>
    ),
  },
  {
    q: "¿El material es físico o digital?",
    a: (
      <>
        El <strong>material es completamente digital</strong>, pero <strong>listo para imprimir</strong> desde cualquier
        impresora, sea en casa, en la iglesia o en una papelería local.
        <br />
        Cada archivo viene en alta calidad, perfectamente organizado por carpetas y diseñado para que puedas{" "}
        <strong>imprimir solo lo que necesites</strong>, de manera práctica y económica.
      </>
    ),
  },
  {
    q: "¿Tengo garantía?",
    a: (
      <>
        ¡Sí, por supuesto! 💛
        <br />
        Ofrecemos una <strong>garantía incondicional de 7 días</strong>.
        <br />
        Esto significa que puedes acceder al material, revisarlo con calma, y si por cualquier motivo no es lo que
        esperabas, podrás solicitar el reembolso total — sin complicaciones ni preguntas.
        <br />
        Queremos que te sientas completamente segura con tu compra.
      </>
    ),
  },
  {
    q: "¿El material está en español?",
    a: (
      <>
        Sí. Todo el contenido, incluyendo los libros, dinámicas, guías y materiales complementarios,{" "}
        <strong>está completamente en español</strong>, escrito con un lenguaje claro, cálido y adaptado para
        ministerios cristianos de toda Hispanoamérica.
      </>
    ),
  },
  {
    q: "¿Tengo soporte si tengo dudas?",
    a: (
      <>
        ¡Claro que sí!
        <br />
        Nuestro equipo ofrece <strong>soporte personalizado</strong> a través de Instagram.
        <br />
        Si tienes alguna pregunta o necesitas ayuda con tu material, puedes escribirnos directamente en:@
        <strong>laura.viscondi </strong>Siempre estamos respondiendo con cariño y ayudando a cada hermano y hermana de
        fe que forma parte de esta comunidad.
      </>
    ),
  },
];

/* ------------------------------------------------------------------ */
/* Peças de clay                                                       */
/* ------------------------------------------------------------------ */

/** Seção vermelha: equivale às seções de fundo azul da página original. */
function RedSlab({ id, className = "", children }: { id?: string; className?: string; children: ReactNode }) {
  return (
    <section
      id={id}
      className={`clay-red-slab relative w-full overflow-hidden py-14 text-white ${className}`}
    >
      <div className="relative z-10">{children}</div>
    </section>
  );
}

/** Seção clara: equivale às seções de fundo branco da página original. */
function LightSection({ id, className = "", children }: { id?: string; className?: string; children: ReactNode }) {
  return (
    <section id={id} className={`relative w-full py-16 ${className}`}>
      {children}
    </section>
  );
}

function Container({ className = "", children }: { className?: string; children: ReactNode }) {
  return <div className={`mx-auto w-full max-w-[680px] px-4 sm:px-6 ${className}`}>{children}</div>;
}

/** Destaque de palavra — no vermelho vira "pílula" branca com texto vermelho. */
function MarkOnRed({ children }: { children: ReactNode }) {
  return (
    <span className="text-gold">{children}</span>
  );
}

function SoftMarkOnRed({ children }: { children: ReactNode }) {
  return (
    <span className="text-gold font-bold">{children}</span>
  );
}

function CheckOrb({ size = "md" }: { size?: "sm" | "md" }) {
  const dims = size === "sm" ? "h-6 w-6" : "h-7 w-7";
  return (
    <span
      className={`clay-orb inline-flex ${dims} shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 text-white`}
    >
      <Check className={size === "sm" ? "h-3.5 w-3.5" : "h-4 w-4"} strokeWidth={3.5} />
    </span>
  );
}

function CheckList({ items, onRed = false, className = "" }: { items: string[]; onRed?: boolean; className?: string }) {
  return (
    <ul className={`flex flex-col gap-3.5 ${className}`}>
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3">
          <CheckOrb />
          <span
            className={`pt-0.5 text-base font-medium leading-relaxed ${onRed ? "text-white" : "text-ink"}`}
          >
            {item}
          </span>
        </li>
      ))}
    </ul>
  );
}

function CtaButton({ href, children, className = "" }: { href: string; children: ReactNode; className?: string }) {
  return (
    <a
      href={href}
      className={`clay-button ${display} inline-flex min-h-16 w-full items-center justify-center rounded-[20px] px-6 py-3 text-center text-base font-black tracking-wide sm:text-lg sm:w-auto ${className}`}
    >
      {children}
    </a>
  );
}

function IconOrb({ children, tone = "red" }: { children: ReactNode; tone?: "red" | "white" }) {
  const toneClass =
    tone === "red"
      ? "bg-gradient-to-br from-[#e4111b] to-[#a50309] text-white"
      : "bg-gradient-to-br from-white to-[#ffe3ea] text-love-600";
  return (
    <span className={`clay-orb inline-flex h-16 w-16 items-center justify-center rounded-full ${toneClass}`}>
      {children}
    </span>
  );
}

function SectionTitle({ children, onRed = false, className = "" }: { children: ReactNode; onRed?: boolean; className?: string }) {
  return (
    <h2
      className={`${display} text-center text-3xl font-black leading-[1.1] tracking-tight sm:text-4xl md:text-5xl ${
        onRed ? "text-white" : "text-ink"
      } ${className}`}
    >
      {children}
    </h2>
  );
}

function PaymentMethods({ className = "" }: { className?: string }) {
  return (
    <div className={`mx-auto w-full max-w-[420px] ${className}`}>
      <Image src={`${IMG}/formas-pagamento.webp`} alt="Formas de pago" width={819} height={173} className="w-full" />
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Página                                                              */
/* ------------------------------------------------------------------ */

export default function MesaPostaPage() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      {/* Blobs de fundo (luz ambiente do canvas) */}
      <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-[10%] -top-[10%] h-[60vh] w-[60vh] rounded-full bg-[#c8060f]/10 blur-3xl" />
        <div className="absolute -right-[10%] top-[20%] h-[60vh] w-[60vh] rounded-full bg-[#e4111b]/10 blur-3xl" />
      </div>

      {/* Barra promocional fixa */}
      <div className="fixed inset-x-0 top-0 z-50">
        <div
          className={`${display} flex h-11 w-full items-center justify-center gap-1.5 bg-[#870105] px-4 text-center text-[15px] font-extrabold tracking-wide text-white`}
        >
          ¡Descuento solo
          <span className="animate-clay-blink rounded-full bg-white px-2.5 py-0.5 text-love-600 underline underline-offset-2">
            HOY
          </span>
          en esta página!
        </div>
      </div>

      <main className="flex flex-col pt-11">
        {/* 1 · HERO (azul → vermelho) */}
        <RedSlab className="pt-8! sm:pt-12!">
          <Container className="flex flex-col items-center text-center">
            <h1 className={`${display} px-2 text-[30px] font-extrabold leading-[1.18] tracking-tight sm:text-5xl md:text-6xl`}>
              Sé el líder que <MarkOnRed>transforma corazones</MarkOnRed> y fortalece matrimonios con{" "}
              <MarkOnRed>amor y propósito.</MarkOnRed>
            </h1>

            <Image
              src={`${IMG}/kit-ministerial.png`}
              alt="Kit Ministerial para Matrimonios Cristianos"
              width={1024}
              height={1536}
              priority
              className="mx-auto mt-9 w-[77%] max-w-[380px] rounded-[15px] shadow-[0_10px_30px_rgba(0,0,0,0.25)]"
            />

            <p className="mt-8 text-lg font-medium leading-relaxed text-white/95 sm:text-xl">
              Descubre el <SoftMarkOnRed>Descubre el Kit Ministerial para Matrimonios Cristianos</SoftMarkOnRed> una
              colección completa con más de <strong className="font-extrabold">200 materiales </strong>listos para usar:{" "}
              <SoftMarkOnRed>dinámicas, desafíos, guías, cartas, ideas románticas y recursos prácticos</SoftMarkOnRed>{" "}
              diseñados para inspirar, fortalecer y unir matrimonios con propósito espiritual.
            </p>

            <CheckList items={HERO_BULLETS} onRed className="mt-8 w-full text-left" />

            <CtaButton href="#ofertas4" className="mt-10">
              QUIERO RECIBIR LOS MATERIALES
            </CtaButton>

            <PaymentMethods className="mt-8" />
          </Container>
        </RedSlab>

        {/* 2 · ¿Qué incluye? (branco → claro) */}
        <LightSection>
          <Container>
            <h2 className={`${display} text-center text-3xl font-black leading-[1.1] tracking-tight text-ink sm:text-4xl md:text-5xl`}>
              ¿Qué incluye el <span className="text-love-500">Kit Ministerial para Matrimonios Cristianos</span>
            </h2>

            <CheckList items={INCLUDES_TOP} className="mt-10" />

            <Image
              src={`${IMG}/kit-completo.png`}
              alt="Materiales del Kit Ministerial para Matrimonios Cristianos"
              width={1192}
              height={865}
              className="mt-10 w-full"
            />

            <CheckList items={INCLUDES_BOTTOM} className="mt-10" />
          </Container>
        </LightSection>

        {/* 3 · Selos de confiança (branco → claro) */}
        <LightSection className="pt-0">
          <Container className="grid grid-cols-1 gap-5">
            {TRUST_BADGES.map((badge) => (
              <div key={badge.label} className="clay-card flex flex-col items-center gap-3 rounded-[32px] px-6 py-6 text-center">
                {badge.icon ? (
                  <Image src={`${IMG}/${badge.icon}`} alt="" width={512} height={512} className="h-[84px] w-[84px]" />
                ) : (
                  <span className="clay-orb inline-flex h-[84px] w-[84px] items-center justify-center rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 text-white">
                    <Check className="h-11 w-11" strokeWidth={3.5} />
                  </span>
                )}
                <span className={`${display} text-2xl font-extrabold text-ink`}>{badge.label}</span>
              </div>
            ))}
          </Container>
        </LightSection>

        {/* 4 · Tendrás acceso a + 5 · Comprando en los días + 6 · Bonos (azul → vermelho) */}
        <RedSlab id="ofertas1">
          <Container>
            <SectionTitle onRed>
              Con el <MarkOnRed>Kit Ministerial para Matrimonios Cristianos</MarkOnRed> tendrás acceso a:
            </SectionTitle>

            <div className="mt-10 flex flex-col gap-8">
              {DELIVERABLES.map((d) => {
                const title = (
                  <h3 className={`${display} px-2 text-center text-2xl font-extrabold leading-tight text-white`}>{d.title}</h3>
                );
                return (
                  <article key={d.title} className="clay-red-card flex flex-col gap-5 rounded-[32px] p-4 sm:p-8">
                    {d.titleFirst && title}
                    <Image src={`${IMG}/${d.img}`} alt={d.title} width={d.w} height={d.h} className="w-full" />
                    {!d.titleFirst && title}
                  </article>
                );
              })}
            </div>

            <div className="mt-12 flex justify-center">
              <CtaButton href="#ofertas4">QUIERO RECEBER EL MATERIAIS</CtaButton>
            </div>
          </Container>

          {/* 5 · Comprando en los días */}
          <Container className="mt-16">
            <div className="clay-red-card flex flex-col items-center gap-6 rounded-[48px] px-6 py-10 text-center">
              <h2 className={`${display} text-3xl font-black leading-[1.15] tracking-tight text-white sm:text-4xl md:text-5xl`}>
                COMPRANDO EN LOS DÍAS <MarkOnRed>21, 22 y 23 de OCTUBRE</MarkOnRed> RECIBES
              </h2>
              <IconOrb tone="white">
                <ChevronsDown className="h-8 w-8" strokeWidth={3} />
              </IconOrb>
            </div>
          </Container>

          {/* 6 · Bonos */}
          <Container className="mt-16">
            <SectionTitle onRed>
              <MarkOnRed>BÔNOS Exclusivos</MarkOnRed> para que tus encuentros sean completos
            </SectionTitle>
            <div className="mt-8 flex justify-center">
              <IconOrb tone="white">
                <Gift className="h-8 w-8" strokeWidth={2.5} />
              </IconOrb>
            </div>
            <p className="mt-8 text-center text-lg font-medium leading-relaxed text-white/95">
              Al adquirir ahora no solo aseguras el material principal, sino que también recibes{" "}
              <SoftMarkOnRed>bonos exclusivos</SoftMarkOnRed> que enriquecerán aún más tus encuentros de pareja y
              fortalecerán tu ministerio con herramientas únicas, prácticas y llenas de propósito espiritual.
            </p>

            <div className="mt-10 flex flex-col gap-8">
              {/* 1º bônus: layout próprio (título → imagem → subtítulo → descrição) */}
              <article className="clay-red-card flex flex-col gap-5 rounded-[32px] p-4 text-center sm:p-8">
                <h3 className={`${display} text-2xl font-extrabold leading-tight text-white`}>
                  Actividad Guiada: Aprendiendo a vivir el Matrimonio
                </h3>
                <Image
                  src={`${IMG}/bono-actividad-guiada.png`}
                  alt="Actividad Guiada: Aprendiendo a vivir el Matrimonio"
                  width={1024}
                  height={576}
                  className="w-full"
                />
                <h4 className={`${display} text-xl font-extrabold text-white`}>Actividad para desarrollar con las Parejas:</h4>
                <p className="px-2 text-left text-base font-medium leading-relaxed text-white/90">
                  Una dinámica guiada y profunda sobre el matrimonio, creada para ayudar a cada pareja a comprender el
                  verdadero significado de vivir el matrimonio, fortalecer la unidad, alinear expectativas y caminar
                  juntos en un proceso de crecimiento, madurez y construcción de una relación sana, firme y llena de
                  propósito.
                </p>
                <BonusPrice price="DE $49,90" />
              </article>

              {BONUSES.map((b) => (
                <article key={b.title} className="clay-red-card flex flex-col gap-5 rounded-[32px] p-4 pb-8 text-center sm:p-8">
                  <Image src={`${IMG}/${b.img}`} alt={b.title} width={b.w} height={b.h} className="mx-auto w-full" />
                  <h3 className={`${display} px-2 text-2xl font-extrabold leading-tight text-white`}>{b.title}</h3>
                  <BonusPrice price={b.price} />
                </article>
              ))}
            </div>

            <div className="mt-12 flex justify-center">
              <CtaButton href="#ofertas4">QUIERO RECEBER EL MATERIAIS</CtaButton>
            </div>
          </Container>
        </RedSlab>

        {/* 7 · Depoimentos + recursos (branco → claro) */}
        <LightSection>
          <Container>
            <h2 className={`${display} clay-text-gradient text-center text-5xl font-black leading-[1.1] tracking-tight md:text-6xl`}>
              ¡Juntos estamos transformando ministerios!
            </h2>
            <div className="mt-8 flex justify-center">
              <IconOrb>
                <ChevronsDown className="h-8 w-8" strokeWidth={3} />
              </IconOrb>
            </div>

            <div className="mx-auto mt-10 flex max-w-[480px] flex-col gap-6">
              {TESTIMONIALS.map((t, i) => (
                <Image
                  key={t.img}
                  src={`${IMG}/${t.img}`}
                  alt={`Testimonio ${i + 1}`}
                  width={t.w}
                  height={t.h}
                  className="w-full rounded-[24px] shadow-[0_10px_28px_rgba(120,40,60,0.14)]"
                />
              ))}
            </div>

            <div className="mx-auto mt-16 flex max-w-[480px] flex-col gap-8">
              {FEATURES.map((f) => (
                <div key={f.title} className="clay-card flex flex-col items-center gap-4 rounded-[32px] p-8 text-center">
                  <Image
                    src={`${IMG}/${f.img}`}
                    alt=""
                    width={512}
                    height={512}
                    className="h-32 w-32 object-contain mix-blend-multiply"
                  />
                  <h3 className={`${display} text-2xl font-extrabold leading-tight text-ink`}>{f.title}</h3>
                  <p className="text-base font-medium leading-relaxed text-muted">{f.text}</p>
                </div>
              ))}
            </div>
          </Container>
        </LightSection>

        {/* 8 · ¿Por qué? + ¿Para quién? (azul → vermelho) */}
        <RedSlab>
          <Container>
            <SectionTitle onRed>
              ¿Por qué el <MarkOnRed>Kit Ministerial para Matrimonios Cristianos</MarkOnRed> transformará tu ministerio?
            </SectionTitle>

            <Image
              src={`${IMG}/kit-completo.png`}
              alt="Materiales del Kit Ministerial para Matrimonios Cristianos"
              width={1192}
              height={865}
              className="mt-10 w-full"
            />

            <div className="clay-red-card mt-12 rounded-[32px] p-6 sm:p-8">
              <CheckList items={WHY} onRed />
            </div>

            <SectionTitle onRed className="mt-14">
              ¿Para quién es indispensable este material?
            </SectionTitle>

            <div className="clay-red-card mt-10 rounded-[32px] p-6 sm:p-8">
              <CheckList items={FOR_WHOM} onRed />
            </div>
          </Container>
        </RedSlab>

        {/* 9 · Oferta (branco → claro, card vermelho) */}
        <LightSection id="ofertas4" className="scroll-mt-20">
          <Container>
            <SectionTitle>TENEMOS ALGO ESPECIAL PARA TI</SectionTitle>
            <div className="mt-8 flex justify-center">
              <IconOrb>
                <ChevronsDown className="h-8 w-8" strokeWidth={3} />
              </IconOrb>
            </div>

            <div className="relative mt-14">
              {/* Selo "Más Vendido" flutuando acima do card */}
              <div className="absolute -top-5 left-1/2 z-20 -translate-x-1/2">
                <span
                  className={`${display} clay-orb inline-flex items-center gap-1.5 whitespace-nowrap rounded-full bg-gradient-to-br from-white to-[#ffe3ea] px-5 py-2.5 text-sm font-black tracking-wide text-love-600`}
                >
                  🌟 Más Vendido
                </span>
              </div>

              <div className="clay-red-slab relative overflow-hidden rounded-[48px] px-5 pb-10 pt-14 text-white sm:px-10">
                <div className="relative z-10 flex flex-col items-center text-center">
                  <h3 className={`${display} text-3xl font-black leading-[1.15] tracking-tight sm:text-4xl`}>
                    Kit Ministerial para Matrimonios Cristianos
                    <br />
                    <MarkOnRed>PREMIUM</MarkOnRed>
                  </h3>

                  <Image
                    src={`${IMG}/kit-ministerial.png`}
                    alt="Kit Ministerial para Matrimonios Cristianos"
                    width={1024}
                    height={1536}
                    className="mt-8 w-full rounded-[15px] shadow-[0_10px_30px_rgba(0,0,0,0.25)]"
                  />

                  <div className="mt-8 w-full text-left">
                    <ul className="flex flex-col gap-3">
                      {OFFER_ITEMS.map((item) => (
                        <li key={item} className="flex items-start gap-3">
                          <CheckOrb size="sm" />
                          <span className="pt-0.5 text-[15px] font-bold leading-snug text-white">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <p className={`${display} mt-10 text-xl font-extrabold text-white/75 line-through decoration-2`}>
                    DE $ 127,00
                  </p>
                  <p className={`${display} mt-1 text-2xl font-black tracking-wide`}>HOY SOLO</p>
                  <p className={`${display} mt-1 text-7xl font-black leading-none tracking-tight sm:text-8xl`}>$14,90</p>
                  <p className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-bold text-love-600 shadow-[var(--shadow-clay-orb)]">
                    <TriangleAlert className="h-4 w-4 text-[#f59e0b]" strokeWidth={2.75} />
                    Puedes pagar en tu moneda local.
                  </p>
                  <p className={`${display} mt-6 text-lg font-black`}>O 5X DE $3,98</p>
                  <p className="text-sm font-bold text-white/90">Pago único</p>

                  <CtaButton href={CHECKOUT_URL} className="mt-6 sm:min-w-[320px]">
                    Comprar ahora
                  </CtaButton>
                  <p className="mt-3 text-xs font-bold uppercase tracking-widest text-white/85">Pago 100% seguro</p>

                  <PaymentMethods className="mt-6" />
                </div>
              </div>
            </div>
          </Container>
        </LightSection>

        {/* 10 · Garantia (azul → vermelho) */}
        <RedSlab>
          <Container>
            <div className="clay-red-card flex flex-col items-center gap-6 rounded-[48px] px-6 py-10 text-center sm:px-10">
              <Image src={`${IMG}/selo-7-dias.png`} alt="7 días de garantía" width={150} height={150} className="h-[140px] w-[140px]" />
              <h2 className={`${display} text-3xl font-black tracking-tight sm:text-4xl`}>7 DÍAS DE GARANTÍA</h2>
              <p className="text-lg font-medium leading-relaxed text-white/95">
                Puedes comprar con total seguridad. Después de la confirmación tendrás 7 días para acceder al material,
                explorar cada detalle y, si sientes que no es lo que esperabas, solicitar el reembolso íntegro sin
                complicaciones.
              </p>
              <Image src={`${IMG}/selo-site-seguro.png`} alt="Sitio seguro" width={300} height={51} className="w-[260px]" />
              <CtaButton href={CHECKOUT_URL} className="sm:min-w-[320px]">
                Comprar ahora
              </CtaButton>
            </div>
          </Container>
        </RedSlab>

        {/* 11 · Quiénes somos + FAQ (branco → claro) */}
        <LightSection>
          <Container>
            <h2 className={`${display} clay-text-gradient text-center text-5xl font-black leading-[1.1] tracking-tight md:text-6xl`}>
              ¿Quiénes somos?
            </h2>

            <div className="mt-10 flex justify-center">
              <Image
                src={`${IMG}/logo-ministerio-academy.png`}
                alt="Ministerio.Academy"
                width={1024}
                height={1024}
                className="h-[180px] w-[180px] rounded-full shadow-[0_10px_24px_rgba(120,40,60,0.18)]"
              />
            </div>

            <div className="clay-card mt-12 rounded-[32px] p-6 text-base font-medium leading-relaxed text-muted sm:p-8 sm:text-lg [&_strong]:font-bold [&_strong]:text-ink">
              ¡Paz del Señor! 💗
              <br />
              <br />
              <strong>Ministerio.Academy nació en 2020, en medio de la pandemia</strong>, cuando decidimos que nuestro
              ministerio no podía quedarse detenido.
              <br />
              <br />
              En un tiempo donde muchos encuentros dejaron de suceder presencialmente, comenzamos a crear{" "}
              <strong>pequeños kits, dinámicas y materiales ministeriales</strong> para mantener nuestras reuniones
              vivas, especiales y llenas de propósito.
              <br />
              <br />
              Primero hicimos recursos para nuestro propio ministerio de Mujeres… después para Jóvenes, Matrimonios y
              Hombres. Compartíamos las dinámicas en grupos, encuentros y células, y poco a poco comenzamos a recibir{" "}
              <strong>mensajes, testimonios y elogios de líderes</strong> que también querían usar esos materiales en
              sus iglesias.
              <br />
              <br />
              Fue ahí donde entendimos que{" "}
              <strong>
                Dios nos estaba llamando a ayudar no solo nuestro ministerio local, sino también otros ministerios
                alrededor del mundo
              </strong>{" "}
              🌎✨
              <br />
              <br />
              Desde entonces, <strong>MinisterioAcademy ha ayudado a miles de líderes cristianos</strong> a transformar
              reuniones comunes en experiencias más acogedoras, creativas, emocionales y espiritualmente impactantes.
              <br />
              <br />
              Creemos que{" "}
              <strong>cada encuentro puede convertirse en un momento que marque corazones y acerque personas a Dios.</strong>
              <br />
              <br />
              Por eso hoy compartimos <strong>ideas, dinámicas, herramientas, recursos y kits ministeriales</strong>{" "}
              diseñados para fortalecer células, encuentros y reuniones cristianas de manera práctica, hermosa y
              significativa.
              <br />
              <br />
              También creemos que Dios ministra en los pequeños detalles: en una dinámica bien pensada, en una
              conversación sincera, en un ambiente preparado con amor, y en cada momento que ayuda a una persona a
              sentirse escuchada, abrazada y más cerca de Su presencia ✨
              <br />
              <br />
              <strong>
                Conoce más en Instagram:{" "}
                <a
                  href="https://www.instagram.com/ministerio.academy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-love-500 underline-offset-4 hover:underline"
                >
                  @ministerio.academy
                </a>
              </strong>
              <br />
              <br />
              ¡Bienvenidos! ❤️
            </div>

            <div className="mt-10 flex justify-center">
              <CtaButton href={CHECKOUT_URL} className="sm:min-w-[320px]">
                Comprar ahora
              </CtaButton>
            </div>

            {/* FAQ */}
            <div className="mt-20 text-center">
              <p className={`${display} clay-text-gradient text-7xl font-black leading-none tracking-tight sm:text-8xl`}>FAQ</p>
              <h2 className={`${display} mt-3 text-2xl font-black tracking-wide text-ink sm:text-3xl`}>PREGUNTAS FRECUENTES</h2>
            </div>

            <div className="mt-10 flex flex-col gap-5">
              {FAQ.map((item, i) => (
                <details
                  key={item.q}
                  open={i === 0}
                  className="clay-faq clay-card group rounded-[24px] px-5 py-1 hover:-translate-y-1"
                >
                  <summary className="flex min-h-16 cursor-pointer items-center gap-4 py-3">
                    <span className="clay-orb inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#e4111b] to-[#a50309] text-white">
                      <Plus className="faq-icon-closed h-5 w-5" strokeWidth={3} />
                      <Minus className="faq-icon-open h-5 w-5" strokeWidth={3} />
                    </span>
                    <span className={`${display} text-left text-lg font-extrabold leading-snug text-ink`}>{item.q}</span>
                  </summary>
                  <div className="pb-5 pl-14 pr-1 text-base font-medium leading-relaxed text-muted [&_strong]:font-bold [&_strong]:text-ink">
                    {item.a}
                  </div>
                </details>
              ))}
            </div>
          </Container>
        </LightSection>

        {/* 12 · Rodapé */}
        <footer className="pb-6 text-center text-[13px]">
          <div className="font-medium">
            <a href="link-para-politica.html" className="mx-2.5 text-love-ink hover:underline">
              Politica de Privacidad
            </a>
            <span className="text-muted">|</span>
            <a href="link-para-termos.html" className="mx-2.5 text-love-ink hover:underline">
              Términos de Servicio
            </a>
          </div>
          <p className="mt-4 text-muted">© 2025 Todos los derechos reservados.</p>
        </footer>
      </main>
    </div>
  );
}

function BonusPrice({ price }: { price: string }) {
  return (
    <div className="flex flex-col items-center gap-3">
      <span className="clay-orb inline-flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-white to-[#ffe3ea] text-love-600">
        <Gift className="h-6 w-6" strokeWidth={2.5} />
      </span>
      <span className={`${display} text-lg font-extrabold text-white/75 line-through decoration-2`}>{price}</span>
      <span
        className={`${display} clay-orb inline-flex items-center rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 px-5 py-1.5 text-base font-black tracking-widest text-white`}
      >
        GRÁTIS
      </span>
    </div>
  );
}
