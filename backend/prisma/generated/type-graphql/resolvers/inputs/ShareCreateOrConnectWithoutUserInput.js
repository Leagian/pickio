"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShareCreateOrConnectWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ShareCreateWithoutUserInput_1 = require("../inputs/ShareCreateWithoutUserInput");
const ShareWhereUniqueInput_1 = require("../inputs/ShareWhereUniqueInput");
let ShareCreateOrConnectWithoutUserInput = class ShareCreateOrConnectWithoutUserInput {
};
exports.ShareCreateOrConnectWithoutUserInput = ShareCreateOrConnectWithoutUserInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ShareWhereUniqueInput_1.ShareWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ShareWhereUniqueInput_1.ShareWhereUniqueInput)
], ShareCreateOrConnectWithoutUserInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ShareCreateWithoutUserInput_1.ShareCreateWithoutUserInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ShareCreateWithoutUserInput_1.ShareCreateWithoutUserInput)
], ShareCreateOrConnectWithoutUserInput.prototype, "create", void 0);
exports.ShareCreateOrConnectWithoutUserInput = ShareCreateOrConnectWithoutUserInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ShareCreateOrConnectWithoutUserInput", {})
], ShareCreateOrConnectWithoutUserInput);
