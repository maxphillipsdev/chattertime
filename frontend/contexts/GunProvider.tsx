import { createContext } from "react";

interface IGunProvider {}

const value: IGunProvider = {};

const GunProvider = createContext<IGunProvider>(value);

export default GunProvider;
