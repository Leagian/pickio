"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCountBookmarksArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BookmarkWhereInput_1 = require("../../inputs/BookmarkWhereInput");
let UserCountBookmarksArgs = class UserCountBookmarksArgs {
};
exports.UserCountBookmarksArgs = UserCountBookmarksArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookmarkWhereInput_1.BookmarkWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BookmarkWhereInput_1.BookmarkWhereInput)
], UserCountBookmarksArgs.prototype, "where", void 0);
exports.UserCountBookmarksArgs = UserCountBookmarksArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UserCountBookmarksArgs);
