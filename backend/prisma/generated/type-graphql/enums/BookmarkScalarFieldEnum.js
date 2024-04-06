"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookmarkScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var BookmarkScalarFieldEnum;
(function (BookmarkScalarFieldEnum) {
    BookmarkScalarFieldEnum["bookmarkId"] = "bookmarkId";
    BookmarkScalarFieldEnum["postId"] = "postId";
    BookmarkScalarFieldEnum["userId"] = "userId";
    BookmarkScalarFieldEnum["createdAt"] = "createdAt";
})(BookmarkScalarFieldEnum || (exports.BookmarkScalarFieldEnum = BookmarkScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(BookmarkScalarFieldEnum, {
    name: "BookmarkScalarFieldEnum",
    description: undefined,
});
