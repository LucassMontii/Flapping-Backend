"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
exports.default = {
    PORT: process.env.PORT || "3002",
};
//# sourceMappingURL=config.js.map