export const defaultType = ["standardowy", "sieciowy"];
export const pack = ["sztuka", "karton", "paleta"];

export const downsizedProducts = [
  {
    id: "Beskidzkie Paluszki z solą",
    type: ["standardowy", "sieciowy"],
    old: {
      masa: 0.3,
      standardowy: {
        karton: 12,
        paleta: 864,
      },
      sieciowy: {
        karton: 14,
        paleta: 756,
      },
    },
    new: {
      masa: 0.24,
      standardowy: {
        karton: 14,
        paleta: 1120,
      },
      sieciowy: {
        karton: 20,
        paleta: 1200,
      },
    },
  },
  {
    id: "Beskidzkie Paluszki ser-cebula",
    type: ["standardowy", "sieciowy"],
    old: {
      masa: 0.22,
      standardowy: {
        karton: 16,
        paleta: 1152,
      },
      sieciowy: {
        karton: 20,
        paleta: 1080,
      },
    },
    new: {
      masa: 0.18,
      standardowy: {
        karton: 16,
        paleta: 1280,
      },
      sieciowy: {
        karton: 20,
        paleta: 1200,
      },
    },
  },
  {
    id: "Beskidzkie Paluszki bekonowe",
    type: ["standardowy", "sieciowy"],
    old: {
      masa: 0.22,
      standardowy: {
        karton: 8,
        paleta: 1152,
      },
      sieciowy: {
        karton: 20,
        paleta: 1080,
      },
    },
    new: {
      masa: 0.18,
      standardowy: {
        karton: 8,
        paleta: 1280,
      },
      sieciowy: {
        karton: 20,
        paleta: 1200,
      },
    },
  },
  {
    id: "Beskidzkie Paluszki ser-pomidor",
    type: ["standardowy"],
    old: {
      masa: 0.21,
      standardowy: {
        karton: 16,
        paleta: 1152,
      },
      sieciowy: null,
    },
    new: {
      masa: 0.18,
      standardowy: {
        karton: 8,
        paleta: 1280,
      },
      sieciowy: null,
    },
  },
  {
    id: "Beskidzkie Paluszki delikatesowe",
    type: ["standardowy", "sieciowy"],
    old: {
      masa: 0.25,
      standardowy: {
        karton: 14,
        paleta: 1008,
      },
      sieciowy: {
        karton: 20,
        paleta: 1080,
      },
    },
    new: {
      masa: 0.2,
      standardowy: {
        karton: 16,
        paleta: 1280,
      },
      sieciowy: {
        karton: 20,
        paleta: 1200,
      },
    },
  },
  {
    id: "Beskidzkie Tuba Mix",
    type: ["standardowy"],
    old: {
      masa: 0.3,
      standardowy: {
        karton: 12,
        paleta: 720,
      },
      sieciowy: null,
    },
    new: {
      masa: 0.275,
      standardowy: {
        karton: 12,
        paleta: 720,
      },
      sieciowy: null,
    },
  },
  {
    id: "Beskidzkie Precelki z solą",
    type: ["standardowy"],
    old: {
      masa: 0.07,
      standardowy: {
        karton: 18,
        paleta: 2592,
      },
      sieciowy: null,
    },
    new: {
      masa: 0.06,
      standardowy: {
        karton: 18,
        paleta: 2592,
      },
      sieciowy: null,
    },
  },
  {
    id: "Beskidzkie Prażynki z solą",
    type: ["standardowy"],
    old: {
      masa: 0.12,
      standardowy: {
        karton: 14,
        paleta: 280,
      },
      sieciowy: null,
    },
    new: {
      masa: 0.08,
      standardowy: {
        karton: 20,
        paleta: 560,
      },
      sieciowy: null,
    },
  },
  {
    id: "Beskidzkie Prażynki bekonowe",
    type: ["standardowy"],
    old: {
      masa: 0.12,
      standardowy: {
        karton: 14,
        paleta: 280,
      },
      sieciowy: null,
    },
    new: {
      masa: 0.08,
      standardowy: {
        karton: 20,
        paleta: 560,
      },
      sieciowy: null,
    },
  },
];


export const competitiveProducts = [
  {
    id: "Lajkonik Paluszki z solą 300g",
    masa: 0.3,
    compared: [{ id: "Beskidzkie Paluszki z solą 240g", masa: 0.24 }],
    factor: 0.9,
  },
  {
    id: "Lajkonik Paluszki z solą 200g",
    masa: 0.2,
    compared: [{ id: "Beskidzkie Paluszki z solą 240g", masa: 0.24 }, { id: "Beskidzkie Paluszki z solą 200g", masa: 0.2 }],
    factor: 0.9,
  },
  {
    id: "Lajkonik Paluszki z solą 70g",
    masa: 0.07,
    compared: [{ id: "Beskidzkie Paluszki z solą 70g", masa: 0.07 }],
    factor: 0.9,
  },
  {
    id: "Lajkonik Paluszki cebulowe 150g",
    masa: 0.15,
    compared: [{ id: "Beskidzkie Paluszki ser-cebulka 180g", masa: 0.18 }],
    factor: 0.8,
  },
  {
    id: "Lajkonik Precelki z solą 130g",
    masa: 0.13,
    compared: [{ id: "Beskidzkie Precelki z solą 140g", masa: 0.14 }],
    factor: 0.9,
  },
  {
    id: "Lajkonik Krakersy z solą 90g",
    masa: 0.09,
    compared: [{ id: "Beskidzkie Krakersy z solą 90g", masa: 0.09 }],
    factor: 0.9,
  },
];