"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOneShareArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ShareCreateInput_1 = require("../../../inputs/ShareCreateInput");
let CreateOneShareArgs = class CreateOneShareArgs {
};
exports.CreateOneShareArgs = CreateOneShareArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ShareCreateInput_1.ShareCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ShareCreateInput_1.ShareCreateInput)
], CreateOneShareArgs.prototype, "data", void 0);
exports.CreateOneShareArgs = CreateOneShareArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateOneShareArgs);
