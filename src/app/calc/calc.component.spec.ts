import { CalcComponent } from "./calc.component";
import { createTestComponentFactory } from "../../lib/src/spectator";
import { Spectator } from "../../lib/src/internals";

describe("CalcComponent", () => {
  let spectator: Spectator<CalcComponent>;
  const createComponent = createTestComponentFactory(CalcComponent);

  it("should be defined", () => {
    spectator = createComponent();
    expect(spectator.component).toBeTruthy();
  });

  it("should calc the value", () => {
    spectator = createComponent();
    const a = spectator.query(".a") as HTMLInputElement;
    const b = spectator.query(".b") as HTMLInputElement;
    spectator.typeInElement("1", a);
    spectator.typeInElement("2", b);

    expect(spectator.query(".result")).toHaveText("12");
  });
});
