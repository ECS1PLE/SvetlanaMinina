import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

type FormValues = {
  fullName: string;
  contactMethod: "phone" | "whatsapp" | "telegram";
  phone: string;
  email?: string;
  agree: boolean;
};

interface ButtonProps {
  children: React.ReactNode;
  style?: React.CSSProperties;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
}

export default function UIButtonWithForm({
  children,
  style,
  onClick,
}: ButtonProps) {
  const [isOpen, setIsOpen] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>({
    defaultValues: {
      fullName: "",
      contactMethod: "phone",
      phone: "",
      email: "",
      agree: false,
    },
  });

  useEffect(() => {
    if (isOpen) {
      const scrollY = window.scrollY || window.pageYOffset;
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.left = "0";
      document.body.style.right = "0";
      document.body.style.overflow = "hidden";
      document.body.style.width = "100%";
    } else {
      const top = document.body.style.top;
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
      document.body.style.overflow = "";
      document.body.style.width = "";
      if (top) {
        const scrollY = parseInt(top || "0") * -1;
        window.scrollTo(0, scrollY);
      }
    }
    // cleanup on unmount in case
    return () => {
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
      document.body.style.overflow = "";
      document.body.style.width = "";
    };
  }, [isOpen]);

  function onSubmit(data: FormValues) {
    console.log("Submitted:", data);
    setIsOpen(false);
    reset();
  }

  return (
    <>
      <a
        className="btn"
        style={style}
        onClick={(e) => {
          setIsOpen((p) => !p);
          onClick?.(e as any);
        }}
      >
        {children}
      </a>

      {isOpen && (
        <div
          className="modal-overlay"
          role="dialog"
          aria-modal="true"
          onClick={() => setIsOpen(false)}
        >
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <h2>Оставить заявку</h2>

            <form onSubmit={handleSubmit(onSubmit)} noValidate>
              {/* Фамилия Имя */}
              <div className="form-row">
                <label className="form-label">Фамилия Имя</label>
                <input
                  className="form-input"
                  {...register("fullName", {
                    required: "Пожалуйста, укажите Фамилию и Имя",
                    minLength: { value: 2, message: "Слишком короткое имя" },
                  })}
                  placeholder="Иванов Иван"
                />
                {errors.fullName && (
                  <div className="error">{errors.fullName.message}</div>
                )}
              </div>

              {/* Удобный способ связи */}
              <div className="form-row">
                <label className="form-label">Удобный способ связи</label>
                <select
                  className="form-select"
                  {...register("contactMethod", {
                    required: "Выберите способ связи",
                  })}
                >
                  <option value="phone">Телефон</option>
                  <option value="whatsapp">WhatsApp</option>
                  <option value="telegram">Telegram</option>
                </select>
                {errors.contactMethod && (
                  <div className="error">{errors.contactMethod.message}</div>
                )}
              </div>

              {/* Телефон */}
              <div className="form-row">
                <label className="form-label">Телефон</label>
                <input
                  className="form-input"
                  {...register("phone", {
                    required: "Пожалуйста, укажите телефон",
                    minLength: { value: 5, message: "Неверный номер телефона" },
                  })}
                  placeholder="+7 (___) ___-__-__"
                />
                {errors.phone && (
                  <div className="error">{errors.phone.message}</div>
                )}
              </div>

              {/* E-mail */}
              <div className="form-row">
                <label className="form-label">E-mail</label>
                <input
                  className="form-input"
                  {...register("email", {
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Неверный формат E-mail",
                    },
                  })}
                  placeholder="name@example.com"
                />
                {errors.email && (
                  <div className="error">{errors.email.message}</div>
                )}
              </div>

              {/* Чекбокс */}
              <div
                className="form-row"
                style={{ display: "flex", alignItems: "center" }}
              >
                <input
                  id="agree"
                  type="checkbox"
                  className="form-checkbox"
                  {...register("agree", {
                    required:
                      "Необходимо согласиться с политикой конфиденциальности",
                  })}
                />
                <label htmlFor="agree">
                  Я согласен с{" "}
                  <a href="#" onClick={(e) => e.preventDefault()}>
                    политикой конфиденциальности
                  </a>
                </label>
              </div>
              {errors.agree && (
                <div className="error">{errors.agree.message}</div>
              )}

              <div className="form-actions">
                <button
                  type="button"
                  className="btn-ghost"
                  onClick={() => setIsOpen(false)}
                >
                  Отмена
                </button>
                <button type="submit" className="btn-primary">
                  Отправить
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
