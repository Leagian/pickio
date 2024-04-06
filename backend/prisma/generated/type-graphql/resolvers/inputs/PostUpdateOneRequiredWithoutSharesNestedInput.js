"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostUpdateOneRequiredWithoutSharesNestedInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PostCreateOrConnectWithoutSharesInput_1 = require("../inputs/PostCreateOrConnectWithoutSharesInput");
const PostCreateWithoutSharesInput_1 = require("../inputs/PostCreateWithoutSharesInput");
const PostUpdateToOneWithWhereWithoutSharesInput_1 = require("../inputs/PostUpdateToOneWithWhereWithoutSharesInput");
const PostUpsertWithoutSharesInput_1 = require("../inputs/PostUpsertWithoutSharesInput");
const PostWhereUniqueInput_1 = require("../inputs/PostWhereUniqueInput");
let PostUpdateOneRequiredWithoutSharesNestedInput = class PostUpdateOneRequiredWithoutSharesNestedInput {
};
exports.PostUpdateOneRequiredWithoutSharesNestedInput = PostUpdateOneRequiredWithoutSharesNestedInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostCreateWithoutSharesInput_1.PostCreateWithoutSharesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PostCreateWithoutSharesInput_1.PostCreateWithoutSharesInput)
], PostUpdateOneRequiredWithoutSharesNestedInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostCreateOrConnectWithoutSharesInput_1.PostCreateOrConnectWithoutSharesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PostCreateOrConnectWithoutSharesInput_1.PostCreateOrConnectWithoutSharesInput)
], PostUpdateOneRequiredWithoutSharesNestedInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostUpsertWithoutSharesInput_1.PostUpsertWithoutSharesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PostUpsertWithoutSharesInput_1.PostUpsertWithoutSharesInput)
], PostUpdateOneRequiredWithoutSharesNestedInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostWhereUniqueInput_1.PostWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PostWhereUniqueInput_1.PostWhereUniqueInput)
], PostUpdateOneRequiredWithoutSharesNestedInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostUpdateToOneWithWhereWithoutSharesInput_1.PostUpdateToOneWithWhereWithoutSharesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PostUpdateToOneWithWhereWithoutSharesInput_1.PostUpdateToOneWithWhereWithoutSharesInput)
], PostUpdateOneRequiredWithoutSharesNestedInput.prototype, "update", void 0);
exports.PostUpdateOneRequiredWithoutSharesNestedInput = PostUpdateOneRequiredWithoutSharesNestedInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PostUpdateOneRequiredWithoutSharesNestedInput", {})
], PostUpdateOneRequiredWithoutSharesNestedInput);
