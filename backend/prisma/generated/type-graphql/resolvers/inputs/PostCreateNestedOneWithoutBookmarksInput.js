"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostCreateNestedOneWithoutBookmarksInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PostCreateOrConnectWithoutBookmarksInput_1 = require("../inputs/PostCreateOrConnectWithoutBookmarksInput");
const PostCreateWithoutBookmarksInput_1 = require("../inputs/PostCreateWithoutBookmarksInput");
const PostWhereUniqueInput_1 = require("../inputs/PostWhereUniqueInput");
let PostCreateNestedOneWithoutBookmarksInput = class PostCreateNestedOneWithoutBookmarksInput {
};
exports.PostCreateNestedOneWithoutBookmarksInput = PostCreateNestedOneWithoutBookmarksInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostCreateWithoutBookmarksInput_1.PostCreateWithoutBookmarksInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PostCreateWithoutBookmarksInput_1.PostCreateWithoutBookmarksInput)
], PostCreateNestedOneWithoutBookmarksInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostCreateOrConnectWithoutBookmarksInput_1.PostCreateOrConnectWithoutBookmarksInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PostCreateOrConnectWithoutBookmarksInput_1.PostCreateOrConnectWithoutBookmarksInput)
], PostCreateNestedOneWithoutBookmarksInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostWhereUniqueInput_1.PostWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PostWhereUniqueInput_1.PostWhereUniqueInput)
], PostCreateNestedOneWithoutBookmarksInput.prototype, "connect", void 0);
exports.PostCreateNestedOneWithoutBookmarksInput = PostCreateNestedOneWithoutBookmarksInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PostCreateNestedOneWithoutBookmarksInput", {})
], PostCreateNestedOneWithoutBookmarksInput);
