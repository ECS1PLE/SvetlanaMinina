import CTAButton from "./UI/CTAButton";

const HeroSection = () => {
  return (
    <section className="hero" style={{ paddingTop: 64, paddingBottom: 64 }}>
      <div className="container text-center" style={{ maxWidth: 1200 }}>
        <h1
          style={{
            fontSize: 48,
            fontWeight: 700,
            lineHeight: 1.05,
            marginBottom: 0,
          }}
        >
          Развивайтесь как лидер. <br /> Развивайте свой бизнес.
        </h1>
        <h2
          style={{
            fontSize: 48,
            fontWeight: 700,
            color: "#EA580C",
            marginBottom: 20,
            marginTop: 0,
          }}
        >
          Системное управление для руководителей и компаний.
        </h2>
        <p
          className="muted"
          style={{
            marginBottom: 24,
            maxWidth: 700,
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          Я помогаю сильным профессионалам становиться лидерами нового поколения
          и компаниям выстраивать системы управления, которые работают даже в
          кризис.
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
