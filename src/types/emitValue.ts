export type EmitValue = {
  title: string;
  id: string;
}

export type Aufgabe = {
  effort: string;
  cost: string;
  veggie: string | boolean;
}

export type Recipe = {
  name: string;
    effort: string;
    cost: string;
    veggie: string;
    ingredients: string[],
    image: string;
}