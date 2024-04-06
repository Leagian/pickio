"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostUpdateToOneWithWhereWithoutBookmarksInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PostUpdateWithoutBookmarksInput_1 = require("../inputs/PostUpdateWithoutBookmarksInput");
const PostWhereInput_1 = require("../inputs/PostWhereInput");
let PostUpdateToOneWithWhereWithoutBookmarksInput = class PostUpdateToOneWithWhereWithoutBookmarksInput {
};
exports.PostUpdateToOneWithWhereWithoutBookmarksInput = PostUpdateToOneWithWhereWithoutBookmarksInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostWhereInput_1.PostWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PostWhereInput_1.PostWhereInput)
], PostUpdateToOneWithWhereWithoutBookmarksInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostUpdateWithoutBookmarksInput_1.PostUpdateWithoutBookmarksInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PostUpdateWithoutBookmarksInput_1.PostUpdateWithoutBookmarksInput)
], PostUpdateToOneWithWhereWithoutBookmarksInput.prototype, "data", void 0);
exports.PostUpdateToOneWithWhereWithoutBookmarksInput = PostUpdateToOneWithWhereWithoutBookmarksInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PostUpdateToOneWithWhereWithoutBookmarksInput", {})
], PostUpdateToOneWithWhereWithoutBookmarksInput);
