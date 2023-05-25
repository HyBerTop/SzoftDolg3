/*
* File: app.spec.js
* Author: Róth József
* Copyright: 2023, Róth József
* Group: Szoft I/1/N
* Date: 2023-05-25
* Github: https://github.com/HyBerTop/SzoftDolgozat3
*/

describe("startCalc", () => {
  beforeEach(() => {
    spyOn(console, 'log');
    spyOn(window, 'StartBevitel');
    spyOn(window, 'StartKimenet');
  });

  it("Meghívja StartBevitel-t és StartKimenetet amikor state.GoodBemenet = true", () => {
    state.GoodBemenet = true;

    szamitas();

    expect(window.StartBevitel).toHaveBeenCalled();
    expect(window.StartKimenet).toHaveBeenCalled();
  });

  it("Nem Hívja meg StartBevitelt és StartKimenetet amikor state.GoodBemenet = false", () => {
    state.GoodBemenet = false;

    szamitas();

    expect(window.StartBevitel).not.toHaveBeenCalled();
    expect(window.StartKimenet).not.toHaveBeenCalled();
  });

  it("Akkor kéne működnie mikor state.GoodBemenet = true", () => {
    state.GoodBemenet = true;
    state.sugar = 2;
    state.magassag = 3;

    szamitas();

    expect(state.felulet).toBeCloseTo(62.831853, 5);
  });
});

describe("StartBevitel", () => {
  beforeEach(() => {
    spyOn(window, 'GoodBemenetEllenorzes').and.returnValue(true);
  });

  it("Beállítja a state.sugar és a state.magassag-ot", () => {
    doc.sugarBemenet.value = 2;
    doc.magassagBemenet.value = 3;

    StartBevitel();

    expect(state.sugar).toBe("2");
    expect(state.magassag).toBe("3");
  });

  it("Átrakja state.GoodBemenetet = false, ha nem jó a sugar input", () => {
    spyOn(window, 'GoodBemenetEllenorzes').and.returnValue(false);
    doc.sugarBemenet.value = "ervenytelen";

    StartBevitel();

    expect(state.GoodBemenet).toBe(false);
  });

  it("Beállítja state.GoodBemenetet false-ra ha magassag input nem jó", () => {
    spyOn(window, 'GoodBemenetEllenorzes').and.returnValue(false);
    doc.magassagBemenet.value = "ervenytelen";

    StartBevitel();

    expect(state.GoodBemenet).toBe(false);
  });
});

describe("StartKimenet", () => {
  beforeEach(() => {
    doc.feluletBemenet.value = "";
    doc.hibásBemenetDiv.style.display = 'none';
  });

  it("Beállítja doc.feluletBemenet értékét és elrejti doc.hibásBemenetDiv-et mikor state.GoodBemenet igaz", () => {
    state.GoodBemenet = true;
    state.felulet = 62.831853;

    StartKimenet();

    expect(doc.feluletBemenet.value).toBe("62.831853");
    expect(doc.hibásBemenetDiv.style.display).toBe('none');
  });

  it("Meg kéne mutatnia doc.hibásBemenetDiv-et mikor state.GoodBemenet hibás", () => {
    state.GoodBemenet = false;

    StartKimenet();

    expect(doc.hibásBemenetDiv.style.display).toBe('block');
  });
});

describe("számítfelulet", () => {
  it("Ki kéne számítania a felszínt a sugar és a magassag alapján", () => {
    const sugar = 2;
    const magassag = 3;
    const expectedFelulet = 62.831853;

    const felulet = számítfelulet(sugar, magassag);

    expect(felulet).toBeCloseTo(expectedFelulet, 5);
  });
});

describe("GoodBemenetEllenorzes", () => {
  it("Valid input-ra true-t kéne adnia", () => {
    const bemenet = "10.5";

    const eredmeny = GoodBemenetEllenorzes(bemenet);

    expect(eredmeny).toBe(true);
  });

  it("False-ra kéne visszatérnie ha rossz az input", () => {
    const bemenet = "ervenytelen";

    const eredmeny = GoodBemenetEllenorzes(bemenet);

    expect(eredmeny).toBe(false);
  });
});

describe("calcSurface", () => {
  it("Ki kéne számítania a felszínt", () => {
    const radius = 2;
    const height = 3;
    const expectedSurface = 62.831853;

    const surface = calcSurface(radius, height);

    expect(surface).toBeCloseTo(expectedSurface, 5);
  });
});

describe("isGoodInput", () => {
  it("true- ha valid az input", () => {
    const input = "10.5";

    const result = isGoodInput(input);

    expect(result).toBe(true);
  });

  it("false- ha invalid az input", () => {
    const input = "invalid";

    const result = isGoodInput(input);

    expect(result).toBe(false);
  });
});