import CTAButton from "./CTAButton";

const HeroSection = () => {
  return (
    <section className="hero" style={{ paddingTop: 64, paddingBottom: 64 }}>
      <div className="container text-center" style={{ maxWidth: 800 }}>
        <h1
          style={{
            fontSize: 36,
            fontWeight: 700,
            marginBottom: 12,
            lineHeight: 1.05,
          }}
        >
          Развивайтесь как лидер. <br /> Развивайте свой бизнес.
        </h1>
        <h2
          style={{
            fontSize: 20,
            fontWeight: 700,
            color: "#EA580C",
            marginBottom: 20,
          }}
        >
          Системное управление для руководителей и компаний.
        </h2>
        <p className="muted" style={{ marginBottom: 24 }}>
          Я помогаю сильным профессионалам становиться лидерами нового
          поколения...
        </p>

        <div
          style={{
            display: "flex",
            gap: 12,
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <CTAButton variant="primary" href="#leaders">
            Для руководителей
          </CTAButton>
          <CTAButton variant="secondary" href="#business">
            Для бизнеса
          </CTAButton>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
