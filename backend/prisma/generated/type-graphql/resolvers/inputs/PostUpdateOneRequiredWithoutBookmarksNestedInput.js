"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostUpdateOneRequiredWithoutBookmarksNestedInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PostCreateOrConnectWithoutBookmarksInput_1 = require("../inputs/PostCreateOrConnectWithoutBookmarksInput");
const PostCreateWithoutBookmarksInput_1 = require("../inputs/PostCreateWithoutBookmarksInput");
const PostUpdateToOneWithWhereWithoutBookmarksInput_1 = require("../inputs/PostUpdateToOneWithWhereWithoutBookmarksInput");
const PostUpsertWithoutBookmarksInput_1 = require("../inputs/PostUpsertWithoutBookmarksInput");
const PostWhereUniqueInput_1 = require("../inputs/PostWhereUniqueInput");
let PostUpdateOneRequiredWithoutBookmarksNestedInput = class PostUpdateOneRequiredWithoutBookmarksNestedInput {
};
exports.PostUpdateOneRequiredWithoutBookmarksNestedInput = PostUpdateOneRequiredWithoutBookmarksNestedInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostCreateWithoutBookmarksInput_1.PostCreateWithoutBookmarksInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PostCreateWithoutBookmarksInput_1.PostCreateWithoutBookmarksInput)
], PostUpdateOneRequiredWithoutBookmarksNestedInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostCreateOrConnectWithoutBookmarksInput_1.PostCreateOrConnectWithoutBookmarksInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PostCreateOrConnectWithoutBookmarksInput_1.PostCreateOrConnectWithoutBookmarksInput)
], PostUpdateOneRequiredWithoutBookmarksNestedInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostUpsertWithoutBookmarksInput_1.PostUpsertWithoutBookmarksInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PostUpsertWithoutBookmarksInput_1.PostUpsertWithoutBookmarksInput)
], PostUpdateOneRequiredWithoutBookmarksNestedInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostWhereUniqueInput_1.PostWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PostWhereUniqueInput_1.PostWhereUniqueInput)
], PostUpdateOneRequiredWithoutBookmarksNestedInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostUpdateToOneWithWhereWithoutBookmarksInput_1.PostUpdateToOneWithWhereWithoutBookmarksInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PostUpdateToOneWithWhereWithoutBookmarksInput_1.PostUpdateToOneWithWhereWithoutBookmarksInput)
], PostUpdateOneRequiredWithoutBookmarksNestedInput.prototype, "update", void 0);
exports.PostUpdateOneRequiredWithoutBookmarksNestedInput = PostUpdateOneRequiredWithoutBookmarksNestedInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PostUpdateOneRequiredWithoutBookmarksNestedInput", {})
], PostUpdateOneRequiredWithoutBookmarksNestedInput);
