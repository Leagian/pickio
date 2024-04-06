"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShareScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var ShareScalarFieldEnum;
(function (ShareScalarFieldEnum) {
    ShareScalarFieldEnum["shareId"] = "shareId";
    ShareScalarFieldEnum["postId"] = "postId";
    ShareScalarFieldEnum["userId"] = "userId";
    ShareScalarFieldEnum["createdAt"] = "createdAt";
})(ShareScalarFieldEnum || (exports.ShareScalarFieldEnum = ShareScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(ShareScalarFieldEnum, {
    name: "ShareScalarFieldEnum",
    description: undefined,
});
