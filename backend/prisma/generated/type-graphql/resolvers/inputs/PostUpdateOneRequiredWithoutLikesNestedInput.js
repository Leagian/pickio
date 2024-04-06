"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostUpdateOneRequiredWithoutLikesNestedInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PostCreateOrConnectWithoutLikesInput_1 = require("../inputs/PostCreateOrConnectWithoutLikesInput");
const PostCreateWithoutLikesInput_1 = require("../inputs/PostCreateWithoutLikesInput");
const PostUpdateToOneWithWhereWithoutLikesInput_1 = require("../inputs/PostUpdateToOneWithWhereWithoutLikesInput");
const PostUpsertWithoutLikesInput_1 = require("../inputs/PostUpsertWithoutLikesInput");
const PostWhereUniqueInput_1 = require("../inputs/PostWhereUniqueInput");
let PostUpdateOneRequiredWithoutLikesNestedInput = class PostUpdateOneRequiredWithoutLikesNestedInput {
};
exports.PostUpdateOneRequiredWithoutLikesNestedInput = PostUpdateOneRequiredWithoutLikesNestedInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostCreateWithoutLikesInput_1.PostCreateWithoutLikesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PostCreateWithoutLikesInput_1.PostCreateWithoutLikesInput)
], PostUpdateOneRequiredWithoutLikesNestedInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostCreateOrConnectWithoutLikesInput_1.PostCreateOrConnectWithoutLikesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PostCreateOrConnectWithoutLikesInput_1.PostCreateOrConnectWithoutLikesInput)
], PostUpdateOneRequiredWithoutLikesNestedInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostUpsertWithoutLikesInput_1.PostUpsertWithoutLikesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PostUpsertWithoutLikesInput_1.PostUpsertWithoutLikesInput)
], PostUpdateOneRequiredWithoutLikesNestedInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostWhereUniqueInput_1.PostWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PostWhereUniqueInput_1.PostWhereUniqueInput)
], PostUpdateOneRequiredWithoutLikesNestedInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostUpdateToOneWithWhereWithoutLikesInput_1.PostUpdateToOneWithWhereWithoutLikesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PostUpdateToOneWithWhereWithoutLikesInput_1.PostUpdateToOneWithWhereWithoutLikesInput)
], PostUpdateOneRequiredWithoutLikesNestedInput.prototype, "update", void 0);
exports.PostUpdateOneRequiredWithoutLikesNestedInput = PostUpdateOneRequiredWithoutLikesNestedInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PostUpdateOneRequiredWithoutLikesNestedInput", {})
], PostUpdateOneRequiredWithoutLikesNestedInput);
