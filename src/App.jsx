import {
  ArrowRightLeft,
  BadgeCheck,
  Banknote,
  CheckCircle2,
  CreditCard,
  Goal,
  HeartHandshake,
  LockKeyhole,
  Menu,
  PieChart,
  Shield,
  ShieldCheck,
  Sparkles,
  Star,
  Target,
  WalletCards,
  WalletMinimal,
} from 'lucide-react';

const features = [
  {
    icon: Goal,
    title: 'Metas em Conjunto',
    text: 'Poupem para a casa nova ou aquela viagem dos sonhos com objetivos compartilhados e progresso em tempo real.',
  },
  {
    icon: ArrowRightLeft,
    title: 'Divisao de Gastos',
    text: 'Dividam contas fixas e variaveis de forma automatica e justa, sem precisar manter planilhas paralelas.',
  },
  {
    icon: CreditCard,
    title: 'Gestao Transparente',
    text: 'Acompanhem cartoes individuais e compartilhados em uma visao unica do orcamento domestico.',
  },
  {
    icon: Shield,
    title: 'Sincronia Total',
    text: 'Recebam alertas para ambos sempre que houver uma movimentacao importante nas financas do par.',
  },
];

const flowSteps = [
  {
    title: 'Cadastro em Dupla',
    text: 'Vinculem as contas de forma rapida e segura para comecar a planejar juntos.',
    image: '/screens/convite-duo.png',
    alt: 'Tela de convite do parceiro no DuoFin',
  },
  {
    title: 'Divisao Inteligente',
    text: 'Definam como cada um contribui para as despesas comuns com apenas alguns toques.',
    image: '/screens/divisao-gastos.png',
    alt: 'Tela de divisao de gastos do DuoFin',
  },
  {
    title: 'Acerto de Contas',
    text: 'Uma visao clara de quem gastou o que e quanto falta para atingir as metas do mes.',
    image: '/screens/acerto-contas.png',
    alt: 'Tela de acerto de contas do DuoFin',
  },
  {
    title: 'Futuro em Harmonia',
    text: 'Acompanhem o crescimento do patrimonio do casal com relatorios e projecoes.',
    image: '/screens/conexao-bem-sucedida.png',
    alt: 'Tela de conexao bem-sucedida do DuoFin',
  },
];

const appScreens = [
  {
    title: 'Receitas em segundos',
    text: 'Registre entradas, anexos, repeticoes e conta de destino em uma tela objetiva.',
    image: '/screens/criar-receita.png',
    alt: 'Tela de criar receita do DuoFin',
  },
  {
    title: 'Transacoes claras',
    text: 'Acompanhe receitas, despesas e lancamentos do casal com filtros por periodo.',
    image: '/screens/transacoes.png',
    alt: 'Tela de transacoes do DuoFin',
  },
  {
    title: 'Relatorios completos',
    text: 'Veja balanco, evolucao patrimonial, objetivos e maiores gastos em uma visao consolidada do casal.',
    image: '/screens/relatorios.png',
    alt: 'Tela de relatorios do DuoFin',
  },
];

function App() {
  return (
    <div className="site-shell">
      <Header />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <AppScreens />
        <Testimonials />
        <FinalCta />
      </main>
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="topbar">
      <nav className="nav container" aria-label="Navegacao principal">
        <a className="brand" href="#top" aria-label="DuoFin">
          <span className="brand-mark">
            <WalletMinimal size={18} strokeWidth={2.5} />
          </span>
          DuoFin
        </a>

        <div className="nav-links">
          <a href="#features">Recursos</a>
          <a href="#como-funciona">Como funciona</a>
          <a href="#depoimentos">Depoimentos</a>
        </div>

        <button className="btn btn-primary btn-small" type="button" disabled>
          Em breve
        </button>

        <button className="icon-button" type="button" aria-label="Abrir menu">
          <Menu size={22} />
        </button>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero" id="top">
      <div className="container hero-grid">
        <div className="hero-copy">
          <div className="eyebrow">
            <span className="status-dot" />
            Novo: Cartoes virtuais ilimitados
          </div>

          <h1>
            Simplifique a vida <span>financeira do casal.</span>
          </h1>

          <p>
            Controlem gastos juntos, definam metas em conjunto e planejem o futuro
            financeiro do par. O app colaborativo projetado para a harmonia do
            casal.
          </p>

          <div className="hero-actions">
            <button className="btn btn-primary" type="button" disabled>
              <CheckCircle2 size={18} />
              Disponivel em breve
            </button>
          </div>

          <div className="waitlist">
            <div className="avatars" aria-hidden="true">
              <span className="avatar avatar-a">M</span>
              <span className="avatar avatar-b">L</span>
              <span className="avatar avatar-c">A</span>
              <span className="avatar avatar-count">+5k</span>
            </div>
            <span>Na lista de espera</span>
          </div>
        </div>

        <div className="hero-visual" aria-label="Previa do aplicativo DuoFin">
          <PhoneScreenshot
            className="hero-screenshot"
            src="/screens/inicio.png"
            alt="Tela inicial do aplicativo DuoFin"
          />
          <div className="floating-card floating-left">
            <span className="float-icon">
              <Banknote size={21} />
            </span>
            <div>
              <small>Transferencia rapida</small>
              <strong>R$ 450,00</strong>
            </div>
          </div>
          <div className="floating-card floating-right">
            <span className="float-icon secondary">
              <BadgeCheck size={21} />
            </span>
            <strong>Pagamento seguro</strong>
          </div>
        </div>
      </div>
    </section>
  );
}

