import React, { useEffect } from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import AboutMeCard from "./components/AboutMeCard";
import SectionTitle from "./components/SectionTitle";
import ProblemCard from "./components/ProblemCard";
import BenefitCard from "./components/BenefitCard";
import FormatCard from "./components/FormatCard";
import CaseCard from "./components/CaseCard";
import CTAButton from "./components/CTAButton";
import ReviewCard from "./components/ReviewCard";
import TrustSection from "./components/TrustSection";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

import {
  ExclamationCircleIcon,
  EyeIcon,
  UserGroupIcon,
  HeartIcon,
  BoltIcon,
  ChatBubbleLeftRightIcon,
  TagIcon,
  GlobeAltIcon,
  UserIcon as UserIconSolid,
  ChatBubbleLeftIcon,
  HeartIcon as HeartIconSolid,
  DocumentTextIcon,
  ExclamationTriangleIcon,
  SpeakerWaveIcon,
  UsersIcon,
  LinkIcon,
  ShieldCheckIcon,
  BuildingOfficeIcon,
  RocketLaunchIcon,
  ShieldExclamationIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import {
  Brain,
  Building,
  ChartColumn,
  Clock,
  Eye,
  MessageSquare,
  Rocket,
  Share2,
  Shield,
  Target,
  User,
  Users,
} from "lucide-react";

const App: React.FC = () => {
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      const anchor = target.closest('a[href^="#"]') as HTMLAnchorElement | null;
      if (!anchor) return;
      const href = anchor.getAttribute("href");
      if (!href || href === "#") return;
      const id = href.slice(1);
      const el = document.getElementById(id);
      if (!el) return;
      e.preventDefault();
      const headerOffset = 80;
      const elementPosition = el.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    };
    document.addEventListener("click", handler);
    return () => document.removeEventListener("click", handler);
  }, []);

  const reviews = [
    {
      rating: 5,
      text: "Работать с вами было легко и понятно. Задачи ставили компетентные и понятные. В трудных ситуациях помогали найти решения. Всегда помогали мне развиваться. Работали всегда командой где была понятна цель и действия.",
      name: "Юлия",
      position: "Руководитель группы федеральной компании",
    },
    {
      rating: 5,
      text: "Хочу выразить огромную благодарность Светлане, за проделанную со мной работу. Наше общение было очень открытым и доверительным, мне было легко обсуждать личные моменты. Она смогла меня направить в нужное направление. Теперь я понимаю, как мне действовать и что делать дальше, чтобы достичь своих целей.",
      name: "Диана",
      position: "Менеджер по продажам",
    },
    {
      rating: 5,
      text: "Мне было комфортно с вами работать в команде: всегда все четко, по делу и нацелено на результат. Я всегда была уверена в результате, работая с вами.",
      name: "Юлия",
      position: "HR BP федеральной компании",
    },
    {
      rating: 5,
      text: "Работа со Светланой помогла мне осознать мои текущие управленческие компетенции. Мы провели анализ моих сильных и слабых сторон. Составили индивидуальную программу с теоретическими знаниями и практическими заданиями для реального применения. За время работы мне удалось значительно повысить уровень управленческих компетенций. Мы выработали системный подход, что повысило производительность и снизило стресс.",
      name: "Татьяна",
      position: "HR директор производственной компании",
    },
  ];

  const leaderProblems = [
    {
      icon: <ExclamationCircleIcon style={{ width: 20, height: 20 }} />,
      title: "Тушите пожары вместо стратегии",
      description:
        "Постоянно решаете оперативные задачи, не имея времени на стратегическое развитие.",
      cardStyle: { backgroundColor: "rgb(220 38 38 / 0.1)" },
      iconStyle: { color: "rgb(220 38 38)" },
    },
    {
      icon: <EyeIcon style={{ width: 20, height: 20 }} />,
      title: "Делегируете, но переделываете",
      description:
        "Не можете доверить задачи полностью, постоянно контролируете каждое действие.",
      cardStyle: { backgroundColor: "rgb(202 138 4 / 0.1)" },
      iconStyle: { color: "rgb(202 138 4)" },
    },
    {
      icon: <UserGroupIcon style={{ width: 20, height: 20 }} />,
      title: "Команда ждет указаний",
      description:
        "Сотрудники не проявляют инициативу и ждут ваших решений по каждому вопросу.",
      cardStyle: { backgroundColor: "rgb(234 88 12 / 0.1)" },
      iconStyle: { color: "rgb(234 88 12)" },
    },
    {
      icon: <HeartIcon style={{ width: 20, height: 20 }} />,
      title: "Главный ответственный за всё",
      description:
        "Устали быть единственным, кто несет ответственность за все результаты компании.",
      cardStyle: { backgroundColor: "rgb(75 85 99 / 0.1)" },
      iconStyle: { color: "rgb(75 85 99)" },
    },
    {
      icon: <BoltIcon style={{ width: 20, height: 20 }} />,
      title: "Компетенции не дают расти",
      description:
        "Текущие компетенции не дают возможность двигаться дальше в карьере.",
      cardStyle: { backgroundColor: "rgb(37 99 235 / 0.1)" },
      iconStyle: { color: "rgb(37 99 235)" },
    },
    {
      icon: <ChatBubbleLeftRightIcon style={{ width: 20, height: 20 }} />,
      title: "Страх перед диалогом",
      description:
        "Боитесь выходить с диалогом к руководителю или собственнику бизнеса.",
      cardStyle: { backgroundColor: "rgb(147 51 234 / 0.1)" },
      iconStyle: { color: "rgb(147 51 234)" },
    },
  ];

  const leaderBenefits = [
    {
      icon: <Target style={{ width: 20, height: 20 }} />,
      title: "Создание команды мечты",
      description:
        "Делегирование ответственности, а не задач. Среда для инициативы без контроля.",
      cardStyle: { background: "linear-gradient(90deg, #6366f1, #3b82f6)" },
      iconStyle: { color: "white" },
    },
    {
      icon: <Brain style={{ width: 20, height: 20 }} />,
      title: "Коучинг стратегического мышления",
      description:
        "Переход от оперативного режима к системному видению даже в условиях кризиса.",
      cardStyle: { background: "linear-gradient(90deg, #22c55e , #10b981 )" },
      iconStyle: { color: "white" },
    },
    {
      icon: <Users style={{ width: 20, height: 20 }} />,
      title: "Создание команды мечты",
      description:
        "Делегирование ответственности, а не задач. Среда для инициативы без контроля.",
      cardStyle: { background: "linear-gradient(90deg, #a855f7  , #ec4899  )" },
      iconStyle: { color: "white" },
    },
    {
      icon: <MessageSquare style={{ width: 20, height: 20 }} />,
      title: "Коммуникация и влияние",
      description:
        "Разрешение конфликтов, влияние через ясность, эффективное взаимодействие.",
      cardStyle: {
        background: "linear-gradient(90deg, #f59e0b   , #f97316   )",
      },
      iconStyle: { color: "white" },
    },
    {
      icon: <HeartIcon style={{ width: 20, height: 20 }} />,
      title: "Личные ценности как основа",
      description:
        "Быть собой и эффективно вести за собой. Не терять внутренний компас.",
      cardStyle: {
        background: "linear-gradient(90deg, #ef4444   , #f43f5e   )",
      },
      iconStyle: { color: "white" },
    },
  ];

  const leaderFormats = [
    {
      icon: <UserIconSolid style={{ width: 24, height: 24 }} />,
      title: "Индивидуальный коучинг",
      description: "3–6 месяцев, 1–2 занятия в месяц",
      iconBoxStyle: {
        background: "linear-gradient(90deg, #2563eb , #4f46e5 )",
        iconColor: "white",
      },
    },
    {
      icon: <Clock style={{ width: 24, height: 24 }} />,
      title: "Интенсив «Команда за 90 дней»",
      description: "Акцент на делегировании, доверии и развитии команды",
      iconBoxStyle: {
        background: "linear-gradient(90deg, #2563eb , #4f46e5 )",
        iconColor: "white",
      },
    },
    {
      icon: <Eye style={{ width: 24, height: 24 }} />,
      title: "Стратегическая сессия",
      description: "Разовая сессия для взгляда со стороны «здесь и сейчас»",
      iconBoxStyle: {
        background: "linear-gradient(90deg, #2563eb , #4f46e5 )",
        iconColor: "white",
      },
    },
  ];

  const businessProblems = [
    {
      variant: "warm",
      icon: <DocumentTextIcon style={{ width: 20, height: 20 }} />,
      title: "Стратегия на бумаге",
      description:
        "Стратегия «висит в презентации», но не влияет на повседневные решения.",
      cardStyle: { backgroundColor: "rgb(220 38 38 / 0.1)" },
      iconStyle: { color: "rgb(220 38 38)" },
    },
    {
      variant: "warm",
      icon: <Users style={{ width: 20, height: 20 }} />,
      title: "Изоляция руководителей",
      description:
        "Руководители работают изолированно — у каждого свои цели и приоритеты.",
      cardStyle: { backgroundColor: "rgb(202 138 4 / 0.1)" },
      iconStyle: { color: "rgb(202 138 4)" },
    },
    {
      variant: "warm",
      icon: <ExclamationTriangleIcon style={{ width: 20, height: 20 }} />,
      title: "Конфликты между отделами",
      description:
        "Межведомственные проекты тонут в согласованиях и недопонимании.",
      cardStyle: { backgroundColor: "rgb(234 88 12 / 0.1)" },
      iconStyle: { color: "rgb(234 88 12)" },
    },
    {
      variant: "warm",
      icon: <Building style={{ width: 20, height: 20 }} />,
      title: "Ценности на стене",
      description:
        "Ценности компании — это лишь декларация, а не поведение лидеров.",
      cardStyle: { backgroundColor: "rgb(75 85 99 / 0.1)" },
      iconStyle: { color: "rgb(75 85 99)" },
    },
    {
      variant: "warm",
      icon: <Users style={{ width: 20, height: 20 }} />,
      title: "Компетенции не соответствуют",
      description:
        "Компетенции ваших подчиненных не отвечают запросам бизнеса.",
      cardStyle: { backgroundColor: "rgb(22 163 74 / 0.1)" },
      iconStyle: { color: "rgb(22 163 74)" },
    },
  ];

  const businessBenefits = [
    {
      variant: "warm",
      icon: <ChartColumn style={{ width: 24, height: 24 }} />,
      title: "Каскадирование стратегии",
      description:
        "От совета директоров до линейного сотрудника через цели, метрики и ежедневные действия.",
      cardStyle: {
        background: "linear-gradient(90deg, #f59e0b, #f97316)",
        width: "48px",
        height: "48px",
      },
      iconStyle: { color: "white" },
    },
    {
      variant: "warm",
      icon: <UsersIcon style={{ width: 24, height: 24 }} />,
      title: "Топ-команда и лидерство",
      description:
        "Создание или трансформация топ-команды как единого организма с общей ответственностью.",
      cardStyle: {
        background: "linear-gradient(90deg, #3b82f6 , #6366f1 )",
        width: "48px",
        height: "48px",
      },
      iconStyle: { color: "white" },
    },
    {
      variant: "warm",
      icon: <Share2 style={{ width: 24, height: 24 }} />,
      title: "Интеграция отделов",
      description:
        "Процессы согласования, совместные KPI и ритуалы, устраняющие «информационные стены».",
      cardStyle: {
        background: "linear-gradient(90deg, #22c55e  , #10b981  )",
        width: "48px",
        height: "48px",
      },
      iconStyle: { color: "white" },
    },
    {
      variant: "warm",
      icon: <Shield style={{ width: 24, height: 24 }} />,
      title: "Антикризисное управление",
      description:
        "Быстрая стабилизация, сохранение команды и поиск точек роста даже в нестабильности.",
      cardStyle: {
        background: "linear-gradient(90deg, #a855f7  , #ec4899  )",
        width: "48px",
        height: "48px",
      },
      iconStyle: { color: "white" },
    },
    {
      variant: "warm",
      icon: <Building style={{ width: 24, height: 24 }} />,
      title: "Культура через лидерство",
      description:
        "Ценности транслируются не словами, а поведением руководителей.",
      cardStyle: {
        background: "linear-gradient(90deg, #ef4444   , #f43f5e   )",
        width: "48px",
        height: "48px",
      },
      iconStyle: { color: "white" },
    },
  ];

  const businessFormats = [
    {
      variant: "warm",
      icon: <Brain style={{ width: 24, height: 24 }} />,
      title: "Стратегические сессии",
      description: "С топ-командой (1–3 дня, онлайн/офлайн)",
      iconBoxStyle: {
        background: "linear-gradient(90deg, #d97706  , #ea580c  )",
        iconColor: "white",
      },
    },
    {
      variant: "warm",
      icon: <Eye style={{ width: 24, height: 24 }} />,
      title: "Диагностика зрелости",
      description: "Экспресс-оценка «точек роста» управленческой зрелости",
      iconBoxStyle: {
        background: "linear-gradient(90deg, #d97706  , #ea580c  )",
        iconColor: "white",
      },
    },
    {
      variant: "warm",
      icon: <Rocket style={{ width: 24, height: 24 }} />,
      title: "Система устойчивого роста",
      description: "Сопровождение трансформации в течение 3–6 месяцев",
      iconBoxStyle: {
        background: "linear-gradient(90deg, #d97706  , #ea580c  )",
        iconColor: "white",
      },
    },
    {
      variant: "warm",
      icon: <Shield style={{ width: 24, height: 24 }} />,
      title: "Антикризисный модуль",
      description: "Быстрая стабилизация + план выхода на рост",
      iconBoxStyle: {
        background: "linear-gradient(90deg, #d97706  , #ea580c  )",
        iconColor: "white",
      },
    },
  ];

  const cases = [
    {
      icon: <UserIcon style={{ width: 24, height: 24 }} />,
      client: "Индивидуальный клиент",
      result: {
        highlight: "Успешная адаптация и рост",
        subtext: "за 4 месяца",
      },
      challenge:
        "Только вступила на должность HR директора. Проблемы в коммуникациях с коллегами и собственником. Проблемный сотрудник в подчинении. Отсутствие времени на стратегию. Адаптация в должности.",
      solution:
        "Оценка действующих компетенций. Индивидуальная программа развития. Создание системы делегирования. Коучинг стратегического мышления.",
    },
    {
      variant: "warm",
      icon: <BuildingOfficeIcon style={{ width: 24, height: 24 }} />,
      client: "Почта России",
      result: {
        highlight: "Успешная трансформация",
        subtext: "за 8 месяца",
      },
      challenge: "Трансформация структуры филиала в кластерную модель.",
      highlightColor: "#D97706",
      solution:
        "Создание кластера с нуля. Сформировала и обучила команду. Оптимизировала бизнес-процессы. Внедрила системный подход к управлению.",
    },
  ];

  return (
    <div className="app-root">
      <Header />
      <main>
        <section id="home" className="section section--home">
          <HeroSection />
          <AboutMeCard />
        </section>

        <section id="leaders" className="section">
          <div className="container">
            <SectionTitle
              title="«Руководитель нового поколения: от исполнителя — к архитектору»"
              subtitle="ИНДИВИДУАЛЬНАЯ РАБОТА"
            />

            <p className="lead centered mb-24">
              Вы сильный профессионал. Вы умеете «взять и сделать». Но настоящее
              лидерство — не в том, чтобы делать всё самому, а в том, чтобы
              создать систему, которая будет работать без вас.
            </p>

            <SectionTitle title="Если вы:" />

            <div className="grid cols-3 gap-16 mb-24">
              {leaderProblems.map((p, idx) => (
                <ProblemCard
                  key={p.title || idx}
                  icon={p.icon}
                  title={p.title}
                  description={p.description}
                  cardStyle={p.cardStyle}
                  iconStyle={p.iconStyle}
                />
              ))}
            </div>

            <SectionTitle title="Чем я могу быть полезна:" />

            <div className="grid cols-3 gap-16 mb-24">
              {leaderBenefits.map((p, idx) => (
                <ProblemCard
                  key={p.title || idx}
                  icon={p.icon}
                  title={p.title}
                  description={p.description}
                  cardStyle={p.cardStyle}
                  iconStyle={p.iconStyle}
                />
              ))}
            </div>

            <SectionTitle title="Формат работы:" />

            <div className="centered mb-24">
              <div className="grid cols-3 gap-12 max-width-5xl">
                {leaderFormats.map((f, idx) => (
                  <FormatCard
                    key={f.title || idx}
                    icon={f.icon}
                    title={f.title}
                    description={f.description}
                    iconBoxStyle={f.iconBoxStyle}
                  />
                ))}
              </div>

              <div style={{ marginTop: 20 }}>
                <CTAButton variant="primary" href="#contact">
                  Записаться на бесплатную 30-минутную сессию
                </CTAButton>
              </div>
            </div>

            <SectionTitle
              title="Отзывы клиентов"
              subtitle="Что говорят руководители и собственники бизнеса о нашей работе"
            />

            <div className="grid cols-2 gap-16">
              {reviews.map((r, i) => (
                <ReviewCard key={i} {...r} />
              ))}
            </div>
          </div>
        </section>

        <section id="business" className="section">
          <div className="container">
            <SectionTitle
              title="«Стратегия, которая работает. Команды, которые растут. Бизнес, который масштабируется — даже в кризис»"
              subtitle="ДЛЯ БИЗНЕСА"
            />

            <p className="lead centered mb-24">
              Вы вложили время, ресурсы и нервы в стратегию. Но на операционном
              уровне всё по-прежнему: хаос, недопонимание, «пожары», выгорание
              руководителей. Проблема не в людях. Проблема в системе.
            </p>

            <SectionTitle title="Если в вашей компании:" />

            <div className="grid cols-3 gap-16 mb-24">
              {businessProblems.map((p, idx) => (
                <ProblemCard
                  key={p.title || idx}
                  variant={p.variant}
                  icon={p.icon}
                  title={p.title}
                  description={p.description}
                  cardStyle={p.cardStyle}
                  iconStyle={p.iconStyle}
                />
              ))}
            </div>

            <SectionTitle title="Чем я могу быть полезна бизнесу:" />

            <div className="grid cols-3 gap-16 mb-24">
              {businessBenefits.map((b, idx) => (
                <ProblemCard
                  key={b.title || idx}
                  variant={b.variant}
                  icon={b.icon}
                  title={b.title}
                  description={b.description}
                  cardStyle={b.cardStyle}
                  iconStyle={b.iconStyle}
                />
              ))}
            </div>

            <SectionTitle title="Форматы сотрудничества:" />
            <div className="grid cols-4 gap-12 mb-24 max-width-6xl">
              {businessFormats.map((f, idx) => (
                <FormatCard
                  key={f.title || idx}
                  variant={f.variant as "warm" | "light"}
                  icon={f.icon}
                  title={f.title}
                  description={f.description}
                  iconBoxStyle={f.iconBoxStyle}
                />
              ))}
            </div>

            <div className="centered">
              <CTAButton variant="secondary" href="#contact">
                Записаться на бесплатную консультацию для бизнеса
              </CTAButton>
            </div>
          </div>
        </section>

        <section id="cases" className="section">
          <div className="container">
            <SectionTitle
              title="Мои кейсы"
              subtitle="Реальные результаты для руководителей и компаний"
            />

            <div className="grid cols-2 gap-16">
              {cases.map((c, idx) => (
                <CaseCard
                  key={c.client + idx}
                  variant={c.variant as "warm" | "light"}
                  icon={c.icon}
                  client={c.client}
                  result={c.result}
                  challenge={c.challenge}
                  solution={c.solution}
                  highlightColor={c.highlightColor}
                />
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="section">
          <div className="container">
            <TrustSection />
          </div>
        </section>

        <section id="contact" className="section">
          <div className="container">
            <ContactForm />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;
