"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostUpsertWithWhereUniqueWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PostCreateWithoutUserInput_1 = require("../inputs/PostCreateWithoutUserInput");
const PostUpdateWithoutUserInput_1 = require("../inputs/PostUpdateWithoutUserInput");
const PostWhereUniqueInput_1 = require("../inputs/PostWhereUniqueInput");
let PostUpsertWithWhereUniqueWithoutUserInput = class PostUpsertWithWhereUniqueWithoutUserInput {
};
exports.PostUpsertWithWhereUniqueWithoutUserInput = PostUpsertWithWhereUniqueWithoutUserInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostWhereUniqueInput_1.PostWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PostWhereUniqueInput_1.PostWhereUniqueInput)
], PostUpsertWithWhereUniqueWithoutUserInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostUpdateWithoutUserInput_1.PostUpdateWithoutUserInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PostUpdateWithoutUserInput_1.PostUpdateWithoutUserInput)
], PostUpsertWithWhereUniqueWithoutUserInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostCreateWithoutUserInput_1.PostCreateWithoutUserInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PostCreateWithoutUserInput_1.PostCreateWithoutUserInput)
], PostUpsertWithWhereUniqueWithoutUserInput.prototype, "create", void 0);
exports.PostUpsertWithWhereUniqueWithoutUserInput = PostUpsertWithWhereUniqueWithoutUserInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PostUpsertWithWhereUniqueWithoutUserInput", {})
], PostUpsertWithWhereUniqueWithoutUserInput);
