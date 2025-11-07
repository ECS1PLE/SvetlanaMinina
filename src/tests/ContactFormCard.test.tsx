import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ContactFormCard from "../components/UI/ContactFormCard";
import "@testing-library/jest-dom";

declare global {
  namespace NodeJS {
    interface Global {
      fetch?: jest.Mock;
    }
  }
}

beforeAll(() => {
  (globalThis as any).fetch = jest.fn();
});

beforeEach(() => {
  (globalThis.fetch as jest.Mock).mockClear();
  jest.spyOn(console, "error").mockImplementation(() => {});
});

afterEach(() => {
  (console.error as jest.Mock).mockRestore();
});

afterAll(() => {
  delete (globalThis as any).fetch;
});

describe("ContactFormCard (behaviour tests)", () => {
  it("не вызывает fetch при коротком имени", async () => {
    render(<ContactFormCard />);
    await userEvent.type(
      screen.getByPlaceholderText("+7 (___) ___-__-__"),
      "+79999999999"
    );
    await userEvent.click(screen.getByRole("checkbox"));
    await userEvent.click(
      screen.getByRole("button", { name: /отправить заявку/i })
    );
    expect((globalThis.fetch as jest.Mock).mock.calls.length).toBe(0);
  });

  it("не вызывает fetch при некорректном телефоне", async () => {
    render(<ContactFormCard />);
    await userEvent.type(screen.getByPlaceholderText("Ваше имя"), "Иван");
    await userEvent.click(screen.getByRole("checkbox"));
    await userEvent.click(
      screen.getByRole("button", { name: /отправить заявку/i })
    );
    expect((globalThis.fetch as jest.Mock).mock.calls.length).toBe(0);
  });

  it("не вызывает fetch если нет согласия", async () => {
    render(<ContactFormCard />);
    await userEvent.type(screen.getByPlaceholderText("Ваше имя"), "Иван");
    await userEvent.type(
      screen.getByPlaceholderText("+7 (___) ___-__-__"),
      "+79999999999"
    );
    await userEvent.click(
      screen.getByRole("button", { name: /отправить заявку/i })
    );
    expect((globalThis.fetch as jest.Mock).mock.calls.length).toBe(0);
  });

  it("вызывает fetch и очищает поля при успешной отправке", async () => {
    (globalThis.fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      json: async () => ({ message: "Отправлено" }),
    });

    render(<ContactFormCard />);

    const nameInput = screen.getByPlaceholderText(
      "Ваше имя"
    ) as HTMLInputElement;
    const emailInput = screen.getByPlaceholderText(
      "Ваш email"
    ) as HTMLInputElement;
    const phoneInput = screen.getByPlaceholderText(
      "+7 (___) ___-__-__"
    ) as HTMLInputElement;
    const checkbox = screen.getByRole("checkbox");
    const submitBtn = screen.getByRole("button", { name: /отправить заявку/i });

    await userEvent.type(nameInput, "Иван");
    await userEvent.type(emailInput, "ivan@example.com");
    await userEvent.type(phoneInput, "+79999999999");
    await userEvent.click(checkbox);
    await userEvent.click(submitBtn);

    expect((globalThis.fetch as jest.Mock).mock.calls.length).toBe(1);
    expect(nameInput.value).toBe("");
    expect(emailInput.value).toBe("");
    expect(phoneInput.value).toBe("");
  });

  it("вызывает fetch при сетевой ошибке и не очищает поля", async () => {
    (globalThis.fetch as jest.Mock).mockRejectedValueOnce(
      new Error("Network error")
    );

    render(<ContactFormCard />);

    const nameInput = screen.getByPlaceholderText(
      "Ваше имя"
    ) as HTMLInputElement;
    const phoneInput = screen.getByPlaceholderText(
      "+7 (___) ___-__-__"
    ) as HTMLInputElement;
    const checkbox = screen.getByRole("checkbox");
    const submitBtn = screen.getByRole("button", { name: /отправить заявку/i });

    await userEvent.type(nameInput, "Иван");
    await userEvent.type(phoneInput, "+79999999999");
    await userEvent.click(checkbox);
    await userEvent.click(submitBtn);

    expect((globalThis.fetch as jest.Mock).mock.calls.length).toBe(1);
    expect(nameInput.value).toBe("Иван");
    expect(phoneInput.value).toBe("+79999999999");
  });
});
