"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LikeUpdateManyWithWhereWithoutPostInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const LikeScalarWhereInput_1 = require("../inputs/LikeScalarWhereInput");
const LikeUpdateManyMutationInput_1 = require("../inputs/LikeUpdateManyMutationInput");
let LikeUpdateManyWithWhereWithoutPostInput = class LikeUpdateManyWithWhereWithoutPostInput {
};
exports.LikeUpdateManyWithWhereWithoutPostInput = LikeUpdateManyWithWhereWithoutPostInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LikeScalarWhereInput_1.LikeScalarWhereInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", LikeScalarWhereInput_1.LikeScalarWhereInput)
], LikeUpdateManyWithWhereWithoutPostInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LikeUpdateManyMutationInput_1.LikeUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", LikeUpdateManyMutationInput_1.LikeUpdateManyMutationInput)
], LikeUpdateManyWithWhereWithoutPostInput.prototype, "data", void 0);
exports.LikeUpdateManyWithWhereWithoutPostInput = LikeUpdateManyWithWhereWithoutPostInput = tslib_1.__decorate([
    TypeGraphQL.InputType("LikeUpdateManyWithWhereWithoutPostInput", {})
], LikeUpdateManyWithWhereWithoutPostInput);
