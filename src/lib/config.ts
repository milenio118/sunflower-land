const NETWORK = import.meta.env.VITE_NETWORK as "mainnet" | "mumbai";
const DONATION_ADDRESS = import.meta.env.VITE_DONATION_ADDRESS;

const POLYGON_CHAIN_ID = NETWORK === "mainnet" ? 137 : 80001;

const API_URL = import.meta.env.VITE_API_URL;
const WISHING_WELL_CONTRACT = import.meta.env.VITE_WISHING_WELL_CONTRACT;
const BETA_CONTRACT = import.meta.env.VITE_BETA_CONTRACT;
const FARM_CONTRACT = import.meta.env.VITE_FARM_CONTRACT;
const INVENTORY_CONTRACT = import.meta.env.VITE_INVENTORY_CONTRACT;
const PAIR_CONTRACT = import.meta.env.VITE_PAIR_CONTRACT;
const SESSION_CONTRACT = import.meta.env.VITE_SESSION_CONTRACT;
const TOKEN_CONTRACT = import.meta.env.VITE_TOKEN_CONTRACT;

export const CONFIG = {
  NETWORK,
  POLYGON_CHAIN_ID,
  DONATION_ADDRESS,
  API_URL,

  WISHING_WELL_CONTRACT,
  BETA_CONTRACT,
  FARM_CONTRACT,
  INVENTORY_CONTRACT,
  PAIR_CONTRACT,
  SESSION_CONTRACT,
  TOKEN_CONTRACT,
};
