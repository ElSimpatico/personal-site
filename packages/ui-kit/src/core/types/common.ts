interface ClassMap {
  [className: string]: boolean;
}

export type ClassType = string | ClassMap;
