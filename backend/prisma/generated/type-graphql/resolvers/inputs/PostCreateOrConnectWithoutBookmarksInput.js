"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostCreateOrConnectWithoutBookmarksInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PostCreateWithoutBookmarksInput_1 = require("../inputs/PostCreateWithoutBookmarksInput");
const PostWhereUniqueInput_1 = require("../inputs/PostWhereUniqueInput");
let PostCreateOrConnectWithoutBookmarksInput = class PostCreateOrConnectWithoutBookmarksInput {
};
exports.PostCreateOrConnectWithoutBookmarksInput = PostCreateOrConnectWithoutBookmarksInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostWhereUniqueInput_1.PostWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PostWhereUniqueInput_1.PostWhereUniqueInput)
], PostCreateOrConnectWithoutBookmarksInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostCreateWithoutBookmarksInput_1.PostCreateWithoutBookmarksInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PostCreateWithoutBookmarksInput_1.PostCreateWithoutBookmarksInput)
], PostCreateOrConnectWithoutBookmarksInput.prototype, "create", void 0);
exports.PostCreateOrConnectWithoutBookmarksInput = PostCreateOrConnectWithoutBookmarksInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PostCreateOrConnectWithoutBookmarksInput", {})
], PostCreateOrConnectWithoutBookmarksInput);
