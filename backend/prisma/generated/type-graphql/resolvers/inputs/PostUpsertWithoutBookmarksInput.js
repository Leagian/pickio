"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostUpsertWithoutBookmarksInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PostCreateWithoutBookmarksInput_1 = require("../inputs/PostCreateWithoutBookmarksInput");
const PostUpdateWithoutBookmarksInput_1 = require("../inputs/PostUpdateWithoutBookmarksInput");
const PostWhereInput_1 = require("../inputs/PostWhereInput");
let PostUpsertWithoutBookmarksInput = class PostUpsertWithoutBookmarksInput {
};
exports.PostUpsertWithoutBookmarksInput = PostUpsertWithoutBookmarksInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostUpdateWithoutBookmarksInput_1.PostUpdateWithoutBookmarksInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PostUpdateWithoutBookmarksInput_1.PostUpdateWithoutBookmarksInput)
], PostUpsertWithoutBookmarksInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostCreateWithoutBookmarksInput_1.PostCreateWithoutBookmarksInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PostCreateWithoutBookmarksInput_1.PostCreateWithoutBookmarksInput)
], PostUpsertWithoutBookmarksInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostWhereInput_1.PostWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PostWhereInput_1.PostWhereInput)
], PostUpsertWithoutBookmarksInput.prototype, "where", void 0);
exports.PostUpsertWithoutBookmarksInput = PostUpsertWithoutBookmarksInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PostUpsertWithoutBookmarksInput", {})
], PostUpsertWithoutBookmarksInput);
