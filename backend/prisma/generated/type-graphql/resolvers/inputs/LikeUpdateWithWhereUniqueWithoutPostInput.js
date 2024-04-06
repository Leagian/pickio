"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LikeUpdateWithWhereUniqueWithoutPostInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const LikeUpdateWithoutPostInput_1 = require("../inputs/LikeUpdateWithoutPostInput");
const LikeWhereUniqueInput_1 = require("../inputs/LikeWhereUniqueInput");
let LikeUpdateWithWhereUniqueWithoutPostInput = class LikeUpdateWithWhereUniqueWithoutPostInput {
};
exports.LikeUpdateWithWhereUniqueWithoutPostInput = LikeUpdateWithWhereUniqueWithoutPostInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LikeWhereUniqueInput_1.LikeWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", LikeWhereUniqueInput_1.LikeWhereUniqueInput)
], LikeUpdateWithWhereUniqueWithoutPostInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LikeUpdateWithoutPostInput_1.LikeUpdateWithoutPostInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", LikeUpdateWithoutPostInput_1.LikeUpdateWithoutPostInput)
], LikeUpdateWithWhereUniqueWithoutPostInput.prototype, "data", void 0);
exports.LikeUpdateWithWhereUniqueWithoutPostInput = LikeUpdateWithWhereUniqueWithoutPostInput = tslib_1.__decorate([
    TypeGraphQL.InputType("LikeUpdateWithWhereUniqueWithoutPostInput", {})
], LikeUpdateWithWhereUniqueWithoutPostInput);
