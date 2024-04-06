"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostUpdateManyMutationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GraphQLScalars = tslib_1.__importStar(require("graphql-scalars"));
const client_1 = require("@prisma/client");
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const NullableStringFieldUpdateOperationsInput_1 = require("../inputs/NullableStringFieldUpdateOperationsInput");
const PostUpdateimagesInput_1 = require("../inputs/PostUpdateimagesInput");
const PostUpdatetagsInput_1 = require("../inputs/PostUpdatetagsInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
let PostUpdateManyMutationInput = class PostUpdateManyMutationInput {
};
exports.PostUpdateManyMutationInput = PostUpdateManyMutationInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], PostUpdateManyMutationInput.prototype, "postId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], PostUpdateManyMutationInput.prototype, "content", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], PostUpdateManyMutationInput.prototype, "address", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GraphQLScalars.JSONResolver, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Object)
], PostUpdateManyMutationInput.prototype, "location", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostUpdateimagesInput_1.PostUpdateimagesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PostUpdateimagesInput_1.PostUpdateimagesInput)
], PostUpdateManyMutationInput.prototype, "images", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostUpdatetagsInput_1.PostUpdatetagsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PostUpdatetagsInput_1.PostUpdatetagsInput)
], PostUpdateManyMutationInput.prototype, "tags", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], PostUpdateManyMutationInput.prototype, "createdAt", void 0);
exports.PostUpdateManyMutationInput = PostUpdateManyMutationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PostUpdateManyMutationInput", {})
], PostUpdateManyMutationInput);
