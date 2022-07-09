// /* eslint-disable @typescript-eslint/no-var-requires */
/** @type {import('next').NextConfig} */

const withTM = require("next-transpile-modules")([
  "@crossmint/solana-auth-react-ui",
  "@crossmint/solana-auth-base"
]);
module.exports = withTM({
  reactStrictMode: true,
});
