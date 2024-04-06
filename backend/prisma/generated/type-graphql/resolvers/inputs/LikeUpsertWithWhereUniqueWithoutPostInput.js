"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LikeUpsertWithWhereUniqueWithoutPostInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const LikeCreateWithoutPostInput_1 = require("../inputs/LikeCreateWithoutPostInput");
const LikeUpdateWithoutPostInput_1 = require("../inputs/LikeUpdateWithoutPostInput");
const LikeWhereUniqueInput_1 = require("../inputs/LikeWhereUniqueInput");
let LikeUpsertWithWhereUniqueWithoutPostInput = class LikeUpsertWithWhereUniqueWithoutPostInput {
};
exports.LikeUpsertWithWhereUniqueWithoutPostInput = LikeUpsertWithWhereUniqueWithoutPostInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LikeWhereUniqueInput_1.LikeWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", LikeWhereUniqueInput_1.LikeWhereUniqueInput)
], LikeUpsertWithWhereUniqueWithoutPostInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LikeUpdateWithoutPostInput_1.LikeUpdateWithoutPostInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", LikeUpdateWithoutPostInput_1.LikeUpdateWithoutPostInput)
], LikeUpsertWithWhereUniqueWithoutPostInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LikeCreateWithoutPostInput_1.LikeCreateWithoutPostInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", LikeCreateWithoutPostInput_1.LikeCreateWithoutPostInput)
], LikeUpsertWithWhereUniqueWithoutPostInput.prototype, "create", void 0);
exports.LikeUpsertWithWhereUniqueWithoutPostInput = LikeUpsertWithWhereUniqueWithoutPostInput = tslib_1.__decorate([
    TypeGraphQL.InputType("LikeUpsertWithWhereUniqueWithoutPostInput", {})
], LikeUpsertWithWhereUniqueWithoutPostInput);
