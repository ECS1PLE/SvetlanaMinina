import React, { useEffect } from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import AboutMeCard from "./components/AboutMeCard";
import SectionTitle from "./components/SectionTitle";
import ProblemCard from "./components/ProblemCard";
import BenefitCard from "./components/BenefitCard";
import FormatCard from "./components/FormatCard";
import CaseCard from "./components/CaseCard";
import CTAButton from "./components/CTAButton"; // <- исправлено: CTAButton
import ReviewCard from "./components/ReviewCard";
import TrustSection from "./components/TrustSection";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

/* Heroicons: импортируем только те иконки, что действительно используем */
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

const App: React.FC = () => {
  // Плавная прокрутка к якорям (с учётом высоты хедера)
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
      const headerOffset = 80; // подстройте под фактическую высоту хедера
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

  return (
    <div className="app-root">
      <Header />

      <main>
        {/* HERO + About */}
        <section id="home" className="section section--home">
          <HeroSection />
          <AboutMeCard />
        </section>

        {/* Руководители */}
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
              <ProblemCard
                icon={
                  <ExclamationCircleIcon style={{ width: 20, height: 20 }} />
                }
                title="Тушите пожары вместо стратегии"
                description="Постоянно решаете оперативные задачи, не имея времени на стратегическое развитие."
              />
              <ProblemCard
                icon={<EyeIcon style={{ width: 20, height: 20 }} />}
                title="Делегируете, но переделываете"
                description="Не можете доверить задачи полностью, постоянно контролируете каждое действие."
              />
              <ProblemCard
                icon={<UserGroupIcon style={{ width: 20, height: 20 }} />}
                title="Команда ждет указаний"
                description="Сотрудники не проявляют инициативу и ждут ваших решений по каждому вопросу."
              />
              <ProblemCard
                icon={<HeartIcon style={{ width: 20, height: 20 }} />}
                title="Главный ответственный за всё"
                description="Устали быть единственным, кто несет ответственность за все результаты компании."
              />
              <ProblemCard
                icon={<BoltIcon style={{ width: 20, height: 20 }} />}
                title="Компетенции не дают расти"
                description="Текущие компетенции не дают возможность двигаться дальше в карьере."
              />
              <ProblemCard
                icon={
                  <ChatBubbleLeftRightIcon style={{ width: 20, height: 20 }} />
                }
                title="Страх перед диалогом"
                description="Боитесь выходить с диалогом к руководителю или собственнику бизнеса."
              />
            </div>

            <SectionTitle title="Чем я могу быть полезна:" />

            <div className="grid cols-3 gap-16 mb-24">
              <BenefitCard
                icon={<TagIcon style={{ width: 20, height: 20 }} />}
                title="Индивидуальная программа развития"
                description="Персональная дорожная карта на 3–6 месяцев: от диагностики до стратегического лидерства."
              />
              <BenefitCard
                icon={<GlobeAltIcon style={{ width: 20, height: 20 }} />}
                title="Коучинг стратегического мышления"
                description="Переход от оперативного режима к системному видению даже в условиях кризиса."
              />
              <BenefitCard
                icon={<UserIconSolid style={{ width: 20, height: 20 }} />}
                title="Создание команды мечты"
                description="Делегирование ответственности, а не задач. Среда для инициативы без контроля."
              />
              <BenefitCard
                icon={<ChatBubbleLeftIcon style={{ width: 20, height: 20 }} />}
                title="Коммуникация и влияние"
                description="Разрешение конфликтов, влияние через ясность, эффективное взаимодействие."
              />
              <BenefitCard
                icon={<HeartIconSolid style={{ width: 20, height: 20 }} />}
                title="Личные ценности как основа"
                description="Быть собой и эффективно вести за собой. Не терять внутренний компас."
              />
            </div>

            <div className="centered mb-24">
              <div className="grid cols-3 gap-12 max-width-4xl">
                <FormatCard
                  icon={<UserIconSolid style={{ width: 20, height: 20 }} />}
                  title="Индивидуальный коучинг"
                  description="3–6 месяцев, 1–2 занятия в месяц"
                />
                <FormatCard
                  icon={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      style={{ width: 20, height: 20 }}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 1112 0m-6-8a2 2 0 100 4m0-4a2 2 0 110 4m0 8a2 2 0 110-4m0 4a2 2 0 100-4m-2 8h10M20 4a2 2 0 100 4h-2m6 6v6m-6 0a2 2 0 100 4m2-2a2 2 0 10-2-2H9M9 16V6"
                      />
                    </svg>
                  }
                  title="Интенсив «Команда за 90 дней»"
                  description="Акцент на делегировании, доверии и развитии команды"
                />
                <FormatCard
                  icon={<EyeIcon style={{ width: 20, height: 20 }} />}
                  title="Стратегическая сессия"
                  description="Разовая сессия для взгляда со стороны «здесь и сейчас»"
                />
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

        {/* Для бизнеса */}
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
              <ProblemCard
                variant="warm"
                icon={<DocumentTextIcon style={{ width: 20, height: 20 }} />}
                title="Стратегия на бумаге"
                description="Стратегия «висит в презентации», но не влияет на повседневные решения."
              />
              <ProblemCard
                variant="warm"
                icon={<UserGroupIcon style={{ width: 20, height: 20 }} />}
                title="Изоляция руководителей"
                description="Руководители работают изолированно — у каждого свои цели и приоритеты."
              />
              <ProblemCard
                variant="warm"
                icon={
                  <ExclamationTriangleIcon style={{ width: 20, height: 20 }} />
                }
                title="Конфликты между отделами"
                description="Межведомственные проекты тонут в согласованиях и недопонимании."
              />
              <ProblemCard
                variant="warm"
                icon={<SpeakerWaveIcon style={{ width: 20, height: 20 }} />}
                title="Ценности на стене"
                description="Ценности компании — это лишь декларация, а не поведение лидеров."
              />
              <ProblemCard
                variant="warm"
                icon={<UsersIcon style={{ width: 20, height: 20 }} />}
                title="Компетенции не соответствуют"
                description="Компетенции ваших подчиненных не отвечают запросам бизнеса."
              />
            </div>

            <SectionTitle title="Чем я могу быть полезна бизнесу:" />

            <div className="grid cols-3 gap-16 mb-24">
              <BenefitCard
                variant="warm"
                icon={<LinkIcon style={{ width: 20, height: 20 }} />}
                title="Каскадирование стратегии"
                description="От совета директоров до линейного сотрудника через цели, метрики и ежедневные действия."
              />
              <BenefitCard
                variant="warm"
                icon={<UsersIcon style={{ width: 20, height: 20 }} />}
                title="Топ-команда и лидерство"
                description="Создание или трансформация топ-команды как единого организма с общей ответственностью."
              />
              <BenefitCard
                variant="warm"
                icon={<LinkIcon style={{ width: 20, height: 20 }} />}
                title="Интеграция отделов"
                description="Процессы согласования, совместные KPI и ритуалы, устраняющие «информационные стены»."
              />
              <BenefitCard
                variant="warm"
                icon={<ShieldCheckIcon style={{ width: 20, height: 20 }} />}
                title="Антикризисное управление"
                description="Быстрая стабилизация, сохранение команды и поиск точек роста даже в нестабильности."
              />
              <BenefitCard
                variant="warm"
                icon={<BuildingOfficeIcon style={{ width: 20, height: 20 }} />}
                title="Культура через лидерство"
                description="Ценности транслируются не словами, а поведением руководителей."
              />
            </div>

            <SectionTitle title="Форматы сотрудничества:" />
            <div className="grid cols-4 gap-12 mb-24 max-width-6xl">
              <FormatCard
                variant="warm"
                icon={<DocumentTextIcon style={{ width: 20, height: 20 }} />}
                title="Стратегические сессии"
                description="С топ-командой (1–3 дня, онлайн/офлайн)"
              />
              <FormatCard
                variant="warm"
                icon={<EyeIcon style={{ width: 20, height: 20 }} />}
                title="Диагностика зрелости"
                description="Экспресс-оценка «точек роста» управленческой зрелости"
              />
              <FormatCard
                variant="warm"
                icon={<RocketLaunchIcon style={{ width: 20, height: 20 }} />}
                title="Система устойчивого роста"
                description="Сопровождение трансформации в течение 3–6 месяцев"
              />
              <FormatCard
                variant="warm"
                icon={
                  <ShieldExclamationIcon style={{ width: 20, height: 20 }} />
                }
                title="Антикризисный модуль"
                description="Быстрая стабилизация + план выхода на рост"
              />
            </div>

            <div className="centered">
              <CTAButton variant="secondary" href="#contact">
                Записаться на бесплатную консультацию для бизнеса
              </CTAButton>
            </div>
          </div>
        </section>

        {/* Кейсы */}
        <section id="cases" className="section">
          <div className="container">
            <SectionTitle
              title="Мои кейсы"
              subtitle="Реальные результаты для руководителей и компаний"
            />

            <div className="grid cols-2 gap-16">
              <CaseCard
                icon={<UserIcon style={{ width: 24, height: 24 }} />}
                client="Индивидуальный клиент"
                result="Успешная адаптация и рост за 4 месяца"
                challenge="Только вступила на должность HR директора. Проблемы в коммуникациях с коллегами и собственником. Проблемный сотрудник в подчинении. Отсутствие времени на стратегию. Адаптация в должности."
                solution="Оценка действующих компетенций. Индивидуальная программа развития. Создание системы делегирования. Коучинг стратегического мышления."
              />
              <CaseCard
                variant="warm"
                icon={<BuildingOfficeIcon style={{ width: 24, height: 24 }} />}
                client="Почта России"
                result="Успешная трансформация за 8 месяцев"
                challenge="Трансформация структуры филиала в кластерную модель."
                solution="Создание кластера с нуля. Сформировала и обучила команду. Оптимизировала бизнес-процессы. Внедрила системный подход к управлению."
              />
            </div>
          </div>
        </section>

        {/* Обо мне */}
        <section id="about" className="section">
          <div className="container">
            <SectionTitle title="Обо мне" />
            <div className="max-width-4xl centered mb-24">
              <p className="muted mb-12">
                Я — Светлана Минина, эксперт по системному управлению, коуч и
                консультант для руководителей и компаний. Моя миссия — помочь
                сильным профессионалам стать лидерами нового поколения и
                построить бизнес, который работает даже в кризис.
              </p>
              <p className="muted mb-12">
                За последние 8 лет я помогла более 50 руководителям и 15
                компаниям трансформировать их подход к управлению, внедрить
                системные процессы и выйти на новый уровень роста.
              </p>
              <p className="muted">
                Мой подход основан на глубокой диагностике, индивидуальной
                работе и системных решениях, которые меняют не только поведение,
                но и культуру компании.
              </p>
            </div>

            <TrustSection />
          </div>
        </section>

        {/* Контакты */}
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
