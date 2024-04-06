"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostCreateManyUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GraphQLScalars = tslib_1.__importStar(require("graphql-scalars"));
const client_1 = require("@prisma/client");
const PostCreateimagesInput_1 = require("../inputs/PostCreateimagesInput");
const PostCreatetagsInput_1 = require("../inputs/PostCreatetagsInput");
let PostCreateManyUserInput = class PostCreateManyUserInput {
};
exports.PostCreateManyUserInput = PostCreateManyUserInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PostCreateManyUserInput.prototype, "postId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PostCreateManyUserInput.prototype, "content", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PostCreateManyUserInput.prototype, "address", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GraphQLScalars.JSONResolver, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Object)
], PostCreateManyUserInput.prototype, "location", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostCreateimagesInput_1.PostCreateimagesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PostCreateimagesInput_1.PostCreateimagesInput)
], PostCreateManyUserInput.prototype, "images", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostCreatetagsInput_1.PostCreatetagsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PostCreatetagsInput_1.PostCreatetagsInput)
], PostCreateManyUserInput.prototype, "tags", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], PostCreateManyUserInput.prototype, "createdAt", void 0);
exports.PostCreateManyUserInput = PostCreateManyUserInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PostCreateManyUserInput", {})
], PostCreateManyUserInput);