function PhoneScreenshot({ src, alt, className = '' }) {
  return (
    <figure className={`screenshot-frame ${className}`}>
      <img src={src} alt={alt} />
    </figure>
  );
}

function HeroPhone() {
  return (
    <div className="phone hero-phone">
      <div className="phone-speaker" />
      <div className="app-header">
        <div>
          <small>Patrimonio liquido</small>
          <strong>R$ 55.592,39</strong>
        </div>
        <div className="mini-people">
          <span />
          <span />
        </div>
      </div>

      <div className="balance-grid">
        <Metric label="Receitas" value="R$ 4.950,98" positive />
        <Metric label="Despesas" value="R$ 2.347,78" />
      </div>

      <div className="goal-panel">
        <div className="goal-title">
          <Target size={17} />
          <span>Orcamento mensal</span>
          <strong>63%</strong>
        </div>
        <div className="progress-bar">
          <span style={{ width: '63%' }} />
        </div>
        <div className="goal-caption">
          <span>R$ 3.150,00</span>
          <span>Restam R$ 2.071,00</span>
        </div>
      </div>

      <div className="accounts-panel">
        <div className="panel-heading">
          <span>Saldo em contas</span>
          <strong>R$ 12.346,07</strong>
        </div>
        <AccountRow name="Banco 16" value="R$ 5.814,20" color="mint" />
        <AccountRow name="Banco 18" value="R$ 4.090,12" color="lavender" />
        <AccountRow name="Banco 148" value="R$ 2.441,75" color="pink" />
      </div>

      <div className="tabs">
        <span className="active">Todos</span>
        <span>Despesas</span>
        <span>Receitas</span>
      </div>

      <div className="transactions">
        <Transaction name="Mercado" value="-R$ 435,00" />
        <Transaction name="Streaming" value="-R$ 79,90" />
        <Transaction name="Salario" value="+R$ 4.950,98" positive />
      </div>
    </div>
  );
}

function Metric({ label, value, positive }) {
  return (
    <div className="metric-card">
      <span>{label}</span>
      <strong className={positive ? 'positive' : ''}>{value}</strong>
      <small>3 transacoes</small>
    </div>
  );
}

function AccountRow({ name, value, color }) {
  return (
    <div className="account-row">
      <span className={`account-dot ${color}`} />
      <span>{name}</span>
      <strong>{value}</strong>
    </div>
  );
}

function Transaction({ name, value, positive }) {
  return (
    <div className="transaction-row">
      <span className={positive ? 'income' : 'expense'} />
      <span>{name}</span>
      <strong className={positive ? 'positive' : ''}>{value}</strong>
    </div>
  );
}

