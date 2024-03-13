import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

// import {create}
// import { createWeb3Model, defaultWagmiConfig } from "@web3modal/wagmi";
// import { WagmiConfig } from "wagmi";
// import { mainnet } from "wagmi/chains";

// const projectId = "32c5486118d84e1998d22d46d05fa495";

// const chains = [mainnet];

// const wagmiConfig = defaultWagmiConfig({
//   projectId,
//   chains,
//   metadata: {
//     name: "test",
//   },
// });

// createWeb3Model({
//   chains,
//   projectId,
//   wagmiConfig,
// });

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <WagmiConfig config={wagmiConfig}> */}
    <App />
    {/* </WagmiConfig> */}
  </React.StrictMode>
);
