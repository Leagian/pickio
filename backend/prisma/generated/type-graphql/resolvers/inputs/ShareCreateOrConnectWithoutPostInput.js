"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShareCreateOrConnectWithoutPostInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ShareCreateWithoutPostInput_1 = require("../inputs/ShareCreateWithoutPostInput");
const ShareWhereUniqueInput_1 = require("../inputs/ShareWhereUniqueInput");
let ShareCreateOrConnectWithoutPostInput = class ShareCreateOrConnectWithoutPostInput {
};
exports.ShareCreateOrConnectWithoutPostInput = ShareCreateOrConnectWithoutPostInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ShareWhereUniqueInput_1.ShareWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ShareWhereUniqueInput_1.ShareWhereUniqueInput)
], ShareCreateOrConnectWithoutPostInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ShareCreateWithoutPostInput_1.ShareCreateWithoutPostInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ShareCreateWithoutPostInput_1.ShareCreateWithoutPostInput)
], ShareCreateOrConnectWithoutPostInput.prototype, "create", void 0);
exports.ShareCreateOrConnectWithoutPostInput = ShareCreateOrConnectWithoutPostInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ShareCreateOrConnectWithoutPostInput", {})
], ShareCreateOrConnectWithoutPostInput);