function Features() {
  return (
    <section className="section section-white" id="features">
      <div className="container">
        <SectionHeading
          title="Tudo que voce precisa,"
          highlight="na palma da mao."
          text="Nossos recursos foram desenhados para dar controle total ao casal, com seguranca, clareza e rapidez para decidir juntos."
        />

        <div className="feature-grid">
          {features.map(({ icon: Icon, title, text }) => (
            <article className="feature-card" key={title}>
              <span className="feature-icon">
                <Icon size={24} />
              </span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  return (
    <section className="section flow-section" id="como-funciona">
      <div className="container">
        <SectionHeading
          title="Seu fluxo financeiro"
          highlight="simples e direto."
          text="Do cadastro ao acompanhamento mensal, tudo foi pensado para ser rapido, seguro e facil de revisar a dois."
        />

        <div className="flow-grid">
          {flowSteps.map((step, index) => (
            <article
              className="flow-step"
              style={{ '--step-offset': `${index * 28}px` }}
              key={step.title}
            >
              <MiniPhone number={index + 1} image={step.image} alt={step.alt} />
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function MiniPhone({ number, image, alt }) {
  return (
    <figure className="flow-phone">
      <span className="step-number">{number}</span>
      <img src={image} alt={alt} />
    </figure>
  );
}

function ConnectScreen() {
  return (
    <>
      <div className="puzzle">
        <span />
        <span />
        <span />
        <span />
      </div>
      <strong>Vamos conectar as contas!</strong>
      <div className="code-input">
        <span>1</span>
        <span>9</span>
        <span>5</span>
        <span>0</span>
        <span>3</span>
      </div>
      <div className="screen-button">Conectar contas</div>
    </>
  );
}

function SplitScreen() {
  return (
    <>
      <span className="screen-label">Divisao de gastos</span>
      <strong>Qual e a regra padrao?</strong>
      <div className="option-list">
        <span>Igual 50/50</span>
        <span>Proporcional a renda</span>
        <span>Percentual personalizado</span>
      </div>
      <div className="couple-row">
        <span>Marina<br />52%</span>
        <span>Lucas<br />48%</span>
      </div>
    </>
  );
}

function DashboardScreen() {
  return (
    <>
      <span className="screen-label">Acerto de contas</span>
      <strong>R$ 250,00</strong>
      <div className="tiny-chart">
        <span style={{ height: '42%' }} />
        <span style={{ height: '74%' }} />
        <span style={{ height: '58%' }} />
        <span style={{ height: '86%' }} />
        <span style={{ height: '50%' }} />
      </div>
      <div className="mini-transactions">
        <Transaction name="Mercado" value="-R$ 450,00" />
        <Transaction name="Internet" value="-R$ 120,00" />
        <Transaction name="Renda" value="+R$ 960,00" positive />
      </div>
      <div className="screen-button">Enviar agora</div>
    </>
  );
}

function FutureScreen() {
  return (
    <>
      <div className="future-illustration">
        <Sparkles size={26} />
        <HeartHandshake size={54} />
        <PieChart size={30} />
      </div>
      <strong>Agora voces estao conectados!</strong>
      <p>Bom-vindos ao DuoFin Pro.</p>
      <div className="screen-button">Vamos la</div>
    </>
  );
}

function AppScreens() {
  return (
    <section className="section section-white app-screens-section" id="telas">
      <div className="container">
        <SectionHeading
          title="O app do DuoFin"
          highlight="organiza a vida financeira do casal."
          text="Receitas, transacoes e relatorios ficam reunidos em uma experiencia simples para acompanhar o dinheiro, revisar decisoes e planejar juntos."
        />

        <div className="app-screen-grid">
          {appScreens.map((screen) => (
            <article className="app-screen-card" key={screen.title}>
              <PhoneScreenshot
                className="app-screen-shot"
                src={screen.image}
                alt={screen.alt}
              />
              <h3>{screen.title}</h3>
              <p>{screen.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="section section-white proof-section" id="depoimentos">
      <div className="container proof-container">
        <p className="kicker">Confiado por quem entende de dinheiro</p>
        <blockquote>
          "O DuoFin mudou a maneira como eu e meu parceiro lidamos com nossas
          financas. Acabaram as discussoes sobre contas e agora focamos nos
          nossos sonhos."
        </blockquote>

        <div className="testimonial-author">
          <img
            className="testimonial-photo"
            src="/images/testimonial-couple.jpg"
            alt="Marina e Lucas sorrindo juntos"
          />
          <div>
            <strong>Marina & Lucas</strong>
            <span>Usuarios Beta | Financas Compartilhadas</span>
          </div>
        </div>

        <div className="trust-row" id="seguranca">
          <span>
            <ShieldCheck size={18} /> Seguranca 100%
          </span>
          <span>
            <LockKeyhole size={18} /> Dados protegidos
          </span>
          <span>
            <Star size={18} /> Top Rated App
          </span>
        </div>
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <section className="final-cta">
      <div className="cta-pattern" />
      <div className="container cta-content">
        <h2>Prontos para harmonizar as financas do casal?</h2>
        <p>
          O DuoFin esta chegando para simplificar sua vida. Entre na lista de
          espera para receber acesso antecipado.
        </p>
        <button className="btn btn-inverted" type="button" disabled>
          <CheckCircle2 size={18} />
          Disponivel em breve
        </button>
      </div>
    </section>
  );
}

function SectionHeading({ title, highlight, text }) {
  return (
    <div className="section-heading">
      <h2>
        {title} <span>{highlight}</span>
      </h2>
      <p>{text}</p>
    </div>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <a className="footer-brand" href="#top" aria-label="DuoFin">
          <WalletCards size={16} />
          DuoFin
        </a>
        <p>(c) 2026 DuoFin. Precisao em cada decisao.</p>
      </div>
    </footer>
  );
}

export default App;
