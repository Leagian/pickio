"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyBookmarkArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BookmarkCreateManyInput_1 = require("../../../inputs/BookmarkCreateManyInput");
let CreateManyBookmarkArgs = class CreateManyBookmarkArgs {
};
exports.CreateManyBookmarkArgs = CreateManyBookmarkArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BookmarkCreateManyInput_1.BookmarkCreateManyInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], CreateManyBookmarkArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], CreateManyBookmarkArgs.prototype, "skipDuplicates", void 0);
exports.CreateManyBookmarkArgs = CreateManyBookmarkArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateManyBookmarkArgs);
