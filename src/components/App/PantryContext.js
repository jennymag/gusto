import React from "react";

export const PantryContext = React.createContext({
  pantry: [],
  createTogglePantryStatus: () => {},
});
