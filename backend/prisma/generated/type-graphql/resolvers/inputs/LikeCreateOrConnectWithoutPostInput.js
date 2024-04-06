"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LikeCreateOrConnectWithoutPostInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const LikeCreateWithoutPostInput_1 = require("../inputs/LikeCreateWithoutPostInput");
const LikeWhereUniqueInput_1 = require("../inputs/LikeWhereUniqueInput");
let LikeCreateOrConnectWithoutPostInput = class LikeCreateOrConnectWithoutPostInput {
};
exports.LikeCreateOrConnectWithoutPostInput = LikeCreateOrConnectWithoutPostInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LikeWhereUniqueInput_1.LikeWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", LikeWhereUniqueInput_1.LikeWhereUniqueInput)
], LikeCreateOrConnectWithoutPostInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LikeCreateWithoutPostInput_1.LikeCreateWithoutPostInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", LikeCreateWithoutPostInput_1.LikeCreateWithoutPostInput)
], LikeCreateOrConnectWithoutPostInput.prototype, "create", void 0);
exports.LikeCreateOrConnectWithoutPostInput = LikeCreateOrConnectWithoutPostInput = tslib_1.__decorate([
    TypeGraphQL.InputType("LikeCreateOrConnectWithoutPostInput", {})
], LikeCreateOrConnectWithoutPostInput);
