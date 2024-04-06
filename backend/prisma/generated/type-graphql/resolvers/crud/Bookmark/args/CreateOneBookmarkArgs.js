"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOneBookmarkArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BookmarkCreateInput_1 = require("../../../inputs/BookmarkCreateInput");
let CreateOneBookmarkArgs = class CreateOneBookmarkArgs {
};
exports.CreateOneBookmarkArgs = CreateOneBookmarkArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookmarkCreateInput_1.BookmarkCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", BookmarkCreateInput_1.BookmarkCreateInput)
], CreateOneBookmarkArgs.prototype, "data", void 0);
exports.CreateOneBookmarkArgs = CreateOneBookmarkArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateOneBookmarkArgs);
