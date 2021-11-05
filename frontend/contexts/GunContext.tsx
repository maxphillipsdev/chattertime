import { createContext } from "react";

import { IGunChainReference } from "gun/types/chain";

interface IGunContext {
  db?: IGunChainReference<any, any, "pre_root">;
}

/**
 * A React context provider for interacting with the Gun.js instance.
 */
const GunContext = createContext<IGunContext>({});

export default GunContext;
