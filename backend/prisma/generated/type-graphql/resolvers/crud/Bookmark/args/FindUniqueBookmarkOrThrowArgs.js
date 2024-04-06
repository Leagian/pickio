"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueBookmarkOrThrowArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BookmarkWhereUniqueInput_1 = require("../../../inputs/BookmarkWhereUniqueInput");
let FindUniqueBookmarkOrThrowArgs = class FindUniqueBookmarkOrThrowArgs {
};
exports.FindUniqueBookmarkOrThrowArgs = FindUniqueBookmarkOrThrowArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookmarkWhereUniqueInput_1.BookmarkWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", BookmarkWhereUniqueInput_1.BookmarkWhereUniqueInput)
], FindUniqueBookmarkOrThrowArgs.prototype, "where", void 0);
exports.FindUniqueBookmarkOrThrowArgs = FindUniqueBookmarkOrThrowArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindUniqueBookmarkOrThrowArgs);
